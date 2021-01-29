import createCmsClient from "../common/cmsClient";
import { User } from "../../types/user";
import Cookies from "universal-cookie";

import formatError from "../../../utils/formatError";

const cmsClient = createCmsClient();
const cookies = new Cookies();

const isRequestSuccessful = (status: number): boolean =>
  status >= 200 && status < 400 ? true : false;

export const signin = async ({
  email,
  username,
  password,
  authType,
}: User): Promise<User | { errorMessage: string }> => {
  try {
    const isSignUp = authType === "sign up";
    const authData = isSignUp
      ? { email, username, password }
      : { identifier: email, password };
    const apiUrl = isSignUp ? "/auth/local/register" : "/auth/local";
    const response = await cmsClient.post(apiUrl, authData);

    if (response.data.jwt) cookies.set("jwt", response.data.jwt, { path: "/" });

    return response.data;
  } catch (error) {
    return formatError(error);
  }
};

export const fetchLoggedUser = async (): Promise<
  User | { errorMessage: string }
> => {
  try {
    const response = await cmsClient.get("/users/me", {
      headers: { Authorization: `Bearer ${cookies.get("jwt")}` },
    });
    if (isRequestSuccessful(response.status)) {
      if (response.data.jwt) {
        cookies.set("jwt", response.data.jwt, { path: "/" });
      }

      return response.data;
    } else throw new Error(response.data.message);
  } catch (error) {
    return formatError(error);
  }
};
