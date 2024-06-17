import axiosInstance from "./axiosConfig";

export const getPlans = async () => {
  try {
    const response = await axiosInstance.get("/api/plans.json");
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
