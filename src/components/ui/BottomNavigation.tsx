import { useLocation } from 'react-router-dom';
import { useNavigation } from '../../hooks/useNavigation';

function BottomNavigation() {
  const location = useLocation();
  const { goToChat, goToHealth, goToProfile } = useNavigation();

  // Determina qual tab está ativa baseado na rota atual
  const getActiveTab = (): string => {
    const path = location.pathname;
    if (path === '/chat') return 'home';
    if (path === '/health') return 'explore';
    if (path === '/profile') return 'profile';
    return '';
  };

  const activeTab = getActiveTab();

  // Não mostrar em telas de splash/onboarding/preferences/edit-information/invite-friends
  const hiddenRoutes = ['/', '/onboarding', '/preferences', '/edit-information', '/invite-friends'];
  if (hiddenRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <nav className="bottom-navigation">
      <button 
        className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`}
        onClick={goToChat}
        aria-label="Chat"
        title="Chat"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path 
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill={activeTab === 'home' ? 'currentColor' : 'none'}
          />
        </svg>
        {activeTab === 'home' && <span className="active-indicator"></span>}
      </button>

      <button 
        className={`nav-tab ${activeTab === 'explore' ? 'active' : ''}`}
        onClick={goToHealth}
        aria-label="Health"
        title="Health"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect 
            x="3" 
            y="3" 
            width="7" 
            height="7" 
            stroke="currentColor" 
            strokeWidth="2"
            fill={activeTab === 'explore' ? 'currentColor' : 'none'}
          />
          <rect 
            x="14" 
            y="3" 
            width="7" 
            height="7" 
            stroke="currentColor" 
            strokeWidth="2"
            fill={activeTab === 'explore' ? 'currentColor' : 'none'}
          />
          <rect 
            x="3" 
            y="14" 
            width="7" 
            height="7" 
            stroke="currentColor" 
            strokeWidth="2"
            fill={activeTab === 'explore' ? 'currentColor' : 'none'}
          />
          <rect 
            x="14" 
            y="14" 
            width="7" 
            height="7" 
            stroke="currentColor" 
            strokeWidth="2"
            fill={activeTab === 'explore' ? 'currentColor' : 'none'}
          />
        </svg>
        {activeTab === 'explore' && <span className="active-indicator"></span>}
      </button>

      <button 
        className={`nav-tab ${activeTab === 'history' ? 'active' : ''}`}
        aria-label="History"
        title="History (Em breve)"
        disabled
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <button 
        className={`nav-tab ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={goToProfile}
        aria-label="Profile"
        title="Profile"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="2"
            fill={activeTab === 'profile' ? 'currentColor' : 'none'}
          />
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
          <path 
            d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
        {activeTab === 'profile' && <span className="active-indicator"></span>}
      </button>
    </nav>
  );
}

export default BottomNavigation;
