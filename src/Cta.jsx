import React from 'react';
import './Cta.css';

const Cta = () => {
  return (
    <div className="cta_section_wrapper">
      {/* Glow Effects */}
      <div className="cta_section_glow cta_glow_left"></div>
      <div className="cta_section_glow cta_glow_right"></div>

      {/* Stars */}
      <div className="cta_section_star cta_star_top_left">✦</div>
      <div className="cta_section_star cta_star_top_right">✦</div>
      <div className="cta_section_star cta_star_bottom_right">✦</div>

      {/* Content */}
      <div className="cta_section_content">
        <p className="cta_section_heading">
          Whether you’re here to compete, build, or both, McCarthy’s Game is where the next generation of AI minds rise.
        </p>
        <button className="cta_section_button">Join Now</button>
      </div>
    </div>
  );
};

export default Cta;
