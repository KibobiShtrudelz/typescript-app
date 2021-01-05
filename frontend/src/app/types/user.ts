type User = {
  id?: number;
  jwt?: string;
  email: string;
  username: string;
  password?: string;
  errorMessage?: string;
};

export default User;

export type { User };
