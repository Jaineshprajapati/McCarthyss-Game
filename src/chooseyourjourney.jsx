import React from 'react';
import './chooseyourjourney.css';
import Battle from './assets/battle.svg';
import Boxing from './assets/boxing.png';
import Chatgpt from './assets/chatgpt.png';
import Toolss from './assets/tool.svg';


const ChooseYourJourney = () => {
  return (
    <div className="choose-your-journey-section">
      <div className="choose-your-journey-header">
        <h2 className="choose-your-journey-title">Choose Your Journey</h2>
        <p className="choose-your-journey-subtitle">
        Two paths. One mission. Will you rise through competition or power up with the tools to change the game?
        </p>
      </div>

      <div className="battle-card-container">
        {/* Card 1 */}
        <div className="battle-card">
          <div className="battle-content">
            <div className="battle-icon-wrapper">
              <img
                src={Battle}
                alt="Icon"
                className="battle-icon"
              />
            </div>
            <h2 className="battle-title">Begin Your Battle</h2>
            <p className="battle-description">
              Step into the arena where only the smartest rise. Compete, adapt, and conquer AI challenges.
            </p>
            <button className="join-button">Join Now</button>
          </div>
          <img
            src={Boxing}
            alt="Boxing Gloves"
            className="battle-image"
          />
        </div>

        {/* Card 2 */}
        <div className="battle-card">
          <div className="battle-content">
            <div className="battle-icon-wrapper">
              <img
                src={Toolss}
                alt="Icon"
                className="battle-icon"
              />
            </div>
            <h2 className="battle-title">Explore Knowledge</h2>
            <p className="battle-description">
              Discover curated content, lessons, and AI breakthroughs tailored to help you grow step by step.
            </p>
            <button className="join-button">Learn More</button>
          </div>
          <img
            src={Chatgpt}
            alt="Boxing Gloves"
            className="battle-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseYourJourney;
