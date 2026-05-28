
CREATE TABLE public.estimate_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text,
  message text NOT NULL
);

GRANT INSERT ON public.estimate_requests TO anon, authenticated;
GRANT ALL ON public.estimate_requests TO service_role;

ALTER TABLE public.estimate_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an estimate request"
  ON public.estimate_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
