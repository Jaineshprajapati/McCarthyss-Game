import React, { useEffect, useRef, useState } from 'react';
import './Gearuptools.css';
import signupImage from './assets/track_one_one.png';
import discoverImage from './assets/track_two_two.png';
import shareImage from './assets/track_two_three.png';

const steps = [
  {
    title: 'Sign Up & Dive In',
    description: 'Create your account and instantly access a curated AI tools database.',
    image: signupImage,
  },
  {
    title: 'Discover & Compare',
    description: 'Filter by use case, industry, or function. Compare features, pricing, and reviews to find what fits your workflow.',
    image: discoverImage,   
  },
  {
    title: 'Save, Test & Share',
    description: 'Build your list, save tools to your profile, and share your reviews with the community as you grow your AI arsenal.',
    image: shareImage,
  },
];

const Gearuptools = () => {
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
    <div className='gearup_container container'>
      <h1 className='gearup_title'>
      Track 2: AI Tools – “Gear Up With Tools”
      </h1>

      <div className="gearup_wrapper">
        <div className="gearup_scroll_container">
          {steps.map((step, index) => (
            <div
              key={index}
              className="gearup_step_scroll"
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <h2 className="gearup_step_title">{step.title}</h2>
              <p className="gearup_step_description">{step.description}</p>

              {index === steps.length - 1 && (
                <button className="gearup_cta_button">
                  Join a Challenge
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="gearup_image_container">
          <img
            src={steps[activeIndex].image}
            alt={`Step ${activeIndex + 1}: ${steps[activeIndex].title}`}
            className="gearup_image"
          />
        </div>
      </div>
    </div>
  );
};

export default Gearuptools;
