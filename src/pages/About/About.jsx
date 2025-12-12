// src/pages/AboutPage.jsx
import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

// Import assets gambar
import aboutIcon from "../../assets/logo2.png"; // Ikon besar { }
import teamMember1 from "../../assets/anonymous_Person.png"; // Gambar anggota tim
import teamMember2 from "../../assets/anonymous_Person.png";
import teamMember3 from "../../assets/anonymous_Person.png";
import teamMember4 from "../../assets/anonymous_Person.png";
import teamMember5 from "../../assets/anonymous_Person.png";
import teamframe from "../../assets/teamPictureFrame_About.png"; // Frame gambar tim

const TeamCard = ({ member, role, university, imageSrc }) => {
  return (
    <div className="p-6 rounded-[20px] shadow-lg">
      {/* Frame dan Gambar Anggota Tim */}
      <div className="relative w-[220px] h-[220px] mb-4 mx-auto">
        {/* Frame Gambar: Memenuhi 100% container (220x220px) */}
        <img
          src={teamframe}
          alt="Picture Frame"
          className="w-full h-full object-contain absolute z-10 pointer-events-none" // Gunakan object-contain untuk menjaga frame tetap sesuai
        />

        {/* Gambar Anggota Tim: Diposisikan di tengah */}
        <img
          src={imageSrc}
          alt={member}
          className="w-[120px] h-[120px] object-cover rounded-[12px] absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Detail Teks Anggota Tim */}
      <h3 className="text-[20px] font-bold">{member}</h3>
      <p className="text-[14px] opacity-80">{role}</p>
      <p className="text-[13px] italic opacity-70">{university}</p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="bg-[#001433] text-white">
      <Navbar />
      <div className="py-8 pt-30 px-4 sm:px-8 lg:px-16">
        {/* About CodeQuest Section */}
        <section className="flex items-center justify-between p-10">
          <div className="flex items-center gap-6">
            <div className="w-[280px] h-[280px] rounded-full flex justify-center items-center drop-shadow-lg">
              <img src={aboutIcon} alt="CodeQuest Icon" className="w-[220px]" />
            </div>
            <div className="text-left">
              <h1 className="text-[40px] font-bold mb-4">About CodeQuest</h1>
              <p className="text-[16px] font-medium leading-[1.6] w-[570px] text-justify">
                CodeQuest is a gamified learning platform designed to make
                programming engaging, practical, and enjoyable. We combine
                interactive lessons, real-world coding challenges, and
                reward-based progression to help learners stay motivated and
                build strong technical skills. Whether you're just starting out
                or leveling up your coding journey, CodeQuest guides you step by
                step with a hands-on, game-like experience.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center mt-10">
          <h2 className="text-[36px] font-bold mb-8">Meet the Team Behind CodeQuest</h2>
          <div className="grid grid-cols-3 gap-8 justify-items-center">
            <TeamCard
              member="Nama"
              role="Role"
              university="University"
              imageSrc={teamMember1}
            />
            <TeamCard
              member="Nama"
              role="Role"
              university="University"
              imageSrc={teamMember2}
            />
            <TeamCard
              member="Nama"
              role="Role"
              university="University"
              imageSrc={teamMember3}
            />
            <TeamCard
              member="Nama"
              role="Role"
              university="University"
              imageSrc={teamMember4}
            />
            <TeamCard
              member="Nama"
              role="Role"
              university="University"
              imageSrc={teamMember5}
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
