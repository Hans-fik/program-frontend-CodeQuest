import React from "react";
import { Link } from "react-router-dom"; // Import Link untuk navigasi
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

// Import assets gambar untuk placeholder icon quiz
import placeholderIconQuiz from "../../assets/challenge_Packs/placeholder_IconQuiz.png"; // Placeholder gambar untuk ikon

const QuizCollectionDetailPage = () => {
  const quizzes = [
    {
      title: "Introduction to Python",
      totalQuestions: "8/10",
      duration: "35 minutes",
    },
    {
      title: "Variables and Data Types",
      totalQuestions: "10",
      duration: "35 minutes",
    },
    { title: "Operators", totalQuestions: "10", duration: "35 minutes" },
    { title: "Input and Output", totalQuestions: "10", duration: "35 minutes" },
    {
      title: "Conditional Statements",
      totalQuestions: "10",
      duration: "35 minutes",
    },
    { title: "Loops", totalQuestions: "10", duration: "35 minutes" },
    {
      title: "Lists and Basic Collections",
      totalQuestions: "10",
      duration: "35 minutes",
    },
  ];

  return (
    <div className="bg-[#000926] text-white">
      <Navbar />
      <div className="py-8 pt-20 px-4 sm:px-8 lg:px-16">
        {/* Quiz Collection Header */}
        <section className="text-center p-12">
          <h1 className="text-[36px] font-bold mb-4 text-white text-shadow-md">
            Python for Beginners
          </h1>
          <p className="text-[18px] font-medium mb-6 text-white text-shadow-lg">
            Start your coding journey with one of the world’s most
            beginner-friendly programming languages.
          </p>
        </section>

        {/* Quiz Cards Section */}
        <section className="px-12 pb-12">
          {/* === START: CONTINUE QUIZ SECTION (Visual Pembeda 1) === */}
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Lanjutkan Kuis (Continue Quiz)
          </h3>
          <div className="bg-[#2E3A59] rounded-[30px] p-6 mb-12 flex items-center shadow-2xl">
            <div className="w-[64px] h-[64px] rounded-[10px] bg-[#FFFAFA] flex justify-center items-center mr-6">
              <img
                src={placeholderIconQuiz}
                alt="Quiz Icon"
                className="w-[40px]"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-[22px] font-bold">Introduction to Python</h3>
              <p className="text-[16px] text-[#A9A9A9]">{`8/10 Questions - 35 minutes`}</p>
            </div>

            {/* Tombol Continue Quiz untuk menuju QuizRunner */}
            <Link to={`/quizrunner/1`}>
              <button className="bg-gradient-to-r from-[#FFD200] to-[#F7971E] py-3 px-6 rounded-[30px] text-white text-[18px] font-bold hover:opacity-90 transition">
                Continue Quiz
              </button>
            </Link>
          </div>
          {/* === END: CONTINUE QUIZ SECTION === */}

          {/* === START: ALL QUIZ CARDS SECTION (Visual Pembeda 2) === */}
          <h3 className="text-2xl font-semibold mb-6 text-white border-b pb-2 border-gray-700">
            Semua Modul Kuis (All Quiz Modules)
          </h3>
          <div className="grid grid-cols-3 gap-8">
            {quizzes.map((quiz, index) => (
              <div
                key={index}
                className="bg-[#2E3A59] rounded-[20px] shadow-lg p-6 text-center hover:bg-[#3A486F] transition cursor-pointer" // Menambahkan hover effect
              >
                <div className="w-[64px] h-[64px] rounded-[10px] bg-[#FFFAFA] flex justify-center items-center mb-4 mx-auto">
                  <img
                    src={placeholderIconQuiz}
                    alt="Quiz Icon"
                    className="w-[40px]"
                  />
                </div>
                <h3 className="text-[22px] font-bold mb-2">{quiz.title}</h3>
                <p className="text-[16px] text-[#A9A9A9]">{`${quiz.totalQuestions} Questions - ${quiz.duration}`}</p>
              </div>
            ))}
          </div>
          {/* === END: ALL QUIZ CARDS SECTION === */}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default QuizCollectionDetailPage;
