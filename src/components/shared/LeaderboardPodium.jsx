"use client";

import React from "react";

// Import gambar podium secara langsung
import podiumImage from "../../assets/podium_Leaderboard.png";  // Menggunakan gambar podium
import trophyIcon from "../../assets/trophy_Podium.png";  // Menggunakan gambar trophy
import gem from "../../assets/gem.png";

const LeaderboardPodium = ({ rank, username, earnedPoints, totalPoints, avatarUrl }) => {
  // Menambahkan transformasi untuk Top 1 agar lebih tinggi sedikit
  const elevationClass = rank === 1 ? "mb-12 md:mb-16 transform translate-y-[-40px]" : ""; // Top 1 lebih tinggi
  
  return (
    <div className={`flex flex-col items-center w-full max-w-xs ${elevationClass}`}>
      {/* Avatar */}
      <div
        className="w-32 h-32 md:w-26 md:h-26 bg-white rounded-2xl mb-4 bg-cover bg-center"
        style={avatarUrl ? { backgroundImage: `url(${avatarUrl})` } : {}}
        role="img"
        aria-label={`${username}'s avatar`}
      />
      
      {/* Name */}
      <p className="text-white text-center font-semibold text-lg md:text-xl whitespace-pre-line mb-6">{username}</p>
      
      {/* Podium Background */}
      <div className="w-full bg-cover rounded-[20px] p-6 md:p-16 text-center shadow-lg" 
           style={{ backgroundImage: `url(${podiumImage})`, backgroundSize: 'cover' }}>
        {/* Trophy Icon - Ganti dengan gambar */}
        <div className="flex justify-center mb-4">
          <img src={trophyIcon} alt="Trophy Icon" className="w-8 h-8 md:w-10 md:h-10" />
        </div>

        {/* Earned Points */}
        <p className="text-sm text-white md:text-base mb-6">
          Earn {earnedPoints.toLocaleString()} points
        </p>

        {/* Total Points - Highlighted */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <img src={gem} alt="Gem Icon" className="w-6 h-6 md:w-8 md:h-8 text-[#FFD200]" /> {/* Ganti dengan ikon Gem jika ada */}
          <span className="text-3xl md:text-4xl font-bold text-white"> {/* Putih untuk teks Total Points */}
            {totalPoints.toLocaleString()}
          </span>
        </div>

        {/* Label */}
        <p className="text-sm text-white md:text-base">Total Points</p>
      </div>
    </div>
  );
};

export default LeaderboardPodium;