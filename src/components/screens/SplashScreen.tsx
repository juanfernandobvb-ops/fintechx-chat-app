import Logo from '../../assets/Logo.svg';
import { useNavigation } from '../../hooks/useNavigation';

function SplashScreen() {
  const { goToOnboarding } = useNavigation();

  return (
    <div className="splash-screen" onClick={goToOnboarding}>
      <div className="splash-logo">
        <img src={Logo} alt="BrainBox Logo" />
      </div>
      
      <div className="splash-footer">
        <h1 className="splash-title">BrainBox</h1>
        <p className="splash-version">Version10</p>
      </div>
    </div>
  );
}

export default SplashScreen;