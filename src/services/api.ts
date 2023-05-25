import axios, { AxiosRequestConfig } from "axios";

const ApiClient = async (
  endpoint: string,
  config?: AxiosRequestConfig,
) => {

  const res = await axios(process.env.API_ENDPOINT + endpoint, config);


  return res.data;
};

export default ApiClient;
