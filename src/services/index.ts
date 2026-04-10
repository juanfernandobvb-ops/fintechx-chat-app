// LLM Providers
export * from './llm/LLMProvider';
export * from './llm/GeminiProvider';

// FAQ Service
export * from './faq/FAQService';

// Chatbot Service
export * from './chatbot/ChatbotService';

// Factory para criar instância do chatbot
import { GeminiProvider } from './llm/GeminiProvider';
import { ChatbotService } from './chatbot/ChatbotService';

export function createChatbotService(): ChatbotService {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    console.warn('VITE_GEMINI_API_KEY não encontrada. O chatbot funcionará apenas com FAQ.');
  }

  const geminiProvider = new GeminiProvider({
    apiKey: apiKey || '',
    model: import.meta.env.VITE_GEMINI_MODEL || 'gemini-pro',
  });

  return new ChatbotService(geminiProvider);
}
