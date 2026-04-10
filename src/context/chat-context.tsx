import { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { ChatState, ChatContextType, Message } from '../types';
import { createChatbotService } from '../services';
import { generateId } from '../utils';

// Criar instância única do chatbot service
const chatbotService = createChatbotService();

type ChatAction =
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'CLEAR_CHAT' };

const initialState: ChatState = {
  messages: [
    {
      id: generateId(),
      content: 'Olá! Sou o assistente virtual da FinTechX. Como posso ajudá-lo hoje? Posso esclarecer dúvidas sobre nossos serviços, horários, localização e muito mais!',
      role: 'assistant',
      timestamp: new Date(),
    }
  ],
  isLoading: false,
  error: null,
};

function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
        error: null,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case 'CLEAR_CHAT':
      return initialState;
    default:
      return state;
  }
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const sendMessage = async (content: string) => {
    const userMessage: Message = {
      id: generateId(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    dispatch({ type: 'ADD_MESSAGE', payload: userMessage });
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      const response = await chatbotService.sendMessage(content);

      const assistantMessage: Message = {
        id: generateId(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };

      dispatch({ type: 'ADD_MESSAGE', payload: assistantMessage });
    } catch {
      // Erro capturado - mostramos mensagem genérica ao usuário
      dispatch({ type: 'SET_ERROR', payload: 'Erro ao enviar mensagem. Tente novamente.' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const clearChat = () => {
    dispatch({ type: 'CLEAR_CHAT' });
  };

  return (
    <ChatContext.Provider value={{ state, sendMessage, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
}

// Hook para usar o ChatContext
// Nota: Fast Refresh warning é esperado (componente + hook no mesmo arquivo)
// mas não afeta funcionalidade em produção
export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat deve ser usado dentro de um ChatProvider');
  }
  return context;
}