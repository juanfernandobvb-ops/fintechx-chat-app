import { useState } from 'react';
import { useNavigation } from '../../hooks/useNavigation';

function InviteFriendsScreen() {
  const { goBack } = useNavigation();
  const [promoCode] = useState('BrainAiPartnerMR');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="invite-friends-screen">
      {/* Header */}
      <header className="invite-header">
        <button className="back-button" onClick={goBack} aria-label="Voltar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="invite-title">invite Friends</h1>
        <div className="header-spacer"></div>
      </header>

      {/* Content */}
      <div className="invite-content">
        {/* Icon */}
        <div className="invite-icon-container">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            {/* Stars */}
            <path d="M60 20L63 28L71 25L68 33L76 36L68 39L71 47L63 44L60 52L57 44L49 47L52 39L44 36L52 33L49 25L57 28L60 20Z" fill="currentColor"/>
            <path d="M85 30L87 35L92 33L90 38L95 40L90 42L92 47L87 45L85 50L83 45L78 47L80 42L75 40L80 38L78 33L83 35L85 30Z" fill="currentColor"/>
            <path d="M35 30L37 35L42 33L40 38L45 40L40 42L42 47L37 45L35 50L33 45L28 47L30 42L25 40L30 38L28 33L33 35L35 30Z" fill="currentColor"/>
            
            {/* Box */}
            <path d="M30 50L60 35L90 50V90L60 105L30 90V50Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
            <path d="M30 50L60 65L90 50" stroke="currentColor" strokeWidth="2.5" fill="none"/>
            <path d="M60 65V105" stroke="currentColor" strokeWidth="2.5" fill="none"/>
          </svg>
        </div>

        {/* Text Content */}
        <div className="invite-text-content">
          <h2 className="invite-main-title">Refer A Friend</h2>
          <p className="invite-subtitle">
            Share Your Promo Code & Get $3<br />
            For Each Friend
          </p>
        </div>

        {/* Promo Code Field */}
        <div className="promo-code-container">
          <div className="promo-code-field">
            <span className="promo-code-text">{promoCode}</span>
            <button 
              className="copy-button" 
              onClick={handleCopyCode}
              aria-label="Copiar código"
            >
              {copied ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="2"/>
                </svg>
              )}
            </button>
          </div>
          {copied && <span className="copied-message">Código copiado!</span>}
        </div>
      </div>
    </div>
  );
}

export default InviteFriendsScreen;
