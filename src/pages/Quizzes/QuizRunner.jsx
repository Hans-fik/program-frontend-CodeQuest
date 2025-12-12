// src/pages/QuizRunnerPage.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const QuizRunnerPage = () => {
  // State untuk mengelola waktu sisa
  const [timeRemaining, setTimeRemaining] = useState(1000); // Time in seconds (1000s = 16:40)
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Untuk mengelola jawaban yang dipilih

  useEffect(() => {
    // Timer countdown setiap detik
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((prevTime) => prevTime - 1);
      }
    }, 1000);

    // Bersihkan interval ketika komponen tidak lagi digunakan
    return () => clearInterval(timer);
  }, [timeRemaining]);

  // Fungsi untuk mengonversi waktu dalam detik ke format menit:detik
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = () => {
    // Bisa menambahkan logika untuk mengecek jawaban atau menyelesaikan kuis
    alert(`Jawaban yang dipilih: ${selectedAnswer}`);
  };

  return (
    <div className="bg-[#000926] text-white">
      <Navbar />

      {/* Quiz Runner Section */}
      <section className="p-12">
        <div className="flex justify-between items-center">
          <h1 className="text-[36px] font-bold mb-4 text-white text-shadow-md">Introduction to Python</h1>
          <div className="text-[18px] font-semibold bg-[#000000AA] px-4 py-2 rounded-[10px]">
            {formatTime(timeRemaining)} {/* Menampilkan waktu */}
          </div>
        </div>

        {/* Quiz Question Section */}
        <div className="bg-[#2E3A59] rounded-[20px] shadow-lg p-6 mb-8">
          <h2 className="text-[22px] font-bold mb-4">What is Python primarily used for?</h2>

          <div className="flex flex-col gap-4">
            <label className="bg-[#1D2540] p-4 rounded-[10px] cursor-pointer">
              <input
                type="radio"
                name="quizAnswer"
                value="Only mobile development"
                checked={selectedAnswer === "Only mobile development"}
                onChange={handleAnswerChange}
                className="mr-4"
              />
              Only mobile development
            </label>

            <label className="bg-[#1D2540] p-4 rounded-[10px] cursor-pointer">
              <input
                type="radio"
                name="quizAnswer"
                value="Web development, data analysis, automation, and more"
                checked={selectedAnswer === "Web development, data analysis, automation, and more"}
                onChange={handleAnswerChange}
                className="mr-4"
              />
              Web development, data analysis, automation, and more
            </label>

            <label className="bg-[#1D2540] p-4 rounded-[10px] cursor-pointer">
              <input
                type="radio"
                name="quizAnswer"
                value="Computer hardware design"
                checked={selectedAnswer === "Computer hardware design"}
                onChange={handleAnswerChange}
                className="mr-4"
              />
              Computer hardware design
            </label>

            <label className="bg-[#1D2540] p-4 rounded-[10px] cursor-pointer">
              <input
                type="radio"
                name="quizAnswer"
                value="Video editing"
                checked={selectedAnswer === "Video editing"}
                onChange={handleAnswerChange}
                className="mr-4"
              />
              Video editing
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mb-12">
          <button
            className="bg-gradient-to-r from-[#FFD200] to-[#F7971E] text-white py-2 px-8 rounded-[30px] text-[18px]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuizRunnerPage;