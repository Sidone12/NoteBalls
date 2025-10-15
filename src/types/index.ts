export interface NoteType {
  id: string;
  content: string;
  date: string;
}

export interface AuthType {
  email: string;
  password: string;
}
export interface UserType {
  id: string | null;
  email: string | null;
  displayName: string | null;
}
