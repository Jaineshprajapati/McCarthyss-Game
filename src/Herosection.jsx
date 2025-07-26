import React, { useEffect } from "react";
import "./Herosection.css";
import colorstar from "./assets/colorstar.svg";
import whiteStar from "./assets/whitestar.svg";
import SlideUpWrapper from "./SlideUpWrapper";

const HeroSection = () => {
  useEffect(() => {
    const container = document.querySelector(".herosection-stars");

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      container.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stars = Array.from({ length: 20 }).map((_, index) => {
    const isPurple = Math.random() > 0.5;
    const size = Math.floor(Math.random() * 6) + 6; // 6px to 12px
    const duration = (Math.random() * 2 + 1).toFixed(2); // 1s to 3s
    const top = Math.random() * 100;
    const left = Math.random() * 100;

    return (
      <img
        key={index}
        src={isPurple ? colorstar : whiteStar}
        alt=""
        aria-hidden="true"
        role="img"
        className={`star ${isPurple ? "purple-star" : "white-star"}`}
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });

  return (
    <SlideUpWrapper>
    <section className="herosection-container container">
      <div className="herosection-stars">{stars}</div>

      <div className="herosection-content">
        <p className="herosection-subtitle">Welcome to McCarthy’s Game</p>
        <h1 className="herosection-title">
          Most People Just Scroll Past AI.
          <br />
          You’ll Compete With It.
        </h1>
        <p className="herosection-description">
          No lectures. No code. Just hands-on competitions, top tools, and real
          prizes — built for curious minds ready to play.
        </p>
        <div className="herosection-buttons">
          <button className="herosection-btn-outline">
            Watch Video
            <i className="bi bi-play-circle herosection-play-icon"></i>
          </button>
          <button className="herosection-btn-filled">Explore More</button>
        </div>
      </div>
    </section>
    </SlideUpWrapper>
  );
};

export default HeroSection;
