import axiosInstance from "./axiosConfig";

export const getUserData = async () => {
  try {
    const response = await axiosInstance.get("/api/user.json");
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
