import Axios, { AxiosInstance } from "axios";

const baseURL = process.env.REACT_APP_CMS_BASE_URL;

const createCmsClient = (): AxiosInstance => Axios.create({ baseURL });

export default createCmsClient;
