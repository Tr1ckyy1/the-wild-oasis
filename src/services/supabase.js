import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://svdgsvkpvtqnybquzuga.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2ZGdzdmtwdnRxbnlicXV6dWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1MjY0MTcsImV4cCI6MjAxMzEwMjQxN30.vwcd-5vbD8vU7q9R9nUfNyETRZAAi_kgwNDXDoIVnuc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
