import { BASE_URL, headerWithOutToken } from "@/shared/constant";
import axios from "axios";

export const ProductList = async () => {
  const response = await axios.get(
    `${BASE_URL}/products`,
    headerWithOutToken()
  );
  return response.data;
};

export const AddCart = async (payload: any) => {
  const response = await axios.post(
    `${BASE_URL}/carts`,
    payload,
    headerWithOutToken()
  );
  return response.data;
};

export const CartDetails = async (id: any) => {
  const response = await axios.get(
    `${BASE_URL}/carts/${id}`,
    headerWithOutToken()
  );
  return response.data;
};

export const ProductDetails = async (id: any) => {
  const response = await axios.get(
    `${BASE_URL}/products/${id}`,
    headerWithOutToken()
  );
  return response.data;
};
