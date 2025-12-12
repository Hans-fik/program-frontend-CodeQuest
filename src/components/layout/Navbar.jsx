import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/chourseList", label: "Learn" },
  { to: "/challengepacks", label: "Practice" },
  { to: "/leaderboard", label: "Leaderboard" },
  { to: "/about", label: "About" },
  { to: "/profile", label: "Profile" },
];

const Navbar = () => {
  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center">
      <nav className="flex flex-row gap-8 items-center justify-center rounded-full bg-[#000515]/90 backdrop-blur-md h-fit max-w-screen-xl w-fit px-2">
        {navItems.map((item) => (
          <NavLink
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `my-2 rounded-full px-10 py-3 text-sm font-bold font-[Montserrat] text-white transition whitespace-nowrap 
               ${isActive ? "bg-gradient-to-b from-[#FFD200] to-[#F7971E] shadow-md" : "hover:bg-white/10"}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;