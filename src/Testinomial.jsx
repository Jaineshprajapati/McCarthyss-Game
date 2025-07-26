import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import steve from './assets/user.png';

const testimonials = [
  [
    {
      name: 'Steve.macor',
      handle: '@steav.mac',
      message:
        '“McCarthy’s Game pushed me out of my comfort zone. Every challenge taught me something new about AI strategy—and myself.”',
      time: '2d ago',
    },
    {
      name: 'Anna_K',
      handle: '@anna.k',
      message:
        '“Never thought learning AI could be this engaging. Big thanks to the McCarthy program!”',
      time: '5d ago',
    },
    {
      name: 'JamesW',
      handle: '@jamesw',
      message:
        '“It’s the perfect mix of challenge and fun. Highly recommend to anyone curious about AI.”',
      time: '1w ago',
    },
  ],
  [
    {
      name: 'Lina',
      handle: '@lina_123',
      message:
        '“The design and flow of the learning path is just brilliant. Super intuitive.”',
      time: '3d ago',
    },
    {
      name: 'MohitG',
      handle: '@mohitg',
      message:
        '“I completed all challenges in a week. Addicted to learning now!”',
      time: '4d ago',
    },
    {
      name: 'Carla M',
      handle: '@carla_m',
      message:
        '“Every day brought something new. This course really raised the bar!”',
      time: '6d ago',
    },
  ],
  [
    {
      name: 'Danny',
      handle: '@dannyd',
      message:
        '“Nothing beats the feeling of cracking a challenge late at night. Loved every second.”',
      time: '2d ago',
    },
    {
      name: 'SaraTech',
      handle: '@sara_tech',
      message:
        '“The interface is slick, and the feedback after each task helped me improve.”',
      time: '1d ago',
    },
    {
      name: 'Ravi K',
      handle: '@ravi_k',
      message:
        '“Finished the program. Waiting for the next one already!”',
      time: '7d ago',
    },
  ],
];

const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="testimonial-section container">
      <div className="testimonial-header">
        <h2 className="testimonial-title">Testimonials</h2>
        <p className="testimonial-subtitle">
          What our users say about McCarthy’s Game
        </p>
      </div>
      <div className="testimonial_section">
        <div className="testimonial_gradient-top" />
        <div className="testimonial_gradient-bottom" />
        {(isMobile ? [testimonials[0]] : testimonials).map((column, colIndex) => (
          <div
            className={`testimonial_column ${
              colIndex === 1 ? 'testimonial_marquee-down' : 'testimonial_marquee-up'
            }`}
            key={colIndex}
          >
            <div className="testimonial_marquee_content">
              {[...column, ...column].map((item, index) => (
                <div className="testimonial_card_border" key={index}>
                  <div className="testimonial_card_wrapper">
                    <div className="testimonial_card_top">
                      <img
                        src={steve}
                        alt={`Profile of ${item.name}`}
                        className="testimonial_card_image"
                      />
                      <div className="testimonial_card_user">
                        <div className="testimonial_card_name">{item.name}</div>
                        <div className="testimonial_card_id">{item.handle}</div>
                      </div>
                    </div>
                    <div className="testimonial_card_message">{item.message}</div>
                    <div className="testimonial_card_time">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
