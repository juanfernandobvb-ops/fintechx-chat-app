import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatbotAvatar from "../../assets/chatbot.svg";
import UserAvatar from "../../assets/user.svg";
import { createChatbotService } from "../../services";

interface ChatMessage {
  id: number;
  type: "user" | "ai";
  text: string;
  avatar: string;
}

function ChatScreen() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [chatStarted, setChatStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatbotService = useMemo(() => createChatbotService(), []);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll para última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleQuestionClick = useCallback(async (question: string) => {
    setChatStarted(true);
    setIsLoading(true);

    // Adiciona mensagem do usuário
    const userMessage: ChatMessage = {
      id: Date.now(),
      type: "user",
      text: question,
      avatar: UserAvatar,
    };
    setMessages([userMessage]);

    try {
      // Chama o chatbot service
      const aiResponse = await chatbotService.sendMessage(question);

      // Adiciona resposta da IA
      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        type: "ai",
        text: aiResponse,
        avatar: ChatbotAvatar,
      };
      setMessages((msgs) => [...msgs, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: ChatMessage = {
        id: Date.now() + 1,
        type: "ai",
        text: "Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente.",
        avatar: ChatbotAvatar,
      };
      setMessages((msgs) => [...msgs, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [chatbotService]);

  const handleSend = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      type: "user",
      text: input,
      avatar: UserAvatar,
    };

    setMessages((msgs) => [...msgs, userMessage]);
    setInput("");
    setChatStarted(true);
    setIsLoading(true);

    try {
      const aiResponse = await chatbotService.sendMessage(input);

      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        type: "ai",
        text: aiResponse,
        avatar: ChatbotAvatar,
      };
      setMessages((msgs) => [...msgs, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: ChatMessage = {
        id: Date.now() + 1,
        type: "ai",
        text: "Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente.",
        avatar: ChatbotAvatar,
      };
      setMessages((msgs) => [...msgs, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, chatbotService]);

  return (
    <div className="health-screen">
      {/* Header */}
      <header className="health-header">
        <button className="back-btn" aria-label="Back" onClick={() => navigate(-1)}>←</button>
        <span className="health-title">Chat</span>
        <div className="health-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </header>

      {/* Main Content */}
      <main className="health-main">
        {!chatStarted ? (
          <>
            <h1 className="brainbox-title">BrainBox</h1>
            <div className="health-cards">
              <button 
                className="health-card" 
                onClick={() => handleQuestionClick("Quais são os horários de atendimento da FinTechX?")}
              >
                Quais são os horários de atendimento da FinTechX?
              </button>
              <button 
                className="health-card" 
                onClick={() => handleQuestionClick("Onde estão localizados os escritórios da FinTechX?")}
              >
                Onde estão localizados os escritórios da FinTechX?
              </button>
              <button 
                className="health-card" 
                onClick={() => handleQuestionClick("Quem fundou a FinTechX e quando?")}
              >
                Quem fundou a FinTechX e quando?
              </button>
              <button 
                className="health-card" 
                onClick={() => handleQuestionClick("Como a FinTechX protege as minhas informações pessoais?")}
              >
                Como a FinTechX protege as minhas informações pessoais?
              </button>
              <button 
                className="health-card" 
                onClick={() => handleQuestionClick("Recebi um e-mail suspeito da FinTechX, o que devo fazer?")}
              >
                Recebi um e-mail suspeito da FinTechX, o que devo fazer?
              </button>
              <button 
                className="health-card" 
                onClick={() => handleQuestionClick("Como posso aprender mais sobre investimentos e poupança?")}
              >
                Como posso aprender mais sobre investimentos e poupança?
              </button>
              <button 
                className="health-card" 
                onClick={() => handleQuestionClick("Como posso me inscrever para receber promoções e descontos?")}
              >
                Como posso me inscrever para receber promoções e descontos?
              </button>
            </div>
          </>
        ) : (
          <div className="chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-message ${msg.type}`}
              >
                <img
                  className="chat-avatar"
                  src={msg.avatar}
                  alt={msg.type === "user" ? "User" : "AI"}
                />
                <div className="chat-bubble">
                  <div className="chat-text">{msg.text}</div>
                  <div className="chat-actions">
                    <button className="chat-action-btn" title="Copiar">📋</button>
                    <button className="chat-action-btn" title="Compartilhar">🔗</button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="chat-message ai">
                <img className="chat-avatar" src={ChatbotAvatar} alt="AI" />
                <div className="chat-bubble">
                  <div className="chat-text">Digitando...</div>
                </div>
              </div>
            )}
            
            {/* Auto-scroll ref */}
            <div ref={messagesEndRef} />
            
            <div className="chat-regen-container">
              <button className="chat-regen-btn">Regenerate Response</button>
            </div>
          </div>
        )}
      </main>

      {/* Footer Input */}
      <footer className="health-footer">
        <div className="health-input-container">
          <input
            className="health-input"
            placeholder="Send a message."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !isLoading && handleSend()}
            disabled={isLoading}
          />
          <button
            className="health-send-btn"
            aria-label="Send"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 11H18" stroke="#B1B5C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L18 11L12 17" stroke="#B1B5C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default ChatScreen;