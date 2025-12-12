import React, { useEffect, useCallback, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

// ... import gambar-gambar lainnya biarkan saja ...
import trophyImg from "../../assets/trophy.png";
import starExpImg from "../../assets/starExp.png";
import streakImg from "../../assets/sreak.png";
import emptyFileImg from "../../assets/empty_File.png";
import pythonBadgeImg from "../../assets/python_Badge.png";
import bannerProfile from "../../assets/background_banner_Profile.png";

import profileService from "../../api/services/profileService"; // Import yang sudah benar

const Profile = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // BARU: State untuk Modal Edit
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: "",
    username: "",
    // bio: "", // Tambahkan jika ada bio
  });
  const [isSaving, setIsSaving] = useState(false);
  const [fileAvatar, setFileAvatar] = useState(null);

  // --- LANGKAH 1: DEFINISIKAN loadStats DI SINI ---
  const loadStats = useCallback(async () => {
    setLoading(true);
    try {
      // HANYA panggil endpoint yang KEMARIN berhasil (yang mengambil user+stats)
      const result = await profileService.getProfileStats();

      console.log("Data dari backend:", result); // Cek konsol lagi

      // Logic penyesuaian data (sesuai yang sebelumnya kita sepakati)
      const finalData = result.data || result;
      setStats(finalData);
    } catch (err) {
      console.error("Gagal load data:", err);
      setStats(null);
    } finally {
      setLoading(false);
    }
  }, []); // Dependency kosong

  // BARU: Fungsi untuk menangani input file
  const handleFileChange = (e) => {
    setFileAvatar(e.target.files[0]); // Ambil file pertama dari input
  };

  useEffect(() => {
    async function loadStats() {
      try {
        setLoading(true); // Pastikan loading nyala
        // HANYA panggil endpoint yang kemarin berhasil
        const result = await profileService.getProfileStats();

        console.log("Data dari backend:", result); // Cek di console strukturnya

        // Backend biasanya kirim: { data: { user: {...}, stats: {...} } }
        // Atau langsung: { user: {...}, stats: {...} }
        // Kita jaga-jaga dengan logika ini:
        const finalData = result.data || result;

        setStats(finalData);
      } catch (err) {
        console.error("Gagal load data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, [loadStats]);

  // BARU: Fungsi saat tombol Edit diklik
  const handleEditClick = () => {
    // Isi form dengan data yang sekarang ada
    setEditFormData({
      name: stats.user.name,
      username: stats.user.username,
    });
    setIsEditing(true); // Buka modal
  };

  // BARU: Fungsi untuk menangani ketikan user di form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // BARU: Fungsi Simpan Data
  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    // ... (Logika FormData Anda biarkan sama) ...

    try {
      const formData = new FormData();
      formData.append("name", editFormData.name);
      formData.append("username", editFormData.username);
      if (fileAvatar) {
        formData.append("avatar", fileAvatar);
      }

      await profileService.updateUserProfile(formData);

      // PANGGIL loadStats yang sekarang sudah terdefinisi
      await loadStats(); // <--- TIDAK AKAN ERROR LAGI

      setIsEditing(false);
      setFileAvatar(null);
      // Ganti alert error dengan alert sukses
      alert("Profile updated successfully!");
    } catch (error) {
      // Pastikan pesan error yang ditampilkan lebih user-friendly
      alert(
        "Failed to update profile: " +
          (error.response?.data?.message || error.message || "Unknown error")
      );
    } finally {
      setIsSaving(false);
    }
  };

  // 1. Pengecekan Loading (KODE LAMA)
  if (loading) {
    return <div className="text-white text-center mt-20">Loading...</div>;
  }

  // Pengecekan Error / Data Kosong: Menghindari crash saat stats = null
  if (!stats || !stats.user) {
    return (
      <div className="text-white text-center mt-20 flex flex-col items-center justify-center">
        <h2 className="text-xl text-red-400 font-bold mb-2">
          Gagal Memuat Data Profil
        </h2>
        <p className="text-gray-400 mb-4">
          Data tidak ditemukan atau terjadi kesalahan.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
        >
          Coba Refresh
        </button>
      </div>
    );
  }

  // 3. Tampilan Utama (KODE LAMA)
  // Kode ini hanya akan jalan kalau lolos dari pengecekan nomor 1 & 2
  return (
    <div className="bg-[#000926] text-white min-h-screen relative">
      <Navbar />
<div className="py-8 pt-30 px-4 sm:px-8 lg:px-16">
      {/* --- BARU: MODAL POPUP --- */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-[#0F1E3E] p-6 rounded-lg w-[400px] border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Edit Profile</h3>

            {/* PENTING: Pastikan handleSaveProfile adalah fungsi yang mengirim FormData */}
            <form onSubmit={handleSaveProfile}>
              {/* Input: Name (Perbaiki bug nama input yang tertukar) */}
              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-2">Name</label>
                <input
                  type="text"
                  name="name" // Pastikan ini 'name'
                  value={editFormData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-[#0A1633] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Input: Username */}
              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username" // Pastikan ini 'username'
                  value={editFormData.username}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-[#0A1633] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* BARU: Input File Avatar */}
              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-2">
                  Upload New Avatar
                </label>
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={handleFileChange} // Panggil fungsi yang menangani pemilihan file
                  className="w-full p-2 rounded bg-[#0A1633] text-white border border-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {fileAvatar && (
                  <p className="text-xs text-gray-400 mt-1">
                    File terpilih: **{fileAvatar.name}**
                  </p>
                )}
              </div>
              {/* END Input File Avatar */}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setFileAvatar(null); // Reset file saat cancel
                  }}
                  className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500 text-white text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold"
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Profile Header Section */}
 <section
  className="relative h-[250px] bg-cover bg-center rounded-[12px] m-4"
  style={{ backgroundImage: `url(${bannerProfile})` }}
>
  <div className="absolute bottom-0 left-0 p-6 flex items-center gap-6 bg-gradient-to-t from-[#000515] to-transparent rounded-b-[12px] w-full">
    <div
      className="w-[95px] h-[95px] rounded-full bg-gray-400 border-4 border-[#001433]"
      style={{
        backgroundImage: `url(${
          stats.user?.avatarUrl || "/default-avatar.png"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
    <div>
      {/* Nama di atas, Username di bawah */}
      <h2 className="font-semibold text-[22px]">{stats.user?.name}</h2>
      <p className="text-[14px] text-gray-400">@{stats.user?.username}</p>
    </div>

    {/* Tombol Edit */}
    <button
      onClick={handleEditClick}
      className="ml-auto py-2 px-4 bg-[#0F1E3E] hover:bg-[#1a3366] transition rounded-[6px] text-sm border border-gray-700"
    >
      Edit Profile
    </button>
  </div>
</section>


      {/* ... Bagian Stats, Badges, Courses biarkan sama seperti sebelumnya ... */}
      <section className="p-6">
        <h3 className="text-[20px] font-bold mb-6">User Stats</h3>
        <div className="flex gap-8 justify-center">
          {/* Level */}
          <div className="bg-[#09173A] rounded-[18px] p-6 flex flex-col items-center w-[260px]">
            <img src={trophyImg} alt="Level" className="w-[60px] mb-4" />
            <h4 className="font-semibold text-[18px]">Level</h4>
            <p className="text-[35px] font-bold text-yellow-400">
              {stats.stats?.level || 0}
            </p>
          </div>

          {/* XP */}
          <div className="bg-[#09173A] rounded-[18px] p-6 flex flex-col items-center w-[260px]">
            <img src={starExpImg} alt="XP" className="w-[60px] mb-4" />
            <h4 className="font-semibold text-[18px]">Total XP</h4>
            <p className="text-[35px] font-bold text-yellow-400">
              {stats.stats?.totalXP || 0}
            </p>
          </div>

          {/* Streak */}
          <div className="bg-[#09173A] rounded-[18px] p-6 flex flex-col items-center w-[260px]">
            <img src={streakImg} alt="Streak" className="w-[60px] mb-4" />
            <h4 className="font-semibold text-[18px]">Streak</h4>
            <p className="text-[35px] font-bold text-yellow-400">
              {stats.stats?.streak || 0}
            </p>
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="p-6">
        <h3 className="text-[20px] font-bold mb-6">Badges</h3>
        <div className="bg-[#0A1633] rounded-[18px] p-6 text-center">
          <h4 className="font-bold text-[20px] mb-4">Python Badge</h4>
          <img
            src={pythonBadgeImg}
            alt="Python Badge"
            className="mx-auto w-[150px]"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="p-6">
        <h3 className="text-[22px] font-bold mb-6">Your Course</h3>
        <div className="bg-[#0B1735] h-[300px] rounded-[18px] flex justify-center items-center">
          <div className="text-center">
            <img src={emptyFileImg} alt="No Courses" className="mx-auto mb-4" />
            <p className="text-[14px] text-gray-400">
              You have not enrolled in any courses yet.
            </p>
          </div>
        </div>
      </section>
</div>
      <Footer />
    </div>
  );
};

export default Profile;
