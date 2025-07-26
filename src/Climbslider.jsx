import React, { useRef, useState, useEffect, useCallback } from 'react';
import './Climbslider.css';
import ClimbImage from './assets/climb.svg';
import StarIcon from './assets/colorstar.svg';

const ClimbSlider = () => {
  const sliderTrackRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  
  const slides = [
    {
      title: 'Compete, Grow, and Dominate',
      features: [
        {
          title: 'Compete in Evolving AI Battles',
          description: 'Face off in dynamic challenges built to test your mind, reflexes, and strategy.',
          icon: StarIcon,
        },
        {
          title: 'Sharpen Your Edge',
          description: 'Every match pushes your skills further - level up your AI skills with every win or loss.',
          icon: StarIcon,
        },
        {
          title: 'Win Big, Rise Fast',
          description: 'Earn badges, make your mark, and claim real rewards that prove your dominance.',
          icon: StarIcon,
        },
        {
          title: 'Test Tools in Battle',
          description: 'Get hands-on with powerful AI tools inside live competitive environments.',
          icon: StarIcon,
        },
      ],
    },
    {
      title: 'Train, Learn, and Grow',
      features: [
        {
          title: 'Explore Training Modules',
          description: 'Master AI fundamentals and strategies with in-depth training programs.',
        },
        {
          title: 'Track Progress',
          description: 'Monitor your growth, achievements, and milestones in real-time.',
        },
        {
          title: 'Join Community',
          description: 'Engage with experts and peers to expand your knowledge and network.',
        },
        {
          title: 'Level Up',
          description: 'Unlock new ranks and exclusive content as you climb the leaderboard.',
        },
      ],
    },
  ];

  const updateSlideWidth = useCallback(() => {
    if (sliderTrackRef.current) {
      const width = sliderTrackRef.current.querySelector('.climbslider_slide').offsetWidth;
      setSlideWidth(width);
    }
  }, []);

  useEffect(() => {
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    return () => window.removeEventListener('resize', updateSlideWidth);
  }, [updateSlideWidth]);

  const updateSlider = useCallback((index) => {
    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
      setCurrentSlide(index);
    }
  }, [slideWidth]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      updateSlider(currentSlide + 1);
    }
  }, [currentSlide, updateSlider, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      updateSlider(currentSlide - 1);
    }
  }, [currentSlide, updateSlider]);

  return (
    <section className="climbslider_section container" aria-label="Feature Slider">
      <div className="climbslider_header">
        <h2 className="climbslider_title">Why Join McCarthy’s Game?</h2>
        <p className="climbslider_subtitle">
        Whether you’re here to dominate in challenges or build your ultimate AI toolkit - McCarthy’s Game gives you the edge to rise, learn, and lead in the AI era.
        </p>
      </div>
      <div className="climbslider_wrapper container">
        <div className="climbslider_track" ref={sliderTrackRef} role="region" aria-live="polite">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`climbslider_slide ${currentSlide === index ? 'active' : ''}`}
              aria-hidden={currentSlide !== index}
            >
              <div className="climbslider_content">
                <div className="climbslider_left">
                  <h2 className="climbslider_main_title">{slide.title}</h2>
                  <div className="climbslider_features">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="climbslider_feature">
                        <img src={feature.icon} alt="" className="climbslider_icon" aria-hidden="true" />
                        <div>
                          <h3>{feature.title}</h3>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="climbslider_right">
                  <img src={ClimbImage} alt={`${slide.title} visual`} loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="climbslider_controls">
        <button
          onClick={prevSlide}
          className="climbslider_btn"
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          <div className="climbslider_circle dark">
            <i className="bi bi-arrow-left"></i>
          </div>
        </button>
        <button
          onClick={nextSlide}
          className="climbslider_btn"
          disabled={currentSlide === slides.length - 1}
          aria-label="Next slide"
        >
          <div className="climbslider_circle dark">
            <i className="bi bi-arrow-right"></i>
          </div>
        </button>
      </div>
    </section>
  );
};

export default ClimbSlider;