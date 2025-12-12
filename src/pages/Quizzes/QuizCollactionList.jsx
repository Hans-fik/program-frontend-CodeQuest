import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import pythonBeginnerImg from "../../assets/challenge_Packs/challenge_PythonforBeginners.png"; 
import pythonIntermediateImg from "../../assets/challenge_Packs/challenge_PythonforIntermediate.png"; 
import pythonAdvancedImg from "../../assets/challenge_Packs/challenge_PythonforAdvanced.png"; 
import jsBeginnerImg from "../../assets/challenge_Packs/challenge_JavaScriptforBeginners.png"; 
import jsIntermediateImg from "../../assets/challenge_Packs/challenge_JavaScriptforIntermediate.png"; 
import jsAdvancedImg from "../../assets/challenge_Packs/challenge_Java ScriptforAdvanced.png"; 
import cppBeginnerImg from "../../assets/challenge_Packs/challenge_C++forBeginners.png"; 
import cppIntermediateImg from "../../assets/challenge_Packs/challenge_C++forIntermediate.png"; 
import cppAdvancedImg from "../../assets/challenge_Packs/challenge_C++forAdvanced.png"; 
import comingSoonImg from "../../assets/challenge_Packs/challenge_ComingSoon.png"; 

const PracticePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const challengePacks = [
    { title: "Python for Beginners", category: "Web Development", imageUrl: pythonBeginnerImg, detailPage: "/quizCollectionDetail" },
    { title: "Python for Intermediate", category: "Web Development", imageUrl: pythonIntermediateImg, detailPage: "/quizCollectionDetail" },
    { title: "Python for Advanced", category: "Web Development", imageUrl: pythonAdvancedImg, detailPage: "/quizCollectionDetail" },
    { title: "JavaScript for Beginners", category: "Web Development", imageUrl: jsBeginnerImg, detailPage: "/quizCollectionDetail" },
    { title: "JavaScript for Intermediate", category: "Web Development", imageUrl: jsIntermediateImg, detailPage: "/quizCollectionDetail" },
    { title: "JavaScript for Advanced", category: "Web Development", imageUrl: jsAdvancedImg, detailPage: "/quizCollectionDetail" },
    { title: "C++ for Beginners", category: "Computer Science Foundations", imageUrl: cppBeginnerImg, detailPage: "/quizCollectionDetail" },
    { title: "C++ for Intermediate", category: "Computer Science Foundations", imageUrl: cppIntermediateImg, detailPage: "/quizCollectionDetail" },
    { title: "C++ for Advanced", category: "Computer Science Foundations", imageUrl: cppAdvancedImg, detailPage: "/quizCollectionDetail" },
    { title: "Coming Soon", category: "Data Science", imageUrl: comingSoonImg, detailPage: "/quizCollectionDetail" },
  ];

  const handleCardClick = (detailPage) => {
    navigate(detailPage); 
  };

  // Filter challenges based on selected category
  const filteredChallengePacks = selectedCategory === "All"
    ? challengePacks
    : challengePacks.filter(pack => pack.category === selectedCategory);

  return (
    <div className="bg-[#000926] text-white">
      <Navbar />

      {/* Main Content Container */}
      <div className="py-8 pt-20 px-4 sm:px-8 lg:px-16">
        <section className="text-center p-12">
          <h1 className="text-[36px] font-bold mb-4">Challenge Packs</h1>
          <p className="text-[18px] font-medium mb-6 text-white text-shadow-md">
            Enhance your coding proficiency through structured practice modules designed to reinforce key programming concepts.
          </p>
        </section>

        {/* Button Filter Section */}
        <section className="flex justify-center gap-6 mb-10">
          {["All", "Web Development", "Data Science", "Computer Science Foundations"].map(category => (
            <button
              key={category}
              className={`px-8 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#FFD200] to-[#F7971E]"
                  : "border-2 border-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </section>

        {/* Challenge Packs Section */}
        <section className="p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredChallengePacks.map((pack, index) => (
            <div
              key={index}
              //000000 000926
              className="bg-[#000926] rounded-[20px] shadow-lg p-6 text-center cursor-pointer hover:bg-[#152345] transition"
              onClick={() => handleCardClick(pack.detailPage)}
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  src={pack.imageUrl}
                  alt={pack.title}
                  className="w-[175px] h-[175px] mb-4 rounded-[20px] object-cover"
                />
                <h3 className="text-[16px] font-bold">{pack.title}</h3>
              </div>
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PracticePage;
