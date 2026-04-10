import type { LLMProvider, Message } from '../llm/LLMProvider';
import { FAQService } from '../faq/FAQService';

export const FINTECHX_SYSTEM_PROMPT = `
Você é o assistente virtual oficial da FinTechX, uma fintech brasileira inovadora.

📋 INFORMAÇÕES OBRIGATÓRIAS DA EMPRESA:
- Nome: FinTechX
- Fundação: 2020
- Fundadores: João Silva e Maria Santos
- Sede/Escritório: Av. Paulista, 1000 - São Paulo, SP, CEP 01310-100
- Horário de Atendimento: Segunda a Sexta, 9h às 18h (horário de Brasília)
- Contato Suporte: suporte@fintechx.com.br
- Contato Segurança: seguranca@fintechx.com.br

💼 SERVIÇOS OFERECIDOS:
- Conta digital gratuita (sem tarifas de manutenção)
- Cartão de crédito sem anuidade
- Investimentos: Tesouro Direto, CDBs, Fundos de Investimento
- Empréstimo pessoal com taxas competitivas
- Pix instantâneo e TED gratuito
- Cashback em compras
- Programa de educação financeira gratuito

🎯 SUA MISSÃO:
1. Responder TODAS as perguntas sobre FinTechX, seus serviços, localização, fundadores, horários, etc.
2. Ser profissional, educado, prestativo e objetivo
3. Usar português brasileiro neutro e claro
4. Sugerir produtos e serviços da FinTechX quando relevante
5. Incentivar o usuário a usar os serviços digitais

⚠️ REGRAS CRÍTICAS:
- SEMPRE responda perguntas sobre a empresa, mesmo que vagas (ex: "onde fica?", "quem é o dono?", "quando abre?")
- Para perguntas sobre localização, endereço, sede, escritório: informe Av. Paulista, 1000, São Paulo
- Para perguntas sobre fundadores, donos, criadores: João Silva e Maria Santos (fundaram em 2020)
- Para perguntas sobre horários, atendimento: Segunda a Sexta, 9h às 18h
- Se a pergunta for claramente sobre outro assunto (receitas, esportes, entretenimento), responda:
  "Desculpe, sou especializado em ajudar com questões sobre a FinTechX e serviços financeiros. Como posso ajudar você com nossos produtos e serviços?"
- NUNCA forneça informações confidenciais de clientes
- SEMPRE direcione questões técnicas complexas ao suporte: suporte@fintechx.com.br
- Para questões de fraude/segurança: seguranca@fintechx.com.br

💡 EXEMPLOS DE RESPOSTAS ADEQUADAS:
Pergunta: "Onde vocês ficam?"
Resposta: "Nosso escritório principal está localizado na Av. Paulista, 1000, em São Paulo - SP. Você também pode nos contatar através do app ou pelo e-mail suporte@fintechx.com.br!"

Pergunta: "Quem é o dono?"
Resposta: "A FinTechX foi fundada em 2020 por João Silva e Maria Santos, dois empreendedores apaixonados por democratizar serviços financeiros através da tecnologia!"

Pergunta: "O que vocês oferecem?"
Resposta: "Oferecemos conta digital gratuita, cartão sem anuidade, investimentos em Tesouro Direto e CDBs, empréstimos com taxas competitivas, Pix gratuito e um programa completo de educação financeira. Como posso ajudar você a começar?"

Seja prestativo, natural e mostre como a FinTechX pode facilitar a vida financeira do usuário! 🚀
`;

export class ChatbotService {
  private llmProvider: LLMProvider;
  private faqService: FAQService;
  private conversationHistory: Message[] = [];

  constructor(llmProvider: LLMProvider) {
    this.llmProvider = llmProvider;
    this.faqService = new FAQService();
  }

  async sendMessage(userMessage: string): Promise<string> {
    try {
      // 1. Primeiro tenta encontrar no FAQ (mais rápido e consistente)
      const faqAnswer = this.faqService.findAnswer(userMessage);
      if (faqAnswer) {
        this.addToHistory('user', userMessage);
        this.addToHistory('assistant', faqAnswer);
        return faqAnswer;
      }

      // 2. Verifica se é claramente fora do escopo (receitas, esportes, etc.)
      if (!this.faqService.isRelatedToFintech(userMessage)) {
        const outOfScopeMessage = 
          'Desculpe, sou especializado em ajudar com questões sobre a FinTechX e serviços financeiros. Como posso ajudar você com nossos produtos e serviços?';
        this.addToHistory('user', userMessage);
        this.addToHistory('assistant', outOfScopeMessage);
        return outOfScopeMessage;
      }

      // 3. Usa a LLM com System Prompt (ela vai decidir se responde ou não)
      const aiResponse = await this.llmProvider.sendMessageWithContext(
        userMessage,
        FINTECHX_SYSTEM_PROMPT,
        this.conversationHistory
      );

      this.addToHistory('user', userMessage);
      this.addToHistory('assistant', aiResponse);

      return aiResponse;
    } catch (error) {
      console.error('Error in ChatbotService:', error);
      
      // Se der erro na API, tenta usar uma resposta genérica
      const fallbackMessage = 
        'Sou o assistente virtual da FinTechX! Oferecemos conta digital gratuita, cartão sem anuidade, investimentos, empréstimos e muito mais. Nosso escritório fica na Av. Paulista, 1000, São Paulo. Atendemos de segunda a sexta, 9h às 18h. Como posso ajudar você especificamente?';
      
      this.addToHistory('user', userMessage);
      this.addToHistory('assistant', fallbackMessage);
      
      return fallbackMessage;
    }
  }

  private addToHistory(role: 'user' | 'assistant', content: string) {
    this.conversationHistory.push({ role, content });
    
    // Limita histórico a últimas 20 mensagens para não estourar tokens
    if (this.conversationHistory.length > 20) {
      this.conversationHistory = this.conversationHistory.slice(-20);
    }
  }

  getConversationHistory(): Message[] {
    return [...this.conversationHistory];
  }

  clearHistory() {
    this.conversationHistory = [];
  }
}
