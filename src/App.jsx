import Navbar from './Navbar';
import HeroSection from './Herosection';
import ChooseYourJourney from './chooseyourjourney';
import HowItWorks from './howitworks';
import Beginyourbattle from './Beginyourbattle';
import Gearuptools from './Gearuptools';
import ClimbSlider from './Climbslider';
import Testimonial from './Testinomial';
import Cta from './Cta';
import Footer from './Footer';
import SlideUpWrapper from './SlideUpWrapper';
// Example: src/App.jsx
function App() {
  return (
    <>
      <Navbar />
      <div className="home-wrapper">
      <div className="background-glow" />
      <HeroSection />
      <ChooseYourJourney />
      </div>
      <HowItWorks />
      <Beginyourbattle />
      <Gearuptools />
      <ClimbSlider />
      <Testimonial />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
