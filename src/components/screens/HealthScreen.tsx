import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/user-context";
import CustomerSupportModal from "../ui/CustomerSupportModal";

interface QuickAction {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  route?: string;
  action?: string;
  featured?: boolean;
}

function HealthScreen() {
  const navigate = useNavigate();
  const { userData } = useUser();
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  // Pega primeiro nome para saudação
  const firstName = userData.fullName.split(' ')[0];

  const handleActionClick = (action: QuickAction) => {
    if (action.action === "modal") {
      setIsSupportModalOpen(true);
    } else if (action.route) {
      navigate(action.route);
    }
  };

  const quickActions = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Iniciar Conversa",
      description: "Chat com IA 24/7",
      color: "#4F46E5",
      route: "/chat",
      featured: true
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Meu Perfil",
      description: "Ver e editar dados",
      color: "#10B981",
      route: "/profile"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Preferências",
      description: "Configurações do app",
      color: "#F59E0B",
      route: "/preferences"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Suporte",
      description: "Fale conosco",
      color: "#8B5CF6",
      action: "modal" // Abre modal de suporte
    }
  ];

  return (
    <div className="health-screen">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-greeting">
          <h1 className="greeting-title">Olá, {firstName}! 👋</h1>
          <p className="greeting-subtitle">Como podemos ajudar você hoje?</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Featured Card - Iniciar Conversa */}
        <button 
          className="featured-card"
          onClick={() => handleActionClick(quickActions[0])}
        >
          <div className="featured-icon" style={{ backgroundColor: quickActions[0].color }}>
            {quickActions[0].icon}
          </div>
          <div className="featured-content">
            <h2 className="featured-title">{quickActions[0].title}</h2>
            <p className="featured-description">{quickActions[0].description}</p>
          </div>
          <div className="featured-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>

        {/* Quick Actions Grid */}
        <div className="dashboard-section">
          <h3 className="section-title">Acesso Rápido</h3>
          <div className="quick-actions-grid">
            {quickActions.slice(1).map((action, index) => (
              <button
                key={index}
                className="quick-action-card"
                onClick={() => handleActionClick(action)}
              >
                <div className="action-icon" style={{ backgroundColor: `${action.color}15`, color: action.color }}>
                  {action.icon}
                </div>
                <h4 className="action-title">{action.title}</h4>
                <p className="action-description">{action.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div className="dashboard-info-card">
          <div className="info-icon">💡</div>
          <div className="info-content">
            <h4 className="info-title">Dica do dia</h4>
            <p className="info-text">
              Use o chat para perguntas rápidas sobre a FinTechX. Nosso assistente está sempre disponível!
            </p>
          </div>
        </div>
      </main>

      {/* Customer Support Modal */}
      <CustomerSupportModal 
        isOpen={isSupportModalOpen} 
        onClose={() => setIsSupportModalOpen(false)} 
      />
    </div>
  );
}

export default HealthScreen;