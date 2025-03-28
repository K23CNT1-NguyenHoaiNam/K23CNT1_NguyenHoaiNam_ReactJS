import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Import ảnh từ thư mục assets
import lol from "../assets/lol.jpg";
import pubg from "../assets/pubg.jpg";
import naraka from "../assets/naraka.jpg";

function NhnHome() {
  return (
    <div className="home-container text-center">
      <h1 className="text-white">Chào mừng</h1>

      {/* Carousel hiển thị hình ảnh */}
      <Carousel className="image-carousel" interval={3000}>
        <Carousel.Item>
          <img className="d-block w-100" src={lol} alt="Game 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pubg} alt="Game 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={naraka} alt="Game 3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default NhnHome;
