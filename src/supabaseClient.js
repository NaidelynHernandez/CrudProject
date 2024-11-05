import {createClient} from "@supabase/supabase-js";

const supabaseUrl= "https://xhqhecxctfcunlmflwom.supabase.co";
const supabaseAnonKey=
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhocWhlY3hjdGZjdW5sbWZsd29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3OTA4OTksImV4cCI6MjA0NjM2Njg5OX0.Hcx9la-4_ObJOEh-wtqdmTfdS1P0QAP_CLMn2Rp4X1I";
const supabase= createClient(supabaseUrl, supabaseAnonKey);
export default supabase; 