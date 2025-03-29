import { BASE_URL, headerWithOutToken } from "@/shared/constant";
import axios from "axios";

export const LogIn = async (payload: any) => {
  const response = await axios.post(
    `${BASE_URL}/auth/login`,
    payload,
    headerWithOutToken()
  );
  return response.data;
};
