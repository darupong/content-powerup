import React, { useState, useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import ImgLogo from "../../public/imgs/LogoCTP.png";
import S1 from "../../public/imgs/s1.png";
import PP from "../../public/imgs/poster.jpg";
import P1 from "../../public/imgs/7.jpg";
import P2 from "../../public/imgs/8.jpg";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("November 9, 2024 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-gray-900 text-white font-[family-name:var(--font-geist-sans)]`}
    >
      {/* Sticky Navbar */}
      <nav className="navbar bg-gray-800 shadow-lg sticky top-0 z-50 py-4 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-1">
            <Image
              src={ImgLogo}
              alt="Logo"
              className="w-40 sm:w-48 md:w-60 h-auto"
            />
          </div>
          <div className="flex-none">
            <a
              href="https://forms.gle/PEpUHnLQwiEzxAMv8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-secondary text-xs sm:text-sm md:text-md lg:text-lg text-white border-white hover:bg-gray-700"
            >
              ลงทะเบียนเข้าร่วมงาน ฟรี!
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col row-start-2 items-center sm:items-start p-0 pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={ImgLogo}
              alt="Logo CTP"
              className="w-[300px] sm:w-[500px] md:w-[600px] lg:w-[800px] h-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={S1}
              alt="Seminar Image"
              className="w-[300px] sm:w-[500px] md:w-[600px] lg:w-[900px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Countdown Section */}
      <div className="bg-gray-800 w-full h-auto py-10 flex flex-col items-center justify-center space-y-6 text-white">
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            งานสัมมนาจะเริ่มใน
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => {
            const unitNames: { [key in keyof typeof timeLeft]: string } = {
              days: "วัน",
              hours: "ชั่วโมง",
              minutes: "นาที",
              seconds: "วินาที",
            };
            return (
              <div
                key={unit}
                className="flex flex-col items-center justify-center border-2 border-gray-400 rounded-lg w-16 h-16 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-gray-700 text-white"
              >
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
                  {value}
                </span>
                <span className="text-xs sm:text-sm md:text-md lg:text-lg">
                  {unitNames[unit as keyof typeof timeLeft]}
                </span>
              </div>
            );
          })}
        </div>
        <div>
          <a
            href="https://forms.gle/PEpUHnLQwiEzxAMv8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-secondary btn-sm sm:btn-sm md:btn-md lg:btn-lg text-white border-white hover:bg-gray-700"
          >
            ลงทะเบียนเข้าร่วมงาน
          </a>
        </div>
      </div>
      <div className="pt-10">
        <Image
          src={PP}
          alt="Poster"
          className="w-[300px] sm:w-[500px] md:w-[600px] lg:w-[900px] h-auto p-4"
        />
        <Image
          src={P1}
          alt="Image 7"
          className="w-[300px] sm:w-[500px] md:w-[600px] lg:w-[900px] h-auto p-4"
        />
        <Image
          src={P2}
          alt="Image 8"
          className="w-[300px] sm:w-[500px] md:w-[600px] lg:w-[900px] h-auto p-4"
        />
      </div>
      <footer className="bg-gray-800 text-white w-full py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-md lg:text-lg">
            © 2024 Social Media Technology, Rangsit University
          </p>
        </div>
      </footer>
    </div>
  );
}
