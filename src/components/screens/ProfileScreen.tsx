import { useState } from 'react';
import { useNavigation } from '../../hooks/useNavigation';
import { useUser } from '../../context/user-context';
import CustomerSupportModal from '../ui/CustomerSupportModal';
import UserAvatar from '../../assets/user.svg';

function ProfileScreen() {
  const { goToChat, goToSplash, goToPreferences } = useNavigation();
  const { userData } = useUser();
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  const handleLogout = () => {
    // Logout: redireciona para a tela inicial
    console.log('Logout clicked - Redirecionando para Splash Screen');
    goToSplash();
  };

  const handleSupportClick = () => {
    setIsSupportModalOpen(true);
  };

  return (
    <div className="profile-screen">
      {/* Header */}
      <header className="profile-header">
        <button className="back-button" onClick={goToChat} aria-label="Voltar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="profile-title">Profile</h1>
        <div className="header-spacer"></div>
      </header>

      {/* User Info Section */}
      <div className="profile-user-section">
        <div className="profile-avatar-container">
          <img src={UserAvatar} alt="User Avatar" className="profile-avatar" />
          <span className="status-indicator"></span>
        </div>
        <h2 className="profile-username">{userData.fullName}</h2>
        <p className="profile-email">{userData.email}</p>
      </div>

      {/* Menu Options */}
      <div className="profile-menu">
        <MenuItem
          icon={<PreferencesIcon />}
          title="Preferences"
          hasArrow
          onClick={goToPreferences}
        />

        <MenuItem
          icon={<SecurityIcon />}
          title="Account Security"
          hasArrow
          showSecurityLevel
          onClick={() => console.log('Account Security clicked')}
        />

        <MenuItem
          icon={<SupportIcon />}
          title="Customer Support"
          hasArrow
          onClick={handleSupportClick}
        />

        <MenuItem
          icon={<LogoutIcon />}
          title="Logout"
          onClick={handleLogout}
        />
      </div>

      {/* Customer Support Modal */}
      <CustomerSupportModal 
        isOpen={isSupportModalOpen} 
        onClose={() => setIsSupportModalOpen(false)} 
      />
    </div>
  );
}

// Menu Item Component
interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  hasArrow?: boolean;
  showSecurityLevel?: boolean;
  onClick?: () => void;
}

function MenuItem({ icon, title, hasArrow, showSecurityLevel, onClick }: MenuItemProps) {
  return (
    <button className="menu-item" onClick={onClick}>
      <div className="menu-item-left">
        <span className="menu-icon">{icon}</span>
        <div className="menu-content">
          <span className="menu-title">{title}</span>
          {showSecurityLevel && (
            <div className="security-level">
              <div className="security-bar">
                <div className="security-progress" style={{ width: '75%' }}></div>
              </div>
              <span className="security-label">Excellent</span>
            </div>
          )}
        </div>
      </div>
      {hasArrow && (
        <svg className="menu-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}

// Icon Components
function PreferencesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="currentColor"/>
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <polyline points="16 17 21 12 16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export default ProfileScreen;