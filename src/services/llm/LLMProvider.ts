// Interface abstrata para provedores de LLM
export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface LLMProvider {
  sendMessage(message: string, conversationHistory?: Message[]): Promise<string>;
  sendMessageWithContext(message: string, systemPrompt: string, conversationHistory?: Message[]): Promise<string>;
}

export interface LLMConfig {
  apiKey: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
}
