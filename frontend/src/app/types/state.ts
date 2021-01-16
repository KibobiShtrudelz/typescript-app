import User from "./user";

interface ApplicationState {
  user: {
    data: User | {};
    loading: boolean;
    loaded: boolean;
    error: string;
  };
}

export default ApplicationState;

export type { ApplicationState };
