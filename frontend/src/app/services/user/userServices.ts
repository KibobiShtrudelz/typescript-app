import createCmsClient from "../common/cmsClient";
import { Login } from "./types";

const STRAPI_URL = process.env.REACT_APP_CMS_BASE_URL!;

function isRequestSuccessful(status: number): boolean {
  if (status >= 200 && status < 400) {
    return true;
  }

  return false;
}

export async function login(data: Login) {
  const response = await createCmsClient().post(STRAPI_URL, data);

  if (isRequestSuccessful(response.status)) {
    // redux action goes here
  }
}
