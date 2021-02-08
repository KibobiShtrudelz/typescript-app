export type User = {
  jwt?: string;
  id?: number;
  username?: string;
  email?: string;
  confirmed?: boolean;
  blocked?: boolean | null;
  provider?: string;
  role?: {
    id: number;
    name: string;
    description: string;
    type: string;
  };
  registrationDate?: string;
  lastLogin?: string;
  created_at?: string;
  updated_at?: string;
  error?: string;

  search?: string;
  message?: string;
  consumer?: string;
  password?: string;

  authType?: string;
  user?: {
    id: number;
    username: string;
    email: string;
    confirmed: boolean;
    blocked: boolean | null;
    provider: string;
    role: {
      id: number;
      name: string;
      description: string;
      type: string;
    };
    registrationDate: string;
    lastLogin: string;
    created_at: string;
    updated_at: string;
    error: string;

    search: string;
    message: string;
    consumer: string;
  };
};

export type UserNotLogged = { data: {} };
