import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NhnGallery.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaDiscord, FaReddit } from "react-icons/fa";

// Import hình ảnh
import lolImage from "../assets/lol.jpg";
import pubgImage from "../assets/pubg.jpg";
import narakaImage from "../assets/naraka.jpg";
import minecraftImage from "../assets/minecraft.jpg";
import dota2Image from "../assets/dota2.jpg";

// Import video
import lolVideo from "../assets/lol.mp4";
import pubgVideo from "../assets/pubg.mp4";
import narakaVideo from "../assets/naraka.mp4";
import minecraftVideo from "../assets/minecraft.mp4";
import dota2Video from "../assets/dota2.mp4";

const games = [
  { image: lolImage, video: lolVideo, link: "https://www.leagueoflegends.com/", title: "League of Legends" },
  { image: pubgImage, video: pubgVideo, link: "https://pubg.com/", title: "PUBG" },
  { image: narakaImage, video: narakaVideo, link: "https://www.narakathegame.com/", title: "Naraka: Bladepoint" },
  { image: minecraftImage, video: minecraftVideo, link: "https://www.minecraft.net/en-us/about-dungeons", title: "Minecraft Dungeons" },
  { image: dota2Image, video: dota2Video, link: "https://www.dota2.com/home", title: "DOTA 2" },
];

function NhnGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredSmall, setHoveredSmall] = useState(null);

  // Chuyển video lớn tự động mỗi 10 giây
  useEffect(() => {
    const interval = setInterval(() => {
      nextVideo();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Chuyển video tiếp theo
  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
  };

  // Chuyển video trước đó
  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length);
  };

  return (
    <div className="container mt-4">
      <h2 className="fancy-title">Bộ Sưu Tập Games</h2>
      <div className="d-flex justify-content-center align-items-start">
        {/* Video lớn bên trái */}
        <div className="large-video">
          <a href={games[currentIndex].link} target="_blank" rel="noopener noreferrer">
            <video src={games[currentIndex].video} autoPlay loop muted className="video-fluid rounded shadow"></video>
            <div className="overlay">{games[currentIndex].title}</div>
          </a>

          {/* Nút chuyển video */}
          <button className="arrow left" onClick={prevVideo}><FaArrowLeft /></button>
          <button className="arrow right" onClick={nextVideo}><FaArrowRight /></button>

          {/* Thanh điều hướng */}
<div className="navigation-buttons">
  <a href="https://discord.com" className="nav-btn discord" target="_blank" rel="noopener noreferrer">
    <FaDiscord /> <span>Join us on</span> <strong>Discord</strong>
  </a>
  <a href="https://reddit.com" className="nav-btn reddit" target="_blank" rel="noopener noreferrer">
    <FaReddit /> <span>Follow us on</span> <strong>Reddit</strong>
  </a>
</div>
        </div>

        {/* Danh sách ảnh nhỏ bên phải */}
        <div className="d-flex flex-column gap-3 ms-4">
          {games.map((game, index) => (
            <div
              key={index}
              className="small-image position-relative"
              onMouseEnter={() => setHoveredSmall(index)}
              onMouseLeave={() => setHoveredSmall(null)}
            >
              <a href={game.link} target="_blank" rel="noopener noreferrer">
                {hoveredSmall === index ? (
                  <video src={game.video} autoPlay loop muted className="img-fluid rounded shadow"></video>
                ) : (
                  <img src={game.image} alt={game.title} className="img-fluid rounded shadow" />
                )}
                <div className="overlay">{game.title}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NhnGallery;
