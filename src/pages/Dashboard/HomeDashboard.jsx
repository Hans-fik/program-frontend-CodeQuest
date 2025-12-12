// pages/homeDashboard.js

import React from "react";
import Button from "../../components/ui/ButtonHanif";
import CourseCard from "../../components/shared/CourseCard";
import LeaderboardPodium from "../../components/shared/LeaderboardPodium";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Link } from "react-router-dom";

// Import Assets (SESUAIKAN PATH INI SESUAI STRUKTUR PROYEK ANDA)
import backgroundGunungBulan from "../../assets/backgroundGunungBulan_DashboardPage.png";
import pythonBg from "../../assets/backgroundCourse_Python.png";
import sqlBg from "../../assets/backgroundCourse_SQL.png";
import cppBg from "../../assets/backgroundCourse_C++.png";
import jsBg from "../../assets/backgroundCourse_JavaScript.png";
import cCardBg from "../../assets/backgroundCourse_C.png";
import aboutIcon from "../../assets/logo2.png";

import avatar1 from "../../assets/anonymous_Person.png";
import avatar2 from "../../assets/anonymous_Person.png";
import avatar3 from "../../assets/anonymous_Person.png";

const HomeDashboard = () => {
  const courses = [
    {
      title: "Python",
      subtitle: "Beginner",
      description: "Learn Python programming",
      imageUrl: pythonBg,
      id: "python-course",
    },
    {
      title: "SQL",
      subtitle: "Beginner",
      description: "Master SQL querying",
      imageUrl: sqlBg,
      id: "sql-course",
    },
    {
      title: "C++",
      subtitle: "Beginner",
      description: "Learn C++ programming",
      imageUrl: cppBg,
      id: "cpp-course",
    },
    {
      title: "C Programming", // Data kursus baru
      subtitle: "Beginner",
      description: "Learn C programming for system-level programming",
      imageUrl: cCardBg, // Menggunakan gambar c card.png
      id: "c-course",
    },
    {
      title: "JavaScript",
      subtitle: "Beginner",
      description: "Master JavaScript",
      imageUrl: jsBg,
      id: "js-course",
    },
  ];

  return (
    <div className="bg-[#000926] items-center">
      <Navbar />

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[150vh] flex items-center text-white text-left pl-40 pr-12 pt-20"
        style={{
          backgroundImage: `url(${backgroundGunungBulan})`,
          backgroundSize: "cover", // Pastikan background menutupi seluruh area
          backgroundPosition: "center", // Pastikan background selalu terpusat
        }}
      >
        <div className="max-w-3xl">
          {/* Welcome Text */}
          <p className="text-2xl font-semibold text-shadow-md">Welcome to</p>

          {/* Hero Title */}
          <h1 className="text-8xl font-bold text-shadow-xl mt-4">CodeQuest</h1>

          {/* Hero Description */}
          <p className="text-xl font-semibold md:h-20 text-shadow-lg mt-6">
            Unlock your coding skills through immersive challenges and hands-on
            missions. Level up with 200+ hours of guided practice. Start
            learning today free to explore!
          </p>

          {/* Button */}
          <Link to="/signup">
            <Button
              label="Start Now"
              className="mt-8 px-14 py-5 text-2xl font-bold bg-yellow-500 hover:bg-yellow-600 transition-all rounded-lg"
            />
          </Link>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="px-12 py-12 mt-12">
        <h2 className="text-center text-3xl text-white mb-8 font-bold">
          Popular Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              subtitle={course.subtitle}
              description={course.description}
              imageUrl={course.imageUrl}
              onClick={() => console.log(`${course.title} clicked`)}
            />
          ))}
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="px-12 bg-[#000926] py-12 mt-12">
        <h2 className="text-center text-3xl text-white mb-8 font-bold">
          Leaderboard
        </h2>

        <div className="flex justify-center gap-8 pt-10 pb-10">
          {/* Rank 2 */}
          <LeaderboardPodium
            key={2}
            rank={2}
            username="John Doe"
            earnedPoints={900}
            totalPoints={90000}
            avatarUrl={avatar1}
          />

          {/* Rank 1 */}
          <LeaderboardPodium
            key={1}
            rank={1}
            username="Mihu Mahi"
            earnedPoints={1000}
            totalPoints={100000}
            avatarUrl={avatar2}
          />

          {/* Rank 3 */}
          <LeaderboardPodium
            key={3}
            rank={3}
            username="Jane Smith"
            earnedPoints={800}
            totalPoints={80000}
            avatarUrl={avatar3}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="flex items-center justify-center py-20 px-12 mt-12">
        <div className="flex items-center gap-16 max-w-7xl">
          <div className="flex-shrink-0">
            <img
              src={aboutIcon}
              alt="CodeQuest Icon"
              className="w-[250px] h-auto drop-shadow-xl"
            />
          </div>

          <div className="text-left text-white">
            <h1
              className="text-[36px] font-bold mb-4"
              style={{ textShadow: "0 8.2px 4.7px rgba(0,0,0,0.25)" }}
            >
              About CodeQuest
            </h1>

            <p
              className="text-[18px] font-semibold leading-[26px] max-w-[614px] text-justify"
              style={{ textShadow: "0 0 4px rgba(0,0,0,0.25)" }}
            >
              CodeQuest is a gamified learning platform designed to make
              programming engaging, practical, and enjoyable. We combine
              interactive lessons, real-world coding challenges, and
              reward-based progression to help learners stay motivated and build
              strong technical skills. Whether you're just starting out or
              leveling up your coding journey, CodeQuest guides you step by step
              with a hands-on, game-like experience.
            </p>

            <Link to="/about">
              <button className="mt-6 text-[#FFD200] font-bold text-lg hover:underline transition">
                See More Details &rarr;
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeDashboard;
