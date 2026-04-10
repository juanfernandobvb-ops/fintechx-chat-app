import { useNavigate } from "react-router-dom";

function HealthScreen() {
  const navigate = useNavigate();

  return (
    <div className="health-screen">
      {/* Header */}
      <header className="health-header">
        <button className="back-btn" aria-label="Back" onClick={() => navigate(-1)}>←</button>
        <span className="health-title">Health</span>
        <div className="health-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </header>

      {/* Main Content */}
      <main className="health-main">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          height: '100%',
          padding: '40px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '24px', marginBottom: '16px', color: '#23262f' }}>Health Dashboard</h1>
          <p style={{ fontSize: '16px', color: '#8e9295' }}>Tela de saúde/dashboard em desenvolvimento...</p>
        </div>
      </main>
    </div>
  );
}

export default HealthScreen;