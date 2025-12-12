import React from "react";
import { NavLink } from "react-router-dom";

// Import images
import logoFooter from "../../assets/logo_footer.png";
import facebook from "../../assets/social_facebook.png";
import linkdin from "../../assets/social_linkdin.png";
import twitter from "../../assets/social_x.png";

const Footer = () => {
  return (
    <footer className="bg-[#000515] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Text Section */}
        <h1 className="text-3xl font-semibold mb-4">CodeQuest. We’re here</h1>
        
        {/*
          PERBAIKAN: Membatasi lebar paragraf agar tidak menjulang.
          Menambahkan div dengan kelas max-w-lg dan mx-auto
        */}
        <div className="max-w-lg mx-auto"> 
          <p className="text-sm mb-4">
            CodeQuest empowers learners to master real programming skills through
            fun, interactive, and gamified learning experiences. Level up your
            knowledge, one quest at a time.
          </p>
        </div>

        {/* Button Section */}
        <div className="mb-10 flex justify-center gap-10">
          <NavLink
            to="/insights"
            className="px-4 py-1.5 rounded-full text-white text-sm font-bold font-[Montserrat] border border-[#000926] bg-[#000000] transition hover:bg-white/10"
          >
            👀Insights
          </NavLink>
          <NavLink
            to="/contact"
            className="px-4 py-1.5 rounded-full text-white text-sm font-bold font-[Montserrat] border border-[#000926] bg-[#000000] hover:bg-white/10 transition"
          >
            👋Contact
          </NavLink>
        </div>

        {/* Footer Items on a single row: Logo, Copyright Text, Social Media Icons */}
        <div className="flex justify-between items-center mt-8">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img src={logoFooter} alt="CodeQuest Logo" className="w-28 h-auto" />
          </div>

          {/* Copyright Text */}
          <div className="text-sm font-medium text-center">
            © 2025 CodeQuest. All Rights Reserved.
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 items-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkdin} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;