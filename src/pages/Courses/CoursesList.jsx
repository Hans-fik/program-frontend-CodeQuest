import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Link } from "react-router-dom";

// Import assets gambar untuk Course Packs
import pythonBeginnerImg from "../../assets/course/course_Python.png"; // Gambar untuk Python for Beginners
import jsBeginnerImg from "../../assets/course/course_JavaScript.png"; // Gambar untuk JavaScript for Beginners
import sqlBeginnerImg from "../../assets/course/course_SQL.png"; // Gambar untuk SQL for Beginners
import cppBeginnerImg from "../../assets/course/course_C++.png"; // Gambar untuk C++ for Intermediate
import cBeginnerImg from "../../assets/course/course_C.png"; // Gambar untuk C for Beginners

const CourseListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const coursePacks = [
    {
      id: 1,
      title: "Python Program Beginner Course",
      imageUrl: pythonBeginnerImg,
      duration: "2 Weeks",
      students: "156 Students",
      price: "$29.00",
      discountPrice: "Free",
      category: "Python",
    },
    {
      id: 2,
      title: "JavaScript for Beginners",
      imageUrl: jsBeginnerImg,
      duration: "2 Weeks",
      students: "156 Students",
      price: "$19.00",
      discountPrice: "Free",
      category: "JavaScript",
    },
    {
      id: 3,
      title: "SQL for Beginners",
      imageUrl: sqlBeginnerImg,
      duration: "2 Weeks",
      students: "156 Students",
      price: "$25.00",
      discountPrice: "Free",
      category: "SQL",
    },
    {
      id: 4,
      title: "C++ for Beginners",
      imageUrl: cppBeginnerImg,
      duration: "2 Weeks",
      students: "156 Students",
      price: "$35.00",
      discountPrice: "Free",
      category: "C++",
    },
    {
      id: 5,
      title: "C for Beginners",
      imageUrl: cBeginnerImg,
      duration: "2 Weeks",
      students: "156 Students",
      price: "$29.00",
      discountPrice: "Free",
      category: "C",
    },
  ];

  return (
    <div className="bg-[#000926] text-white">
      <Navbar />
      <div className="py-8 pt-20 px-4 sm:px-8 lg:px-16">
        {/* Hero Section */}
        <section className="text-center p-12">
          <h1 className="text-[36px] font-bold mb-4">All Courses</h1>
        </section>

        {/* Course Packs Grid */}
        <section className="p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {/* Loop through the coursePacks */}
          {coursePacks.map((pack, index) => (
            <div
              key={index}
              className="bg-[#0B1735] rounded-[20px] shadow-lg p-1 text-center relative border-2 border-gray-700"
            >
              {/* Course Category Badge */}
              <div className="absolute top-4 left-3 bg-[#1F2A44] text-white px-2 py-1 rounded-full text-sm">
                {pack.category}
              </div>
              <img
                src={pack.imageUrl}
                alt={pack.title}
                className="w-full h-[200px] object-cover mb-4 rounded-[20px]"
              />
              <h3 className="text-[16px] font-bold">{pack.title}</h3>
              <p className="text-[14px] mb-4">{pack.duration} · {pack.students}</p>

              {/* Garis Pembatas */}
              <hr className="border-t-2 border-gray-700 my-1 mr-2 ml-2" />

              {/* Pricing and Button */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-[14px] line-through text-gray-400">{pack.price}</span>
                  <span className="text-[20px] font-extrabold text-500 text-[#55BE24]">{pack.discountPrice}</span>
                </div>
                {/* Link menuju CourseDetail */}
                <Link to="/courses/detail" className=" text-white py-1 px-2 rounded-[50px]">
                  View More
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CourseListPage;
