import Axios, { AxiosInstance } from "axios";

const CMS_BASE_URL = process.env.CMS_URL;

const createCmsClient = (): AxiosInstance =>
  Axios.create({ baseURL: CMS_BASE_URL });

export default createCmsClient;
