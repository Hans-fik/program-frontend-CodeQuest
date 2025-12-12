// src/pages/CourseDetailPage.jsx
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  PlayCircle,
  Clock,
  Users,
  BookOpen,
  Star,
  FileText,
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

// ✅ ASUMSI: Path aset dikoreksi dari root pages ke '../assets'
import pythonCourseImg from "../../assets/challenge_Packs/challenge_PythonforBeginners.png";

const CourseDetailPage = () => {
  // State untuk Navigasi Tab
  const [selectedTab, setSelectedTab] = useState("Curriculum");

  // ✅ PERBAIKAN STATE: Menggunakan objek untuk melacak status buka/tutup setiap grup kurikulum secara independen
  const [openGroups, setOpenGroups] = useState({ 0: true });

  const courseInfo = {
    title: "Python Program Beginner Course",
    category: "Python",
    duration: "2 Weeks",
    students: "156 Students",
    level: "All Levels",
    lessons: "20 Lessons",
    quizzes: "3 Quizzes",
    oldPrice: "$69.0",
    newPrice: "$0 (Free)",
    description:
      "Master the foundations of programming with Python’s simple syntax. Learn variables, loops, functions, and problem-solving skills through hands-on challenges built for beginners and aspiring developers.",
    instructor: {
      name: "John Doe",
      bio: "John is a senior Python instructor with over 10 years of teaching experience in the field of computer science.",
    },
    curriculum: [
      {
        groupTitle: "Lessons With Video Content",
        totalLessons: 5,
        totalDuration: "45 Mins",
        items: [
          {
            title: "Lesson 1: Introduction to Python",
            duration: "12:30",
            type: "Video",
            preview: true,
          },
          {
            title: "Lesson 2: Variables and Data Types",
            duration: "10:05",
            type: "Video",
            preview: true,
          },
          {
            title: "Lesson 3: Functions and Loops",
            duration: "22:25",
            type: "Video",
            preview: true,
          },
        ],
      },
      {
        groupTitle: "Hands-on Practice Challenges",
        totalLessons: 3,
        totalDuration: "30 Mins",
        items: [
          {
            title: "Challenge 1: Basic Math Operations",
            duration: "10:00",
            type: "Quiz",
            preview: false,
          },
          {
            title: "Challenge 2: Conditional Logic",
            duration: "20:00",
            type: "Quiz",
            preview: false,
          },
        ],
      },
      {
        groupTitle: "Advanced Topics & Projects",
        totalLessons: 4,
        totalDuration: "60 Mins",
        items: [
          {
            title: "Project 1: Simple Web Scraper",
            duration: "30:00",
            type: "Video",
            preview: false,
          },
          {
            title: "Project 2: File Handling",
            duration: "30:00",
            type: "Video",
            preview: false,
          },
        ],
      },
    ],
  };

  const renderIcon = (type) => {
    if (type === "Video")
      return <PlayCircle size={18} className="text-[#FFD200]" />;
    if (type === "Quiz")
      return <FileText size={18} className="text-[#FFD200]" />;
    return <Star size={18} className="text-[#FFD200]" />;
  };

  // ✅ Fungsi Toggle: Hanya mengubah status grup berdasarkan indeks yang diklik
  const toggleGroup = (index) => {
    setOpenGroups((prevOpenGroups) => ({
      ...prevOpenGroups,
      [index]: !prevOpenGroups[index],
    }));
  };

  return (
    <div className="bg-[#000926] text-white min-h-screen">
      <Navbar activeTab="Learn" /> {/* Asumsi Navbar menerima prop activeTab */}
      <div className="py-8 pt-30 px-4 sm:px-8 lg:px-16">
        {/* 2. Course Header Section (Hero Area) */}
        <section className="flex justify-between items-start p-12 space-x-10">
          {/* 2. Kiri: Info Kursus (w-3/5) */}
          <div className="text-left w-3/5">
            {/* 2.1 Course Category Tag */}
            <span className="inline-block px-3 py-1 text-sm font-medium border border-gray-600 rounded-full text-gray-400 mb-3">
              {courseInfo.category}
            </span>

            {/* 2.2 Course Title */}
            <h1 className="text-5xl font-extrabold mb-4 text-white text-shadow-md">
              {courseInfo.title}
            </h1>

            {/* 2.3 Course Quick Stats (Flex Row with Icons) */}
            <div className="flex items-center space-x-6 text-lg font-semibold text-[#A9A9A9] mb-6">
              <span className="flex items-center space-x-2">
                <Clock size={18} className="text-[#FFD200]" />{" "}
                <span>{courseInfo.duration}</span>
              </span>
              <span className="flex items-center space-x-2">
                <Users size={18} className="text-[#FFD200]" />{" "}
                <span>{courseInfo.students}</span>
              </span>
              <span className="flex items-center space-x-2">
                <Star size={18} className="text-[#FFD200]" />{" "}
                <span>{courseInfo.level}</span>
              </span>
              <span className="flex items-center space-x-2">
                <BookOpen size={18} className="text-[#FFD200]" />{" "}
                <span>{courseInfo.lessons}</span>
              </span>
              <span className="flex items-center space-x-2">
                <FileText size={18} className="text-[#FFD200]" />{" "}
                <span>{courseInfo.quizzes}</span>
              </span>
            </div>

            {/* Deskripsi */}
            <p className="text-[16px] font-regular text-white mt-4">
              {courseInfo.description}
            </p>
          </div>

          {/* 2.4 Course Preview Card (Kanan) */}
          <div className="w-1/3 flex-shrink-0">
            {" "}
            {/* ✅ Penyesuaian lebar kartu */}
            <div className="bg-[#0B1735] rounded-[20px] shadow-2xl p-6 border border-gray-700">
              {/* ✅ PENYESUAIAN UKURAN GAMBAR */}
              <img
                src={pythonCourseImg}
                alt="Python Course"
                className="w-full h-48 object-cover rounded-[15px] mb-4"
              />

              {/* Pricing */}
              <div className="mb-4">
                <p className="text-xl text-gray-500 line-through mr-2 inline">
                  {courseInfo.oldPrice}
                </p>
                <span className="text-4xl font-extrabold text-red-500">
                  {courseInfo.newPrice}
                </span>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-[#FFD200] to-[#F7971E] py-3 px-8 rounded-[30px] text-black text-xl font-bold hover:opacity-90 transition shadow-lg">
                Start Now
              </button>
            </div>
          </div>
        </section>

        {/* 3. Tab Navigation Section */}
        <section className="px-12 pt-0 pb-12">
          <div className="border-b border-gray-700 mb-8">
            <div className="flex space-x-8">
              {["Overview", "Curriculum", "Instructor"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-3 text-lg font-semibold transition duration-300 ${
                    selectedTab === tab
                      ? "text-[#FFD200] border-b-2 border-[#FFD200]"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Overview Content */}
          {selectedTab === "Overview" && (
            <div className="text-left text-white max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
              <p className="text-[18px] leading-relaxed">
                {courseInfo.description}
              </p>
            </div>
          )}

          {/* 5. Curriculum Preview List (TABLE-LIKE STRUCTURE) */}
          {selectedTab === "Curriculum" && (
            <div className="text-left text-white max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>

              {/* Looping Group Section */}
              {courseInfo.curriculum.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="bg-[#0B1735] rounded-[15px] shadow-xl mb-6 border border-gray-700 overflow-hidden"
                >
                  {/* 5.1 Lesson Group Header */}
                  <div
                    className="flex justify-between items-center p-5 cursor-pointer bg-[#2E3A59] hover:bg-[#3A486F] transition duration-200"
                    onClick={() => toggleGroup(groupIndex)} // Hanya toggle grup ini
                  >
                    {/* Kolom 1: Group Title */}
                    <h3 className="text-xl font-bold text-white w-2/5">
                      {group.groupTitle}
                    </h3>

                    {/* Kolom 2: Total Lessons */}
                    <span className="text-base text-gray-400 w-1/5 text-center">
                      {group.totalLessons} Lessons
                    </span>

                    {/* Kolom 3: Total Duration & Toggle Icon */}
                    <div className="flex items-center justify-end w-2/5 space-x-3">
                      <span className="text-base text-gray-400">
                        {group.totalDuration}
                      </span>
                      {/* Tampilkan ikon berdasarkan status grup ini */}
                      {openGroups[groupIndex] ? (
                        <ChevronUp size={20} className="text-[#FFD200]" />
                      ) : (
                        <ChevronDown size={20} className="text-[#FFD200]" />
                      )}
                    </div>
                  </div>

                  {/* 5.2 Lesson Items */}
                  {/* Tampilkan konten hanya jika grup ini terbuka */}
                  {openGroups[groupIndex] && (
                    <div className="p-0">
                      {group.items.map((lesson, lessonIndex) => (
                        <div
                          key={lessonIndex}
                          className={`flex items-center justify-between p-4 border-t border-gray-700 ${
                            lessonIndex % 2 === 0
                              ? "bg-[#0B1735]"
                              : "bg-[#152345]"
                          }`}
                        >
                          {/* Kolom 1: Icon & Lesson Title */}
                          <div className="flex items-center space-x-3 w-3/5">
                            {renderIcon(lesson.type)}
                            <span className="text-base font-medium">
                              {lesson.title}
                            </span>
                          </div>

                          {/* Kolom 2: Preview Button */}
                          <div className="w-1/5 text-center">
                            {lesson.preview ? (
                              <button className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-blue-600 transition">
                                Preview
                              </button>
                            ) : (
                              <span className="text-xs text-gray-500">
                                Requires Enrollment
                              </span>
                            )}
                          </div>

                          {/* Kolom 3: Duration */}
                          <span className="text-sm text-gray-400 w-1/5 text-right">
                            {lesson.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Instructor Section */}
          {selectedTab === "Instructor" && (
            <div className="text-center text-white max-w-2xl mx-auto p-10 bg-[#0B1735] rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-4">
                Instructor: {courseInfo.instructor.name}
              </h2>
              <p className="text-[16px] mb-4">
                <span className="text-[#FFD200]">Senior Python Instructor</span>
              </p>
              <p className="text-[14px] text-[#A9A9A9] leading-relaxed">
                {courseInfo.instructor.bio}
              </p>
            </div>
          )}
        </section>
      </div>
      {/* 7. Footer Section */}
      <Footer />
    </div>
  );
};

export default CourseDetailPage;
