// import RobotBlur from "../../assets/Rectangle 3537.svg";
import RobotImage from "../../assets/Rectangle 3538.svg";
import { useNavigation } from "../../hooks/useNavigation";

function OnboardingScreen() {
  const { goToHealth } = useNavigation(); // Assumindo que vai para Home após onboarding

  return (
    <div className="onboarding-screen">
      <header className="onboarding-header">
        <span className="skip-text" onClick={goToHealth}>
          Skip
        </span>
      </header>

      <div className="robot-section">
        <img src={RobotImage} alt="Future AI Robot" className="robot-image" />
        {/* <img src={RobotBlur} alt="Blur Effect" className="robot-blur" /> */}
        <div className="robot-blur"></div>
      </div>

      <div className="slide-indicators">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="content-section">
        <h1 className="onboarding-title">Unlock the Power Of Future AI</h1>
        <p className="onboarding-subtitle">
          Chat with the smartest AI Future Experience power of AI with us
        </p>

        <div className="navigation-container">
          <div className="navigation-controls">
            <button className="nav-btn prev" disabled>
              <span>←</span>
            </button>
            <button className="nav-btn next" onClick={goToHealth}>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingScreen;
