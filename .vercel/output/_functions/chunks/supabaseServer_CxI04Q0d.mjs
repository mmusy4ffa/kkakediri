import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://lftgcimphcsoczgfhzhm.supabase.co";
const supabaseServiceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmdGdjaW1waGNzb2N6Z2ZoemhtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzU5MDcyMiwiZXhwIjoyMDk5MTY2NzIyfQ.OTBeDqOiXIypCDHmt6Bh9iGOTNRmPuwPq84SC5eRFAA";
const supabaseServer = createClient(supabaseUrl, supabaseServiceKey);

export { supabaseServer as s };
