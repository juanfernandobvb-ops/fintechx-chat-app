import { useState } from 'react';
import CarrosselUm from "../../assets/carrossel-um.png";
import CarrosselDois from "../../assets/carrossel-dois.png";
import RobotImage from "../../assets/Rectangle 3538.svg";
import { useNavigation } from "../../hooks/useNavigation";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: CarrosselUm,
    title: "Unlock the Power Of Future AI",
    subtitle: "Chat with the smartest AI Future Experience power of AI with us"
  },
  {
    image: CarrosselDois,
    title: "Smart Conversations Anytime",
    subtitle: "Get instant answers and personalized assistance 24/7 with our advanced AI"
  },
  {
    image: RobotImage,
    title: "Your Financial Assistant",
    subtitle: "Manage your finances intelligently with AI-powered insights and recommendations"
  }
];

function OnboardingScreen() {
  const { goToHealth } = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      goToHealth();
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="onboarding-screen">
      {/* Header com Skip */}
      <div className="onboarding-header">
        <span className="skip-text" onClick={goToHealth}>Skip</span>
      </div>

      {/* Imagem */}
      <div className="onboarding-image-container">
        <img src={currentSlideData.image} alt="Onboarding" className="onboarding-image" />
      </div>

      {/* Dots */}
      <div className="onboarding-dots">
        {slides.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      {/* Texto */}
      <div className="onboarding-text">
        <h1 className="onboarding-title">{currentSlideData.title}</h1>
        <p className="onboarding-subtitle">{currentSlideData.subtitle}</p>
      </div>

      {/* Navegação */}
      <div className="onboarding-navigation">
        <button 
          className="nav-btn prev" 
          disabled={currentSlide === 0}
          onClick={handlePrevious}
        >
          ←
        </button>
        <button 
          className="nav-btn next" 
          onClick={handleNext}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default OnboardingScreen;
