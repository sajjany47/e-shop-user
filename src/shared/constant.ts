export const BASE_URL = "https://fakestoreapi.com";
export const ACCESS_TOKEN_STORAGE_KEY = "accessToken";
export const REFRESH_TOKEN_STORAGE_KEY = "refreshToken";

export const getAccessToken = () => {
  return sessionStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
};

export const headerWithToken = () => {
  const token = getAccessToken();

  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};
export const headerWithOutToken = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
};
export const headerWithFormData = () => {
  const token = getAccessToken();
  return {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
};
