// FAQ Database para FinTechX
export interface FAQItem {
  keywords: string[];
  answer: string;
  category: string;
}

export const fintechxFAQ: FAQItem[] = [
  {
    keywords: ['bom dia', 'bomdia', 'boa tarde', 'boatarde', 'boa noite', 'boanoite'],
    answer: '__GREETING__', // Placeholder para saudação dinâmica
    category: 'saudacao',
  },
  {
    keywords: ['oi', 'olá', 'ola', 'hey', 'opa', 'e ai', 'eai', 'hello', 'hi', 'alo', 'alô'],
    answer: 'Olá! 👋 Sou o assistente virtual da FinTechX. Como posso ajudar você hoje?',
    category: 'saudacao',
  },
  {
    keywords: ['teste', 'testando', 'test'],
    answer: 'Olá! Estou funcionando perfeitamente! 😊 Posso ajudar com informações sobre a FinTechX, nossos serviços, horários de atendimento e muito mais. O que você gostaria de saber?',
    category: 'saudacao',
  },
  {
    keywords: ['tudo bem', 'como vai', 'tudo bom', 'como voce esta', 'como você está', 'como vc esta', 'como vc está', 'td bem', 'beleza'],
    answer: 'Tudo bem, obrigado por perguntar! 😊 Estou aqui para ajudar você com informações sobre a FinTechX. Como posso ser útil?',
    category: 'saudacao',
  },
  {
    keywords: ['quem e voce', 'quem é você', 'quem é vc', 'o que voce faz', 'o que você faz', 'oque vc faz', 'voce e quem', 'você é quem', 'me ajuda como', 'pode me ajudar'],
    answer: 'Sou o assistente virtual da FinTechX! 🤖 Estou aqui para responder suas dúvidas sobre nossos serviços financeiros, horários de atendimento, localização, segurança e muito mais. É só perguntar!',
    category: 'saudacao',
  },
  {
    keywords: ['ajuda', 'help', 'preciso de ajuda', 'me ajuda', 'pode ajudar', 'socorro', 'auxilio', 'auxílio'],
    answer: 'Claro! Posso ajudar com:\n• 📍 Localização e contato da FinTechX\n• ⏰ Horários de atendimento\n• 💳 Serviços e produtos financeiros\n• 🔒 Segurança e proteção de dados\n• 📚 Educação financeira e investimentos\n• 🎁 Promoções e ofertas\n\nQual dessas opções te interessa?',
    category: 'saudacao',
  },
  {
    keywords: ['obrigado', 'obrigada', 'valeu', 'agradeço', 'agradeco', 'thanks', 'thank you'],
    answer: 'Por nada! 😊 Estou aqui para ajudar sempre que precisar. Há mais alguma dúvida?',
    category: 'agradecimento',
  },
  {
    keywords: ['tchau', 'até logo', 'ate logo', 'até breve', 'ate breve', 'adeus', 'bye', 'até mais', 'ate mais', 'falou'],
    answer: 'Até logo! 👋 Estarei aqui sempre que precisar de ajuda. Tenha um ótimo dia!',
    category: 'despedida',
  },
  {
    keywords: ['horário', 'atendimento', 'funciona', 'aberto', 'horarios', 'abre', 'fecha', 'quando atende'],
    answer: 'Os horários de atendimento da FinTechX são de segunda a sexta-feira, das 9h às 18h (horário de Brasília). Aos finais de semana e feriados, nosso atendimento estará fechado.',
    category: 'atendimento',
  },
  {
    keywords: ['contato', 'falar', 'entrar em contato', 'comunicar', 'telefone', 'email', 'suporte', 'atendimento', 'ajuda', 'chat', 'whatsapp', 'sac', 'ligar', 'como falo', 'falar com voces'],
    answer: 'Você pode entrar em contato com a FinTechX de várias formas:\n• Chat no app (disponível 24/7)\n• E-mail: contato@fintechx.com.br\n• SAC: 0800 123 4567 (seg-sex, 9h-18h)\n• WhatsApp: (11) 91234-5678\n• Nosso escritório: Av. Paulista, 1000, São Paulo - SP',
    category: 'atendimento',
  },
  {
    keywords: ['escritório', 'localização', 'endereço', 'onde fica', 'localizados', 'localizado', 'localizada', 'sede', 'onde esta', 'onde está', 'fica onde', 'local'],
    answer: 'O escritório principal da FinTechX está localizado na Av. Paulista, 1000, São Paulo - SP, CEP 01310-100.',
    category: 'empresa',
  },
  {
    keywords: ['fundou', 'fundador', 'fundadores', 'criou', 'fundação', 'fundacao', 'quando', 'dono', 'proprietário', 'proprietario', 'criador', 'criadores', 'quem criou', 'dono da empresa', 'quem é o dono', 'quem e o dono', 'founders', 'founder', 'co-fundador', 'cofundador', 'sócio', 'socio', 'socios', 'sócios'],
    answer: 'A FinTechX foi fundada em 2020 por João Silva e Maria Santos, com o objetivo de democratizar o acesso a serviços financeiros através da tecnologia.',
    category: 'empresa',
  },
  {
    keywords: ['o que faz', 'area de atuação', 'atuacao', 'serviços', 'servicos', 'produtos', 'oferece', 'oque faz', 'oq faz', 'faz o que', 'negocio', 'atividade'],
    answer: 'A FinTechX é uma fintech que oferece serviços financeiros digitais: conta digital gratuita, cartão de crédito sem anuidade, investimentos (Tesouro Direto, CDBs, Fundos), empréstimos com taxas competitivas, Pix instantâneo, TED gratuito e programa de educação financeira. Tudo pelo app, simples e sem burocracia!',
    category: 'empresa',
  },
  {
    keywords: ['protege', 'segurança', 'informações pessoais', 'dados', 'privacidade', 'protecao', 'proteção', 'seguro', 'lgpd', 'sigiloso'],
    answer: 'A FinTechX protege suas informações pessoais com criptografia de ponta a ponta, autenticação multifator e conformidade com a LGPD. Seus dados nunca são compartilhados com terceiros sem sua autorização expressa.',
    category: 'seguranca',
  },
  {
    keywords: ['e-mail suspeito', 'phishing', 'email falso', 'fraude', 'email suspeito', 'golpe', 'spam'],
    answer: 'Se você recebeu um e-mail suspeito, NÃO clique em links nem forneça suas credenciais. Encaminhe o e-mail para seguranca@fintechx.com.br e delete-o imediatamente. A FinTechX nunca solicita senhas ou dados bancários por e-mail.',
    category: 'seguranca',
  },
  {
    keywords: ['aprender', 'investimentos', 'poupança', 'educação financeira', 'educacao', 'curso', 'ensinar', 'estudar'],
    answer: 'Oferecemos uma seção de Educação Financeira em nosso app com artigos, vídeos e webinars gratuitos sobre investimentos, poupança e planejamento financeiro. Acesse "Aprender" no menu principal.',
    category: 'educacao',
  },
  {
    keywords: ['inscrever', 'promoções', 'descontos', 'newsletter', 'promocoes', 'promocao', 'oferta', 'ofertas'],
    answer: 'Para receber promoções e descontos exclusivos, acesse "Configurações" > "Notificações" no app e ative "Ofertas e Promoções". Você também pode se inscrever em nossa newsletter no site oficial.',
    category: 'promocoes',
  },
];

