// pages/LeaderboardPage.js

import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import LeaderboardPodium from "../../components/shared/LeaderboardPodium";
import gem from "../../assets/gem.png";

// Mengimpor gambar aset untuk podium (avatar)
import avatar1 from "../../assets/anonymous_Person.png";
import avatar2 from "../../assets/anonymous_Person.png";
import avatar3 from "../../assets/anonymous_Person.png";

const LeaderboardPage = () => {
  // Data podium untuk tiga teratas (Urutan: 1, 2, 3)
  const podiumData = [
    {
      rank: "🥇",
      username: "Mihu Mahi",
      earnedPoints: 2000,
      totalPoints: 100000,
      avatarUrl: avatar1,
    },
    {
      rank: "🥈",
      username: "John Doe",
      earnedPoints: 1800,
      totalPoints: 95000,
      avatarUrl: avatar2,
    },
    {
      rank: "🥉",
      username: "Jane Smith",
      earnedPoints: 1500,
      totalPoints: 90000,
      avatarUrl: avatar3,
    },
  ];

  // Data ranking untuk peringkat 4 hingga 11 (tetap sama)
  const rankingData = [
    { rank: 4, username: "Lorem Ipsum", totalPoints: 80000 },
    { rank: 5, username: "John Doe", totalPoints: 75000 },
    { rank: 6, username: "Jane Smith", totalPoints: 70000 },
    { rank: 7, username: "Lorem Ipsum", totalPoints: 65000 },
    { rank: 8, username: "John Doe", totalPoints: 60000 },
    { rank: 9, username: "Jane Smith", totalPoints: 55000 },
    { rank: 10, username: "Lorem Ipsum", totalPoints: 50000 },
    { rank: 11, username: "John Doe", totalPoints: 45000 },
  ];

  return (
    <div className="bg-[#000926] text-white">
      <Navbar />
      <div className="py-8 pt-30 px-4 sm:px-8 lg:px-16">
        <section className="p-6 text-center">
          <h1 className="text-[36px] font-bold mb-15 text-shadow-lg">
            Leaderboard
          </h1>

          {/* Top 3 Podium: Urutan 2, 1, 3. */}
          <div className="flex justify-center gap-8 mb-10 pt-10">
            <LeaderboardPodium
              key={podiumData[1].rank}
              rank={podiumData[1].rank}
              username={podiumData[1].username}
              earnedPoints={podiumData[1].earnedPoints}
              totalPoints={podiumData[1].totalPoints}
              avatarUrl={podiumData[1].avatarUrl}
            />
            <LeaderboardPodium
              key={podiumData[0].rank}
              rank={1}
              username={podiumData[0].username}
              earnedPoints={podiumData[0].earnedPoints}
              totalPoints={podiumData[0].totalPoints}
              avatarUrl={podiumData[0].avatarUrl}
            />
            <LeaderboardPodium
              key={podiumData[2].rank}
              rank={podiumData[2].rank}
              username={podiumData[2].username}
              earnedPoints={podiumData[2].earnedPoints}
              totalPoints={podiumData[2].totalPoints}
              avatarUrl={podiumData[2].avatarUrl}
            />
          </div>

       {/* Ranking Table (4 - 11) */}
<div className="overflow-x-auto mt-10">
  <table className="table-auto w-full max-w-5xl mx-auto border-separate border-spacing-y-4">
    <thead>
      <tr>
        <th className="text-[18px] font-bold px-6 pb-2 text-left w-24 text-white">Rank</th>
        <th className="text-[18px] font-bold px-6 pb-2 text-left text-white">Username</th>
        <th className="text-[18px] font-bold px-6 pb-2 text-right text-white">Total Points</th>
      </tr>
    </thead>
    <tbody>
      {rankingData.map((user, index) => (
        <tr
          key={user.rank}
          className="bg-[#061B59] transition-all hover:bg-[#0a267a]"
        >
          {/* Column 1: Rank */}
          <td className="p-5 text-white text-lg font-semibold text-left rounded-l-2xl">
            #{user.rank}
          </td>

          {/* Column 2: Username and Avatar */}
          <td className="p-5">
            <div className="flex items-center gap-4">
              <img
                src={avatar1}
                alt="Avatar"
                className="w-12 h-12 rounded-full border-2 border-indigo-400 object-cover"
              />
              <div className="flex flex-col text-left">
                <span className="text-white font-bold">{user.username}</span>
                <span className="text-gray-400 text-sm">
                  @{user.username.toLowerCase().replace(/\s/g, '')}
                </span>
              </div>
            </div>
          </td>

          {/* Column 3: Total Points (Tanpa Border/Background Tambahan) */}
          <td className="p-5 text-white text-lg font-medium text-right rounded-r-2xl">
            <div className="inline-flex items-center justify-end gap-2 w-full">
              <img 
                src={gem} 
                alt="Gem" 
                className="w-6 h-6 object-contain" 
              />
              <span className="font-bold">{user.totalPoints.toLocaleString()}</span>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LeaderboardPage;
