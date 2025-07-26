import React, { useEffect, useRef, useState } from 'react';
import './Beginyourbattle.css';
import signupImage from './assets/track_one_one.png';
import joinImage from './assets/track_one_two.png';
import startImage from './assets/track_one_three.png';

const steps = [
  {
    title: 'Sign Up & Set Up',
    description: 'Create your account, set your preferences, and get ready to start your journey.',
    image: signupImage,
  },
  {
    title: 'Join a Challenge',
    description: 'Browse exciting challenges and pick the one that suits your interest.',
    image: joinImage,
  },
  {
    title: 'Start Competing',
    description: 'Engage with others, track your progress, and rise on the leaderboard.',
    image: startImage,
  },
];

const Beginyourbattle = () => {
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let minDiff = Infinity;
      let indexToActivate = 0;

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const diff = Math.abs(rect.top - window.innerHeight / 2);
          if (diff < minDiff) {
            minDiff = diff;
            indexToActivate = index;
          }
        }
      });

      setActiveIndex(indexToActivate);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className='beginbattle_container container'>
    <h1 className='beginbattle_title'>
    Track 1: AI Competitions – “Begin Your Battle”
    </h1>
    <div className="beginbattle_wrapper">
      <div className="beginbattle_image_container">
        <img
          src={steps[activeIndex].image}
          alt={steps[activeIndex].title}
          className="beginbattle_image"
        />
      </div>

      <div className="beginbattle_scroll_container">
        {steps.map((step, index) => (
          <div
            key={index}
            className="beginbattle_step_scroll"
            ref={(el) => (sectionRefs.current[index] = el)}
          >
            <h2 className="beginbattle_step_title">{step.title}</h2>
            <p className="beginbattle_step_description">{step.description}</p>

            {index === steps.length - 1 && (
      <button className="beginbattle_cta_button">
        Join a Challenge
      </button>
      )}

          </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Beginyourbattle;
