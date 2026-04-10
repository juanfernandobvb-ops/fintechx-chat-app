import { useNavigation } from '../../hooks/useNavigation';

function PreferencesScreen() {
  const { goBack, goToEditInformation, goToInviteFriends } = useNavigation();

  return (
    <div className="preferences-screen">
      {/* Header */}
      <header className="preferences-header">
        <button className="back-button" onClick={goBack} aria-label="Voltar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="preferences-title">Preference</h1>
        <div className="header-spacer"></div>
      </header>

      {/* Preferences List */}
      <div className="preferences-list">
        <PreferenceItem
          icon={<AccountIcon />}
          title="Account Information"
          subtitle="Change your Account Information"
          onClick={goToEditInformation}
        />

        <PreferenceItem
          icon={<PasswordIcon />}
          title="Password"
          subtitle="Change your Password"
          onClick={() => {}}
        />

        <PreferenceItem
          icon={<PaymentIcon />}
          title="Payment Methods"
          subtitle="Add Your Credit / Credit Cards"
          onClick={() => {}}
        />

        <PreferenceItem
          icon={<InviteIcon />}
          title="Invite Your Friends"
          subtitle="Get $3 For Each Invitation!"
          onClick={goToInviteFriends}
        />

        <PreferenceItem
          icon={<ThemeIcon />}
          title="Theme Colour"
          subtitle="Change Your Theme Colour"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

// Preference Item Component
interface PreferenceItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

function PreferenceItem({ icon, title, subtitle, onClick }: PreferenceItemProps) {
  return (
    <button className="preference-item" onClick={onClick}>
      <div className="preference-icon">{icon}</div>
      <div className="preference-content">
        <h3 className="preference-title">{title}</h3>
        <p className="preference-subtitle">{subtitle}</p>
      </div>
    </button>
  );
}

// Icon Components
function AccountIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function PasswordIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function PaymentIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 10h20" stroke="currentColor" strokeWidth="2"/>
      <path d="M6 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function InviteIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ThemeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export default PreferencesScreen;
