import { User } from "../types/user";
// import formatError from "../utils/formatError";
import createCmsClient from "./common/cmsClient";

const cmsClient = createCmsClient();

const createUser = async (userData: User): Promise<User> => {
  try {
    const { data } = await cmsClient.post("/users", userData);

    return data.user;
  } catch (error) {
    // TODO: fix formatError()
    // return formatError(error);
    return error.message;
  }
};

export { createUser };
