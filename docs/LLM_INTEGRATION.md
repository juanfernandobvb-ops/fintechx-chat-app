# 🤖 Integração LLM - FinTechX Chat

## 📋 Visão Geral

Este projeto utiliza uma arquitetura abstrata de LLM que permite trocar facilmente entre diferentes provedores (Gemini, OpenAI, etc.) sem alterar o código da aplicação.

## 🏗️ Arquitetura

```
services/
├── llm/
│   ├── LLMProvider.ts          # Interface abstrata
│   └── GeminiProvider.ts       # Implementação Gemini
├── faq/
│   └── FAQService.ts           # FAQ + filtragem de escopo
├── chatbot/
│   └── ChatbotService.ts       # Orquestrador (FAQ + LLM)
└── index.ts                    # Factory para criar instância
```

### Fluxo de Resposta

1. **FAQ First**: Verifica se existe resposta padronizada (instantânea, sem custo)
2. **Validação de Escopo**: Filtra perguntas não relacionadas à FinTechX
3. **LLM com Context**: Usa Gemini com System Prompt personalizado
4. **Histórico**: Mantém contexto das últimas 20 mensagens

## 🔑 Como Obter API Key do Google AI Studio (Gemini)

### Passo 1: Acessar o Google AI Studio
1. Acesse: https://makersuite.google.com/app/apikey
2. Faça login com sua conta Google

### Passo 2: Criar API Key
1. Clique em "Create API Key"
2. Selecione um projeto do Google Cloud (ou crie um novo)
3. Copie a API key gerada

### Passo 3: Configurar no Projeto
1. Copie o arquivo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```

2. Cole sua API key no arquivo `.env`:
   ```env
   VITE_GEMINI_API_KEY=AIzaSy...sua_key_aqui
   VITE_GEMINI_MODEL=gemini-pro
   ```

3. Reinicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## ⚡ Uso da API

### Exemplo Básico
```typescript
import { createChatbotService } from './services';

const chatbot = createChatbotService();

// Enviar mensagem
const response = await chatbot.sendMessage("Quais os horários de atendimento?");
console.log(response); // Resposta do FAQ ou LLM
```

### Adicionar Novo Provedor (OpenAI, Anthropic, etc.)
1. Criar classe que implementa `LLMProvider`
2. Adicionar factory no `services/index.ts`
3. Configurar variáveis de ambiente

## 🛡️ System Prompt

O assistente está configurado com:
- Contexto da FinTechX (horários, localização, serviços)
- Regras de escopo (só responde sobre fintech)
- Tom profissional e objetivo
- Português brasileiro

Editar em: `src/services/chatbot/ChatbotService.ts`

## 📊 FAQ Padrões

Respostas padronizadas para:
- Horários de atendimento
- Localização de escritórios
- Fundadores e história
- Segurança e privacidade
- E-mails suspeitos
- Educação financeira
- Promoções

Editar em: `src/services/faq/FAQService.ts`

## 🚀 Melhorias Futuras

- [ ] Adicionar OpenAI como alternativa
- [ ] Implementar RAG com documentação da empresa
- [ ] Cache de respostas frequentes
- [ ] Analytics de perguntas mais comuns
- [ ] Feedback thumbs up/down

## 📝 Notas Técnicas

- **Modelo**: Gemini Pro (gratuito com limites generosos)
- **Max Tokens**: 800 por resposta
- **Temperature**: 0.7 (balanceado)
- **Histórico**: Últimas 20 mensagens (limite de tokens)
- **Timeout**: 30 segundos (padrão fetch)

## 🐛 Troubleshooting

### "VITE_GEMINI_API_KEY não encontrada"
- Verifique se o arquivo `.env` existe
- Confirme que a variável está correta: `VITE_GEMINI_API_KEY`
- Reinicie o servidor de desenvolvimento

### "Gemini API Error: 400"
- API key inválida ou vencida
- Gere uma nova key no Google AI Studio

### "No response from Gemini"
- Verifique sua conexão com a internet
- Confirme que não excedeu o limite de requisições gratuitas

---

**Desenvolvido para o desafio técnico FinTechX**
