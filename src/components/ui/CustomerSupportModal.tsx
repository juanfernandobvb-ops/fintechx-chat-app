import Modal from './Modal';

interface CustomerSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CustomerSupportModal({ isOpen, onClose }: CustomerSupportModalProps) {
  const supportInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Chat no App',
      description: 'Disponível 24/7',
      action: 'Ir para Chat',
      link: '/chat',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'E-mail',
      description: 'contato@fintechx.com.br',
      action: 'Enviar e-mail',
      link: 'mailto:contato@fintechx.com.br',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'SAC',
      description: '0800 123 4567',
      subtitle: 'Seg-Sex, 9h-18h',
      action: 'Ligar',
      link: 'tel:08001234567',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'WhatsApp',
      description: '(11) 91234-5678',
      action: 'Abrir WhatsApp',
      link: 'https://wa.me/5511912345678',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Nosso Escritório',
      description: 'Av. Paulista, 1000',
      subtitle: 'São Paulo - SP',
      action: 'Ver no mapa',
      link: 'https://maps.google.com/?q=Av.+Paulista+1000+São+Paulo',
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Customer Support">
      <div className="support-modal-content">
        <p className="support-intro">
          Estamos aqui para ajudar! Entre em contato conosco através de qualquer um dos canais abaixo:
        </p>

        <div className="support-list">
          {supportInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : undefined}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="support-item"
            >
              <div className="support-icon">{item.icon}</div>
              <div className="support-details">
                <h3 className="support-title">{item.title}</h3>
                <p className="support-description">{item.description}</p>
                {item.subtitle && <p className="support-subtitle">{item.subtitle}</p>}
              </div>
              <div className="support-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default CustomerSupportModal;
