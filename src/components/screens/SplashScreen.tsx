import { useEffect, useState } from 'react';
import Logo from '../../assets/Logo.svg';
import { useNavigation } from '../../hooks/useNavigation';

function SplashScreen() {
  const { goToOnboarding } = useNavigation();
  const [progress, setProgress] = useState(0);
  const LOADING_TIME = 2000; // 2 segundos

  useEffect(() => {
    // Incrementar progresso gradualmente
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2; // Incrementa 2% a cada ~40ms (100 / 2 * 40 ≈ 2000ms)
      });
    }, 40);

    // Navegar automaticamente após 2 segundos
    const navigationTimer = setTimeout(() => {
      goToOnboarding();
    }, LOADING_TIME);

    // Cleanup ao desmontar componente
    return () => {
      clearInterval(progressInterval);
      clearTimeout(navigationTimer);
    };
  }, [goToOnboarding]);

  return (
    <div className="splash-screen" onClick={goToOnboarding}>
      <div className="splash-logo">
        <img src={Logo} alt="BrainBox Logo" />
      </div>
      
      <div className="splash-footer">
        <h1 className="splash-title">BrainBox</h1>
        <p className="splash-version">Version10</p>
        
        {/* Barra de Loading */}
        <div className="splash-loading">
          <div className="loading-bar-container">
            <div 
              className="loading-bar-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="loading-text">Carregando...</p>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;