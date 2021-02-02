export type User = {
  id?: number;
  jwt?: string;
  email: string;
  username?: User["email"];
  password?: string;
  error?: string;
  authType?: string;
};

export type LoggedUser = {
  jwt?: string;
  id: number;
  username?: string;
  email: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: {
    id: string;
    name: string;
    description: string;
    type: string;
  };
  registrationDate?: string;
  lastLogin?: string;
  created_at?: string;
  updated_at?: string;
  error?: Error | string | null;

  search?: string;
  message?: string;
  consumer?: string;
  password?: string;
};
