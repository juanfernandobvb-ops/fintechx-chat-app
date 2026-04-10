export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface FinTechInfo {
  businessHours: string;
  locations: string[];
  founders: string;
  foundedYear: number;
  securityInfo: string;
  investmentTips: string[];
  promotions: string;
}

export interface ChatContextType {
  state: ChatState;
  sendMessage: (content: string) => Promise<void>;
  clearChat: () => void;
}