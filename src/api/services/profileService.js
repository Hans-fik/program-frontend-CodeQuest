import api from "../axiosConfig";

export const profileService = {
  // 1. Ini endpoint yang SUKSES kemarin (Mengambil data user + stats sekaligus)
  getProfileStats: async () => {
    try {
      const response = await api.get("/profile/stats");
      return response.data;
    } catch (error) {
      console.error("Error fetching profile stats:", error);
      throw error;
    }
  },

  // 2. Fungsi update (Kita asumsikan endpointnya /profile/update atau tetap /profile)
  // Tanyakan teman backend: "Endpoint buat update profile apa?"
  updateUserProfile: async (formData) => {
    // Sekarang menerima FormData
    try {
      const response = await api.put("/profile/edit", formData, {
        // BARU: Set header Content-Type untuk multipart/form-data
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  },
};

export default profileService;
