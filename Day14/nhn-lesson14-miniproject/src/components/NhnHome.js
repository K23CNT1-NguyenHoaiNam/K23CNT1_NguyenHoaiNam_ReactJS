import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NhnHome() {
  return (
    <div className="home-container">
      <h1 className="text-center text-white">Chào mừng</h1>

      {/* Carousel hiển thị hình ảnh */}
      <Carousel className="image-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src="/images/lol.jpg" alt="Game 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/pubg.jpg" alt="Game 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/naraka.jpg" alt="Game 3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default NhnHome;
