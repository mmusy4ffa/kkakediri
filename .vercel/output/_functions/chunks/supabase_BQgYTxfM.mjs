import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://lftgcimphcsoczgfhzhm.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmdGdjaW1waGNzb2N6Z2ZoemhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1OTA3MjIsImV4cCI6MjA5OTE2NjcyMn0.aFJp-AIgsTkLyTCFbwA2Wcc6teTx1ilUu0UCxePoWJ8";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase as s };
