
export interface Comment {
  id: string;
  name: string;
  message: string;
  timestamp?: string;  // For backward compatibility
  created_at?: string; // From Supabase
}
