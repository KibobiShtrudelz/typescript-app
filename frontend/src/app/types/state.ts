import { User } from "./user";

interface ApplicationState {
  authForm: {
    isVisible: boolean;
  };
  user: {
    data: User;
    loading: boolean;
    loaded: boolean;
    error: string;
  };
  toastr: any;
}

export default ApplicationState;

export type { ApplicationState };
