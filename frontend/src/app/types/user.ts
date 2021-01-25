type User = {
  id?: number;
  jwt?: string;
  email: string;
  username?: User["email"];
  password: string;
  errorMessage?: string;
};

export default User;

export type { User };
