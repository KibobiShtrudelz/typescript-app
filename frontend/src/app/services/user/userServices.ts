import createCmsClient from "../common/cmsClient";
import { User } from "../../types/user";
import Cookies from "universal-cookie";

function isRequestSuccessful(status: number): boolean {
  if (status >= 200 && status < 400) {
    return true;
  }

  return false;
}

const cmsClient = createCmsClient();

export const signin = async ({
  email,
  username,
  password,
  authType,
}: User): Promise<User | null> => {
  try {
    const isSignUp = authType === "sign up";
    const authData = isSignUp
      ? { email, username, password }
      : { identifier: email, password };
    const apiUrl = isSignUp ? "/users" : "/auth/local";

    const response = await cmsClient.post(apiUrl, authData);

    if (isRequestSuccessful(response.status)) {
      const cookie = new Cookies();
      cookie.set("jwt", response.data.jwt);

      return response.data;
    }

    return null;
  } catch (error) {
    // TODO: fix formatError()
    // return formatError(error);
    return error.message;
  }
};
