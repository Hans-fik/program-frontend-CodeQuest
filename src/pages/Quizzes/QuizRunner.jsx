// src/pages/QuizRunnerPage.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useNavigate } from "react-router-dom"; // Untuk navigasi setelah quiz selesai

// Data dummy untuk 5 soal "Introduction to Python" (Scrollable content)
const pythonQuizQuestions = [
    {
        id: 1,
        question: "What is Python primarily used for?",
        answers: [
            "Only mobile development",
            "Web development, data analysis, automation, and more",
            "Computer hardware design",
            "Video editing",
        ],
        correctAnswer: "Web development, data analysis, automation, and more",
    },
    {
        id: 2,
        question: "Which of the following is the correct file extension for a Python source code file?",
        answers: [
            ".java",
            ".html",
            ".py",
            ".txt",
        ],
        correctAnswer: ".py",
    },
    {
        id: 3,
        question: "What concept does Python use to handle indentation, which distinguishes it from many other languages?",
        answers: [
            "Curly Braces ({ })",
            "Indentation (White Space)",
            "Semicolons (;)",
            "Keywords 'Begin' and 'End'",
        ],
        correctAnswer: "Indentation (White Space)",
    },
    {
        id: 4,
        question: "In Python, which keyword is used to define a function?",
        answers: [
            "function",
            "define",
            "def",
            "func",
        ],
        correctAnswer: "def",
    },
    {
        id: 5,
        question: "How do you output data to the standard output device in Python?",
        answers: [
            "console.log()",
            "echo",
            "printf()",
            "print()",
        ],
        correctAnswer: "print()",
    },
];

const QuizRunnerPage = () => {
    const navigate = useNavigate(); // Hook untuk navigasi ke QuizResult
    const [timeRemaining, setTimeRemaining] = useState(1000);

    // 🔥 State untuk menyimpan semua jawaban { '1': 'jawaban A', '2': 'jawaban B', ... }
    const [selectedAnswers, setSelectedAnswers] = useState({});

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeRemaining > 0) {
                setTimeRemaining((prevTime) => prevTime - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [timeRemaining]);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    // 🔥 Fungsi untuk menangani perubahan jawaban untuk soal spesifik
    const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answer,
        }));
    };

    const handleSubmit = () => {
        // Logika untuk menghitung skor dan mengirim data
        const totalQuestions = pythonQuizQuestions.length;
        const answeredQuestions = Object.keys(selectedAnswers).length;

        if (answeredQuestions < totalQuestions) {
            alert(
                `Anda baru menjawab ${answeredQuestions} dari ${totalQuestions} soal. Silakan jawab semua soal sebelum submit.`
            );
            return;
        }

        // Contoh: Hitung skor
        let score = 0;
        pythonQuizQuestions.forEach((q) => {
            if (selectedAnswers[q.id] === q.correctAnswer) {
                score++;
            }
        });

        // Mengarahkan pengguna ke halaman hasil (QuizResult)
        navigate("/quizresult", { state: { score, totalQuestions } });
    };

    return (
        <div className="bg-[#000926] text-white">
            

            {/* 🔥 Timer Bar - Sticky di atas konten kuis */}
            <div className="sticky top z-10 w-full bg-[#0B1735] shadow-xl py-3 px-8 text-center border-b border-gray-700">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-400">Time Remaining:</h2>
                    <div className="text-xl font-bold bg-[#1D2540] text-[#FFD200] px-4 py-1 rounded-lg">
                        {formatTime(timeRemaining)}
                    </div>
                </div>
            </div>

            <div className="py-8 px-4 sm:px-8 lg:px-16">
                {/* Quiz Runner Section Container */}
                <section className="max-w-4xl mx-auto py-4">
                    {/* 🔥 Looping untuk SEMUA Soal (Full Scrollable) */}
                    {pythonQuizQuestions.map((question) => {
                        const isQuestionAnswered = !!selectedAnswers[question.id];

                        return (
                            <div key={question.id} className="mb-12">
                                {/* 1. Header Soal (Setiap Soal) */}
                                <div className="flex justify-between items-start px-6 py-4 rounded-t-xl bg-[#B8CAE8]">
                                    <div className="flex items-start gap-4">
                                        {/* Badge nomor dinamis */}
                                        <div className="w-10 h-10 bg-[#1D2540] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-xl font-bold">{question.id}</span>
                                        </div>
                                        {/* Teks Pertanyaan dinamis */}
                                        <h1 className="text-2xl font-bold text-[#000926] leading-relaxed flex-grow">
                                            {question.question}
                                        </h1>
                                    </div>
                                </div>

                                {/* 2. Answer Area - Background Navy Gelap */}
                                <div className="bg-[#1D2540] rounded-b-xl shadow-2xl p-6 border-t-2 border-gray-700">
                                    <div className="flex flex-col gap-4">
                                        {/* Looping Pilihan Jawaban */}
                                        {question.answers.map((answer, index) => {
                                            const isSelected = selectedAnswers[question.id] === answer;
                                            return (
                                                <label
                                                    key={index}
                                                    className={`
                                                        flex items-start p-4 rounded-xl cursor-pointer transition-all duration-200
                                                        ${isSelected
                                                            ? "bg-[#FFD200] text-[#000926] font-semibold"
                                                            : "bg-transparent border-2 border-white hover:border-[#FFD200] text-white"
                                                        }
                                                    `}
                                                >
                                                    <input
                                                        type="radio"
                                                        name={`quizAnswer-${question.id}`} // Nama unik per soal
                                                        value={answer}
                                                        checked={isSelected}
                                                        onChange={() => handleAnswerChange(question.id, answer)}
                                                        className="hidden"
                                                    />

                                                    {/* Radio Button Kustom */}
                                                    <div
                                                        className={`
                                                            w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0
                                                            ${isSelected
                                                                ? "bg-[#FFD200] border-2 border-[#1D2540]"
                                                                : "border-2 border-white"
                                                            }
                                                        `}
                                                    >
                                                        {isSelected && (
                                                            <div className="w-3 h-3 rounded-full bg-[#1D2540]"></div>
                                                        )}
                                                    </div>

                                                    <span className={`text-base ${isSelected ? "text-[#000926]" : "text-white"}`}>
                                                        {answer}
                                                    </span>
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* 🔥 Tombol Submit Akhir (Satu-satunya Tombol Aksi) */}
                    <div className="flex justify-center mt-16 mb-24">
                        <button
                            className="bg-gradient-to-r from-[#FFD200] to-[#F7971E] text-[#000926] py-3 px-12 rounded-[30px] text-2xl font-bold hover:opacity-90 transition shadow-lg"
                            onClick={handleSubmit}
                        >
                            Finish Quiz & See Score
                        </button>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default QuizRunnerPage;
