import axios from "axios";

export const AxiosHookLess = async (url: string) => {
  return await axios.get(url);
};
