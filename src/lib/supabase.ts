
import { createClient } from '@supabase/supabase-js';

// Supabase public URL and anon key (safe to expose in browser)
const supabaseUrl = 'https://sxmmmhriuufenqlztlbu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4bW1taHJpdXVmZW5xbHp0bGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzMDczMDIsImV4cCI6MjAwNTg4MzMwMn0.irxmOIe28LY3h_NN-8PurkUQurEFrZE0HFO3-G6zYwk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
