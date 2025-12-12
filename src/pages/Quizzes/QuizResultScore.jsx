// src/pages/QuizResultScorePage.jsx
import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useNavigate } from "react-router-dom";

const QuizResultScorePage = () => {
  const [score] = useState(80); // Simulasi skor (80)
  const navigate = useNavigate();

  // Data soal dan jawaban
  const questions = [
    {
      question: "What is Python primarily used for?",
      correctAnswer: "Web development, data analysis, automation, and more",
      userAnswer: "Only mobile development",
      isCorrect: false,
    },
    {
      question: "What is the capital of France?",
      correctAnswer: "Paris",
      userAnswer: "Paris",
      isCorrect: true,
    },
    {
      question: "What is 2 + 2?",
      correctAnswer: "4",
      userAnswer: "4",
      isCorrect: true,
    },
  ];

  // Fungsi untuk kembali ke halaman utama
  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-[#000926] text-white">
      <Navbar />

      {/* Quiz Result Score Section */}
      <section className="p-12">
        <h1 className="text-[36px] font-bold mb-4 text-[#FFD200] text-shadow-md">
          Score: {score}
        </h1>

        {/* Quiz Questions and Answers */}
        <div className="space-y-6">
          {questions.map((question, index) => (
            <div key={index} className="bg-[#2E3A59] p-6 rounded-[20px] shadow-lg">
              <h3 className="text-[22px] font-bold mb-4">{question.question}</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span
                    className={`mr-4 p-2 rounded-full ${
                      question.isCorrect ? "bg-[#4CAF50]" : "bg-[#F44336]"
                    }`}
                  >
                    {question.isCorrect ? "✔️" : "❌"}
                  </span>
                  <span className="text-[16px]">{question.userAnswer}</span>
                </div>
                <div className="text-[16px] text-[#A9A9A9]">
                  Correct answer: {question.correctAnswer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Section (Optional) */}
        <div className="text-center mt-12">
          <h2 className="text-[18px] font-bold text-white">
            {score >= 70 ? "Great job!" : "Keep trying!"}
          </h2>
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={goToHome}
            className="bg-gradient-to-r from-[#FFD200] to-[#F7971E] py-3 px-8 rounded-[30px] text-white text-[18px]"
          >
            Back to Home
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuizResultScorePage;