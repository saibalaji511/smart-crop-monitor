import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yzuhfbkoxbjulntizaei.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6dWhmYmtveGJqdWxudGl6YWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2MzQxNjAsImV4cCI6MjA4ODIxMDE2MH0.L5SdnrF1Ve9lfrupiK3LgFsuzfEzD9ceCClst0v2hAs'

export const supabase = createClient(supabaseUrl, supabaseKey)