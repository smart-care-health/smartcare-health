import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  organization?: string;
  inquiryType: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Contact form submission started');
    
    // Parse request data
    const formData: ContactFormData = await req.json();
    console.log('Received form data:', { ...formData, message: formData.message ? '[message present]' : '[no message]' });

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.inquiryType || !formData.message) {
      console.log('Missing required fields');
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.log('Invalid email format');
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // Store the contact submission
    console.log('Inserting contact submission into database');
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        organization: formData.organization || null,
        inquiry_type: formData.inquiryType,
        message: formData.message
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save contact submission" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log('Contact submission saved with ID:', submission.id);

    // Initialize Resend
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    // Send auto-reply email to user
    console.log('Sending auto-reply email to user');
    try {
      const userEmailResponse = await resend.emails.send({
        from: "Smartcare Health Solutions <onboarding@resend.dev>",
        to: [formData.email],
        subject: "Thank you for contacting Smartcare Health Solutions",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin-bottom: 10px;">Smartcare Health Solutions</h1>
              <p style="color: #666; font-size: 16px;">Transforming Healthcare Through Innovation</p>
            </div>
            
            <h2 style="color: #2563eb; margin-bottom: 20px;">Thank you for reaching out, ${formData.firstName}!</h2>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              We have received your inquiry regarding <strong>${formData.inquiryType}</strong> and appreciate your interest in partnering with us to transform healthcare.
            </p>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2563eb; margin-top: 0;">Your Message Details:</h3>
              <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
              ${formData.organization ? `<p><strong>Organization:</strong> ${formData.organization}</p>` : ''}
              <p><strong>Inquiry Type:</strong> ${formData.inquiryType}</p>
              <p><strong>Message:</strong> ${formData.message}</p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Our team will review your message and get back to you within <strong>24 hours</strong>. In the meantime, 
              feel free to explore our solutions and learn more about our mission to make healthcare accessible across Africa.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://smartcare.africa" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Visit Our Website
              </a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; font-size: 14px; color: #666;">
              <p>Best regards,<br>
              The Smartcare Health Solutions Team</p>
              <p style="margin-top: 20px;">
                📧 partnerships@smartcare.africa<br>
                📞 +234 (0) 810 925 2120<br>
                📍 Lekki, Lagos, Nigeria
              </p>
            </div>
          </div>
        `,
      });

      console.log('Auto-reply email sent successfully:', userEmailResponse);
    } catch (emailError) {
      console.error('Error sending auto-reply email:', emailError);
      // Don't fail the request if email fails
    }

    // Send notification email to admin team
    console.log('Sending notification email to admin team');
    try {
      const adminEmailResponse = await resend.emails.send({
        from: "Smartcare Contact Form <onboarding@resend.dev>",
        to: ["partnerships@smartcare.africa"], // You can add multiple admin emails here
        subject: `New Contact Form Submission - ${formData.inquiryType}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
            <div style="background-color: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
            </div>
            
            <div style="border: 1px solid #e5e7eb; border-top: none; padding: 20px; border-radius: 0 0 8px 8px;">
              <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                <h3 style="margin-top: 0; color: #2563eb;">Contact Details</h3>
                <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
                <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
                ${formData.organization ? `<p><strong>Organization:</strong> ${formData.organization}</p>` : ''}
                <p><strong>Inquiry Type:</strong> ${formData.inquiryType}</p>
              </div>
              
              <div style="background-color: #fefefe; padding: 15px; border: 1px solid #e5e7eb; border-radius: 6px;">
                <h3 style="margin-top: 0; color: #2563eb;">Message</h3>
                <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
              </div>
              
              <div style="text-align: center; margin-top: 20px;">
                <a href="mailto:${formData.email}?subject=Re: Your inquiry about ${formData.inquiryType}" 
                   style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                  Reply to ${formData.firstName}
                </a>
              </div>
            </div>
            
            <p style="font-size: 12px; color: #666; text-align: center; margin-top: 20px;">
              Submission ID: ${submission.id} | Received: ${new Date().toLocaleString()}
            </p>
          </div>
        `,
      });

      console.log('Admin notification email sent successfully:', adminEmailResponse);
    } catch (emailError) {
      console.error('Error sending admin notification email:', emailError);
      // Don't fail the request if email fails
    }

    console.log('Contact form submission completed successfully');
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form submitted successfully",
        submissionId: submission.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in submit-contact-form function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);