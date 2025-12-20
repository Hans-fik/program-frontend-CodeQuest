import React, { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const CourseDetailPage = () => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // dummy course data
    const dummyCourse = {
      title: "Python Program Beginner Course",
      description:
        "Master the foundations of programming with Python's simple syntax. Learn variables, loops, functions, and problem-solving skills through hands-on challenges built for beginners and aspiring developers.",
      category: "Programming",
      estimated_duration: 2,
      price: "Free",
      students: 156,
      lessons: 20,
      quizzes: 3,
    };

    setCourse(dummyCourse);
  }, []);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="bg-[#0A1628] text-white">
      <Navbar />

      <div className="py-8 pt-20 px-4 sm:px-8 lg:px-16">
        {/* Hero Section */}
        <section className="flex flex-col sm:flex-row sm:items-start pb-2 pt-16">
          <div className="sm:mr-8">
            {/* Python Badge */}
            <span className=" text-white px-3 py-1 rounded-full text-sm font-bold mb-2 sm:mb-0">
              {course.category}
            </span>
            <h1 className="text-[36px] font-bold mb-2 sm:mb-0">{course.title}</h1>
          </div>
        </section>

        {/* Info Bar Below Title */}
        <div className="flex flex-wrap sm:flex-row sm:items-center sm:space-x-8 text-sm font-medium mt-2 sm:mt-0 ml-0">
          <div className="mr-4 mb-2 sm:mb-0 flex items-center">
            <span className="text-[#FDB827] mr-2">⏳</span>
            <p>{course.estimated_duration} Weeks</p>
          </div>
          <div className="flex items-center mr-4 mb-2 sm:mb-0">
            <span className="text-[#FDB827] mr-2">👨‍🎓</span>
            <p>{course.students} Students</p>
          </div>
          <div className="flex items-center mr-4 mb-2 sm:mb-0">
            <span className="text-[#FDB827] mr-2">📚</span>
            <p>{course.lessons} Lessons</p>
          </div>
          <div className="flex items-center mb-2 sm:mb-0">
            <span className="text-[#FDB827] mr-2">📝</span>
            <p>{course.quizzes} Quizzes</p>
          </div>
        </div>

        {/* Course Details Section (Right top, intersecting with header) */}
        <section
          className="p-8 bg-[#2E3A59] rounded-[20px] shadow-lg absolute right-4 top-1/3 w-[300px] z-20"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0%)" }}
        >
          <div className="flex justify-between mb-8">
            <div>
              <h3 className="text-[20px] font-semibold">Category:</h3>
              <p>{course.category}</p>
            </div>
            <div>
              <h3 className="text-[20px] font-semibold">Duration:</h3>
              <p>{course.estimated_duration} Weeks</p>
            </div>
          </div>

          <div className="flex justify-between mb-8">
            <div>
              <h3 className="text-[20px] font-semibold">Price:</h3>
              <p className="text-[#F94D2D] text-lg">{course.price}</p>
            </div>
            <div>
              <h3 className="text-[20px] font-semibold">Enrolled:</h3>
              <p>{course.students} Students</p>
            </div>
          </div>

          {/* Start Course Button */}
          <div className="text-center">
            <button className="bg-transparent text-[#FDB827] py-3 px-12 rounded-[30px] text-xl font-bold border border-[#FDB827] hover:bg-[#FDB827]/10 transition">
              Start Now
            </button>
          </div>
        </section>

        {/* Tab Navigation (Now inside Curriculum Accordion) */}
        <section
          className="p-12 mt-12 mb-24 rounded-[20px] shadow-lg bg-[#2E3A59] relative"
          style={{
            marginRight: "calc(300px + 4px)", // Adjust margin to match course detail box + 4px
          }}
        >
          {/* Tab Navigation Inside Curriculum */}
          <div className="text-center mb-8">
            <button className="px-8 py-2 bg-transparent border-b-2 border-[#FDB827] text-xl font-bold mr-8">
              Overview
            </button>
            <button className="px-8 py-2 text-xl font-bold text-gray-400">Curriculum</button>
            <button className="px-8 py-2 text-xl font-bold text-gray-400">Instructor</button>
          </div>

          {/* Curriculum Accordion */}
          <h3 className="text-2xl font-bold mb-4 text-left">Curriculum</h3>
          <div>
            {Array.from({ length: course.lessons }, (_, index) => (
              <div key={index} className="mb-6 border-b-2 border-[#2B9FED]">
                <div className="flex justify-between items-center py-4">
                  <div className="flex items-center">
                    <span className="text-[#2B9FED] mr-3">🎥</span>
                    <p>Lesson {index + 1}: Video Content</p>
                  </div>
                  <button className="text-[#2B9FED] text-sm">Preview</button>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <p>12:30</p>
                  <span>🔒</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetailPage;
