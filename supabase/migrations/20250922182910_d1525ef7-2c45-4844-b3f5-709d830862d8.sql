-- Add response_notes column to contact_submissions if it doesn't exist
ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS response_notes TEXT;

-- Add index for better performance on status queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions(status);

-- Add index for better performance on created_at queries (for date filtering)
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at);