// pages/LeaderboardPage.js

import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import LeaderboardPodium from "../../components/shared/LeaderboardPodium";

// Mengimpor gambar aset untuk podium (avatar) (SESUAIKAN PATH INI)
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

  // Mengambil data spesifik
  const rankOne = podiumData[0];
  const rankTwo = podiumData[1];
  const rankThree = podiumData[2];

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
            {/* Rank 2 (indeks 1) */}
            <LeaderboardPodium
              key={rankTwo.rank}
              rank={rankTwo.rank}
              username={rankTwo.username}
              earnedPoints={rankTwo.earnedPoints}
              totalPoints={rankTwo.totalPoints}
              avatarUrl={rankTwo.avatarUrl}
            />

            {/* Rank 1 (indeks 0) - Diletakkan di Tengah */}
            <LeaderboardPodium
              key={rankOne.rank}
              // GANTI: rank={rankOne.rank}
              // MENJADI: rank={1}
              rank={1}
              username={rankOne.username}
              earnedPoints={rankOne.earnedPoints}
              totalPoints={rankOne.totalPoints}
              avatarUrl={rankOne.avatarUrl}
            />

            {/* Rank 3 (indeks 2) */}
            <LeaderboardPodium
              key={rankThree.rank}
              rank={rankThree.rank}
              username={rankThree.username}
              earnedPoints={rankThree.earnedPoints}
              totalPoints={rankThree.totalPoints}
              avatarUrl={rankThree.avatarUrl}
            />
          </div>
          {/* Ranking Table (4 - 11) */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-center">
              <thead>
                <tr>
                  <th className="text-[18px] font-bold p-2">Rank</th>
                  <th className="text-[18px] font-bold p-2">Username</th>
                  <th className="text-[18px] font-bold p-2">Total Points</th>
                </tr>
              </thead>
              <tbody>
                {rankingData.map((user, index) => (
                  // Pastikan menggunakan key yang unik, di sini rank seharusnya unik
                  <tr
                    key={user.rank}
                    className={`bg-${
                      index % 2 === 0 ? "blue-800" : "blue-900"
                    }`}
                  >
                    <td className="p-2">{user.rank}</td>
                    <td className="p-2">{user.username}</td>
                    <td className="p-2">{user.totalPoints.toLocaleString()}</td>
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