export class FAQService {
  private faq: FAQItem[];

  constructor(faqData: FAQItem[] = fintechxFAQ) {
    this.faq = faqData;
  }

  // Busca resposta no FAQ baseada em keywords
  findAnswer(question: string): string | null {
    const normalizedQuestion = this.normalize(question);

    for (const item of this.faq) {
      const match = item.keywords.some((keyword) => 
        normalizedQuestion.includes(this.normalize(keyword))
      );

      if (match) {
        // Se for saudação dinâmica, retorna baseada na hora
        if (item.answer === '__GREETING__') {
          return this.getTimeBasedGreeting();
        }
        return item.answer;
      }
    }

    return null;
  }

  // Retorna saudação baseada no horário do dia
  private getTimeBasedGreeting(): string {
    const hour = new Date().getHours();
    let greeting = '';

    if (hour >= 5 && hour < 12) {
      greeting = 'Bom dia!';
    } else if (hour >= 12 && hour < 18) {
      greeting = 'Boa tarde!';
    } else {
      greeting = 'Boa noite!';
    }

    return `${greeting} 👋 Sou o assistente virtual da FinTechX. Como posso ajudar você hoje?`;
  }

  // Verifica se a pergunta é claramente FORA do escopo da FinTechX
  // Retorna TRUE se for relacionada (permitir), FALSE se for claramente fora do escopo
  isRelatedToFintech(question: string): boolean {
    const normalized = this.normalize(question);

    // Lista de tópicos claramente FORA DO ESCOPO
    const outOfScopeKeywords = [
      'receita', 'bolo', 'comida', 'culinaria', 'cozinhar', 'ingrediente',
      'futebol', 'jogo', 'esporte', 'time', 'campeonato',
      'filme', 'serie', 'novela', 'ator', 'atriz', 'cinema',
      'musica', 'cantor', 'banda', 'show', 'concerto',
      'clima', 'tempo', 'chuva', 'sol', 'temperatura',
      'saude', 'medico', 'remedio', 'doenca', 'hospital', 'sintoma',
      'viagem', 'hotel', 'passagem', 'turismo', 'destino',
      'politica', 'eleicao', 'presidente', 'deputado', 'senador',
      'exercicio', 'academia', 'treino', 'musculacao',
      'moda', 'roupa', 'sapato', 'look',
    ];

    // Se contém keywords claramente fora do escopo, bloqueia
    const isOutOfScope = outOfScopeKeywords.some((keyword) => 
      normalized.includes(keyword)
    );

    // Se é fora do escopo, retorna false (não relacionado)
    if (isOutOfScope) {
      return false;
    }

    // Se não é obviamente fora do escopo, deixa passar para a LLM decidir
    // O System Prompt já está configurado para recusar educadamente se não for sobre FinTechX
    return true;
  }

  private normalize(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // Remove acentos
  }
}
