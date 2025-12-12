import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // Untuk mendapatkan parameter dari URL
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const CourseDetail = () => {
  const { id } = useParams(); // Mengambil parameter id dari URL
  const [course, setCourse] = useState(null);

  // Fungsi untuk mengambil data kursus berdasarkan id
  useEffect(() => {
    const fetchCourseDetail = async () => {
      // Gantilah URL ini dengan URL API yang sesuai
      const response = await fetch(`/api/courses/${id}`);
      const data = await response.json();
      setCourse(data); // Menyimpan data kursus yang didapat dari API
    };

    fetchCourseDetail();
  }, [id]); // Memanggil useEffect ketika id berubah

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#000926] text-white">
      <Navbar />
      <div className="py-8 pt-20 px-4 sm:px-8 lg:px-16">
        <h1 className="text-[36px] font-bold mb-4">{course.title}</h1>
        <p className="text-[16px]">{course.description}</p>
        <p className="text-[14px] mt-4">Duration: {course.estimated_duration} weeks</p>
        <p className="text-[14px] mt-4">XP Reward: {course.xp_reward}</p>
        {/* Render detail lainnya sesuai data kursus */}
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
