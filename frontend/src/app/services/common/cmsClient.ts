import axios, { AxiosInstance } from "axios";

const baseURL = process.env.REACT_APP_CMS_BASE_URL;

const createCmsClient = (): AxiosInstance => axios.create({ baseURL });

export default createCmsClient;
