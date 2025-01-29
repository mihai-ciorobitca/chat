const { createClient } = require('@supabase/supabase-js')
const dotenv = require('dotenv');

dotenv.config();

const supabase_url = process.env.SUPABASE_URL;
const supabase_service_key = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(supabase_url, supabase_service_key);

module.exports = supabase;

