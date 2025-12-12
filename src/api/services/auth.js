import axiosInstance from "../axiosConfig";

export const loginService = async (email, password) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

export const registerService = async (username,email, password) => {
  try {
    const response = await axiosInstance.post("/auth/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};
