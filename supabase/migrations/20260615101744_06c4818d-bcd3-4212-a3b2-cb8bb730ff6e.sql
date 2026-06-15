
ALTER TABLE public.inquiries
  ADD CONSTRAINT inquiries_name_len CHECK (char_length(name) BETWEEN 1 AND 100),
  ADD CONSTRAINT inquiries_email_len CHECK (char_length(email) BETWEEN 3 AND 255),
  ADD CONSTRAINT inquiries_phone_len CHECK (phone IS NULL OR char_length(phone) <= 30),
  ADD CONSTRAINT inquiries_msg_len CHECK (message IS NULL OR char_length(message) <= 2000);
