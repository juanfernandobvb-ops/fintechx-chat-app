import type { LLMProvider, LLMConfig, Message } from './LLMProvider';

export class GeminiProvider implements LLMProvider {
  private apiKey: string;
  private model: string;
  private apiUrl: string;

  constructor(config: LLMConfig) {
    this.apiKey = config.apiKey;
    this.model = config.model || 'gemini-pro';
    this.apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent`;
  }

  async sendMessage(message: string, conversationHistory?: Message[]): Promise<string> {
    try {
      const contents = this.buildContents(message, conversationHistory);

      const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
          },
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Gemini API Error: ${error.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) {
        throw new Error('No response from Gemini');
      }

      return text;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      throw error;
    }
  }

  async sendMessageWithContext(
    message: string,
    systemPrompt: string,
    conversationHistory?: Message[]
  ): Promise<string> {
    try {
      // Gemini não tem role "system", então incluímos no primeiro user message
      const contents = this.buildContentsWithSystem(message, systemPrompt, conversationHistory);

      console.log('Gemini API Request:', {
        url: `${this.apiUrl}?key=${this.apiKey.substring(0, 10)}...`,
        contentsLength: contents.length,
      });

      const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
          },
        }),
      });

      console.log('Gemini API Response Status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Gemini API Error Response:', errorText);
        throw new Error(`Gemini API Error ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('Gemini API Success:', {
        hasCandidates: !!data.candidates,
        candidatesLength: data.candidates?.length,
      });

      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) {
        console.error('No text in Gemini response:', data);
        throw new Error('No response from Gemini');
      }

      return text;
    } catch (error) {
      console.error('Error calling Gemini API with context:', error);
      throw error;
    }
  }

  private buildContents(message: string, conversationHistory?: Message[]) {
    const contents = [];

    // Adiciona histórico se existir
    if (conversationHistory && conversationHistory.length > 0) {
      conversationHistory.forEach((msg) => {
        if (msg.role !== 'system') {
          contents.push({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }],
          });
        }
      });
    }

    // Adiciona mensagem atual
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    return contents;
  }

  private buildContentsWithSystem(
    message: string,
    systemPrompt: string,
    conversationHistory?: Message[]
  ) {
    const contents = [];

    // Se houver histórico, incluímos ele primeiro
    if (conversationHistory && conversationHistory.length > 0) {
      conversationHistory.forEach((msg) => {
        contents.push({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.content }],
        });
      });
    }

    // Incluir system prompt na mensagem  atual
    const messageWithContext = conversationHistory && conversationHistory.length > 0
      ? message // Se já tem histórico, não precisa repetir o system prompt
      : `${systemPrompt}\n\nPergunta do usuário: ${message}`;
    
    contents.push({
      role: 'user',
      parts: [{ text: messageWithContext }],
    });

    return contents;
  }
}
