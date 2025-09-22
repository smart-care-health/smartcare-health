import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NewsletterData {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Newsletter subscription started');
    
    // Parse request data
    const { email }: NewsletterData = await req.json();
    console.log('Received subscription request for email:', email);

    // Validate email
    if (!email) {
      console.log('Missing email');
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
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

    // Check if email already exists
    console.log('Checking for existing subscription');
    const { data: existingSubscriber, error: checkError } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('email', email)
      .maybeSingle();

    if (checkError) {
      console.error('Database check error:', checkError);
      return new Response(
        JSON.stringify({ error: "Failed to check subscription status" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // If already subscribed and active
    if (existingSubscriber && existingSubscriber.status === 'active') {
      console.log('Email already subscribed and active');
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "You're already subscribed to our newsletter!",
          alreadySubscribed: true 
        }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // If previously unsubscribed, reactivate
    if (existingSubscriber && existingSubscriber.status === 'unsubscribed') {
      console.log('Reactivating unsubscribed email');
      const { data: updatedSubscriber, error: updateError } = await supabase
        .from('newsletter_subscribers')
        .update({ 
          status: 'active', 
          subscribed_at: new Date().toISOString(),
          unsubscribed_at: null 
        })
        .eq('email', email)
        .select()
        .single();

      if (updateError) {
        console.error('Database update error:', updateError);
        return new Response(
          JSON.stringify({ error: "Failed to reactivate subscription" }),
          { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    } else {
      // Create new subscription
      console.log('Creating new newsletter subscription');
      const { data: newSubscriber, error: insertError } = await supabase
        .from('newsletter_subscribers')
        .insert({
          email: email,
          status: 'active',
          source: 'website'
        })
        .select()
        .single();

      if (insertError) {
        console.error('Database insert error:', insertError);
        return new Response(
          JSON.stringify({ error: "Failed to create subscription" }),
          { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      console.log('Newsletter subscription saved with ID:', newSubscriber.id);
    }

    // Initialize Resend and send welcome email
    console.log('Sending welcome email');
    try {
      const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
      
      const welcomeEmailResponse = await resend.emails.send({
        from: "Smartcare Health Solutions <newsletter@smartcare.africa>",
        to: [email],
        subject: "Welcome to Smartcare Health Solutions Newsletter 🌟",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin-bottom: 10px;">Welcome to Smartcare! 🎉</h1>
              <p style="color: #666; font-size: 18px;">Thank you for joining our mission to transform healthcare</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
              <h2 style="margin: 0 0 15px 0; font-size: 24px;">You're Now Part of the Healthcare Revolution!</h2>
              <p style="margin: 0; font-size: 16px; opacity: 0.9;">
                Stay updated with the latest innovations, partnership opportunities, and healthcare insights from across Africa.
              </p>
            </div>
            
            <div style="margin-bottom: 30px;">
              <h3 style="color: #2563eb; margin-bottom: 15px;">What You'll Receive:</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center;">
                  <span style="background-color: #2563eb; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; margin-right: 12px;">📊</span>
                  <strong>Quarterly Impact Reports</strong> - See how we're transforming healthcare across Africa
                </li>
                <li style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center;">
                  <span style="background-color: #2563eb; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; margin-right: 12px;">🤝</span>
                  <strong>Partnership Opportunities</strong> - Early access to collaboration announcements
                </li>
                <li style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center;">
                  <span style="background-color: #2563eb; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; margin-right: 12px;">🚀</span>
                  <strong>Innovation Updates</strong> - Latest technology developments and product launches
                </li>
                <li style="padding: 10px 0; display: flex; align-items: center;">
                  <span style="background-color: #2563eb; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; margin-right: 12px;">📚</span>
                  <strong>Healthcare Insights</strong> - Research findings and industry trends
                </li>
              </ul>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #2563eb;">
              <h4 style="margin-top: 0; color: #2563eb;">Get Started</h4>
              <p style="margin-bottom: 15px;">Explore our current initiatives and see how you can get involved:</p>
              <div style="text-align: center;">
                <a href="https://smartcare.africa" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-right: 10px; display: inline-block;">
                  Visit Our Website
                </a>
                <a href="mailto:partnerships@smartcare.africa" style="background-color: transparent; color: #2563eb; padding: 12px 24px; text-decoration: none; border: 2px solid #2563eb; border-radius: 6px; font-weight: bold; display: inline-block;">
                  Contact Us
                </a>
              </div>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; font-size: 14px; color: #666; text-align: center;">
              <p style="margin-bottom: 10px;">
                <strong>Smartcare Health Solutions</strong><br>
                Transforming Healthcare Through Innovation
              </p>
              <p style="margin-bottom: 15px;">
                📧 partnerships@smartcare.africa | 📞 +234 (0) 810 925 2120 | 📍 Lagos, Nigeria
              </p>
              <p style="font-size: 12px; color: #999;">
                You're receiving this email because you subscribed to our newsletter. 
                <br>Don't want to receive these emails? <a href="#" style="color: #2563eb;">Unsubscribe here</a>.
              </p>
            </div>
          </div>
        `,
      });

      console.log('Welcome email sent successfully:', welcomeEmailResponse);
    } catch (emailError) {
      console.error('Error sending welcome email:', emailError);
      // Don't fail the request if email fails - subscription is still successful
    }

    console.log('Newsletter subscription completed successfully');
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Successfully subscribed to newsletter! Check your email for a welcome message.",
        isNewSubscription: !existingSubscriber 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in subscribe-newsletter function:", error);
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