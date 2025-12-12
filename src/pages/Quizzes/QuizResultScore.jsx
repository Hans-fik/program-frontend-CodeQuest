// src/pages/QuizResultPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const QuizResultPage = () => {
    const location = useLocation();
    const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

    return (
        <div className="bg-[#000926] text-white">
            <Navbar />
            <div className="py-8 px-4 sm:px-8 lg:px-16">
                <section className="max-w-4xl mx-auto py-4">
                    <div className="flex justify-start items-center space-x-8">
                        <div className="bg-[#1D2540] p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold mb-4 text-white">Your Result:</h2>
                            <p className="text-white text-2xl mb-4">
                                <strong>Score: {score} / {totalQuestions}</strong>
                            </p>
                        </div>
                    </div>

                    {/* Optional message */}
                    <div className="mt-8 text-center text-white">
                        <p>Congratulations! You completed the quiz. Keep practicing to improve your skills.</p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default QuizResultPage;
