import OpenAI from 'openai';
import { finTechData } from '../data/fintech-info';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Apenas para desenvolvimento - não recomendado em produção
});

const systemPrompt = `Você é o assistente virtual da FinTechX, uma empresa líder no setor financeiro. Sua função é ajudar clientes com dúvidas sobre nossos serviços de forma amigável, profissional e eficiente.

INFORMAÇÕES DA EMPRESA:
- Horários: ${finTechData.businessHours}
- Escritórios: ${finTechData.locations.join('; ')}
- Fundadores: ${finTechData.founders} (${finTechData.foundedYear})
- Segurança: ${finTechData.securityInfo}
- Como se inscrever para promoções: ${finTechData.promotions}

DICAS DE INVESTIMENTO:
${finTechData.investmentTips.map(tip => `- ${tip}`).join('\n')}

DIRETRIZES:
- Seja sempre educado, prestativo e profissional
- Responda apenas sobre temas relacionados à FinTechX e serviços financeiros
- Se não souber alguma informação específica, direcione para nossos canais oficiais
- Mantenha as respostas concisas mas informativas
- Use linguagem clara e acessível
- Se receber perguntas sobre outros assuntos, redirecione gentilmente para temas financeiros

IMPORTANTE: Se receber e-mails suspeitos, oriente a verificar o remetente, não clicar em links suspeitos e entrar em contato conosco pelos canais oficiais.`;

export class ChatService {
  static async sendMessage(message: string, conversationHistory: Array<{role: string, content: string}> = []): Promise<string> {
    try {
      const messages = [
        { role: 'system', content: systemPrompt },
        ...conversationHistory.slice(-10), // Manter apenas as últimas 10 mensagens
        { role: 'user', content: message }
      ];

      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messages as OpenAI.Chat.Completions.ChatCompletionMessageParam[],
        max_tokens: 500,
        temperature: 0.7,
      });

      return response.choices[0]?.message?.content || 'Desculpe, não consegui processar sua mensagem. Tente novamente.';
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      
      if (error instanceof Error && error.message.includes('API key')) {
        return 'Erro de configuração da API. Por favor, verifique se a chave da OpenAI está configurada corretamente no arquivo .env';
      }
      
      return 'Desculpe, estou temporariamente indisponível. Tente novamente em alguns momentos.';
    }
  }
}