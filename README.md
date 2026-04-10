# FinTechX Chat Inteligente 💬

Um assistente virtual moderno para a FinTechX, desenvolvido com React, TypeScript e integração com Google Gemini AI.

![React](https://img.shields.io/badge/React-19.2-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue.svg)
![SCSS](https://img.shields.io/badge/SCSS-Modular-pink.svg)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF.svg)
![Deploy](https://img.shields.io/badge/deploy-Vercel-success.svg)

> 🚀 **Desenvolvido em 2 dias para case técnico**

## 🎯 **Sobre o Projeto**

Interface de chat inteligente desenvolvida para aprimorar a comunicação e suporte ao cliente da FinTechX. O assistente responde automaticamente às dúvidas dos clientes em tempo real usando linguagem natural.

## 🌐 **Deploy em Produção**

🚀 **Aplicação rodando**: [fintechx-chat-app.vercel.app](https://fintechx-chat-app.vercel.app)

> Deploy automático via Vercel com CI/CD integrado

### **Funcionalidades Principais**

- 🤖 **Chat IA Inteligente** - Powered by Google Gemini Pro
- 💬 **FAQ-First Architecture** - Respostas instantâneas sem latência de API
- 📱 **Design Responsivo** - Mobile-first com UX polida
- ⚡ **Performance Otimizada** - Vite 8 + React 19
- 🎨 **Design System Completo** - SCSS modular com variáveis
- 🔒 **TypeScript 100%** - Type safety em todo código
- 🌟 **UX Moderna** - Animações, loading states, feedback visual
- 💾 **Persistência Local** - localStorage para perfil do usuário
- 🗂️ **Múltiplas Telas** - Onboarding, Chat, Dashboard, Perfil

### **Base de Conhecimento**

O assistente pode responder sobre:
- ✅ Horários de atendimento
- ✅ Localização dos escritórios  
- ✅ História e fundadores da empresa
- ✅ Segurança e proteção de dados
- ✅ Dicas de investimento e educação financeira
- ✅ Como se inscrever para promoções

## 🚀 **Quick Start**

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn
- Chave API do Google AI Studio (Gemini)

### **Instalação**

```bash
# Clone o repositório
git clone https://github.com/juanfernandobvb-ops/fintechx-chat-app.git
cd projeto-case

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env e adicione sua VITE_GEMINI_API_KEY
```

### **Configuração da API**

1. Obtenha sua chave do Google AI Studio: https://makersuite.google.com/app/apikey
2. Crie/edite o arquivo `.env`:

```env
VITE_GEMINI_API_KEY=AIzaSy...sua_key_aqui
VITE_GEMINI_MODEL=gemini-pro
```

### **Executar em Desenvolvimento**

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Acesse: http://localhost:3000
```

### **Build para Produção**

```bash
# Gerar build otimizado
npm run build

# Prévia do build
npm run preview
```

## 🏗️ **Estrutura do Projeto**

```
src/
├── components/
│   ├── screens/        # Telas principais (Chat, Profile, Dashboard, etc.)
│   └── ui/             # Componentes reutilizáveis (Button, Input, Modal, etc.)
├── context/            # ChatProvider, UserProvider (Context API)
├── data/               # FAQ e informações da FinTechX
├── hooks/              # useNavigation, useUser (custom hooks)
├── services/
│   ├── llm/            # LLMProvider (abstração), GeminiProvider
│   ├── faq/            # FAQService (respostas instantâneas)
│   └── chatbot/        # ChatbotService (orquestrador FAQ + LLM)
├── styles/             # SCSS modular (variables, components, screens)
├── types/              # Interfaces TypeScript
└── utils/              # Funções utilitárias
```

## 🛠️ **Stack Tecnológica**

- **Frontend**: React 19.2 + TypeScript 6.0
- **Build Tool**: Vite 8.0
- **Routing**: React Router DOM 7.14
- **Styling**: SCSS com design system modular
- **AI**: Google Gemini Pro (via Google AI Studio)
- **State Management**: Context API (ChatProvider, UserProvider)
- **Storage**: localStorage (persistência de perfil)
- **Linting**: ESLint 9 + TypeScript ESLint
- **Deploy**: Vercel (CI/CD automático)

## 📋 **Scripts Disponíveis**

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build para produção |
| `npm run preview` | Visualiza build local |
| `npm run lint` | Executa linting do código |

## 🚀 **Deploy**

A aplicação está configurada para deploy automático no Vercel.

### **Deploy Atual**
- URL: https://fintechx-chat-app.vercel.app
- Status: ✅ Produção
- CI/CD: Automático via Git push

### **Configurar no Vercel**

1. Conecte o repositório GitHub no Vercel
2. Configure a variável de ambiente:
   ```
   VITE_GEMINI_API_KEY=sua_chave_aqui
   ```
3. Deploy automático a cada push na branch `main`

## 🧠 **Decisões Técnicas**

### Por que Gemini API?
- ✅ **Gratuito** com limites generosos (60 req/min)
- ✅ **Excelente em português** brasileiro
- ✅ **Performance** comparável ao GPT-3.5
- ✅ **Latência baixa** (~1-2s por resposta)

### Arquitetura FAQ-First
- ⚡ **Respostas instantâneas** para perguntas comuns (sem latência)
- 💰 **Redução de custos** (~70% das perguntas são FAQ)
- 🎯 **Fallback inteligente** para LLM quando necessário
- ✅ **Validação de escopo** (rejeita perguntas fora da FinTechX)

### Abstração LLMProvider
- 🔄 **Fácil troca de provider** (Gemini → OpenAI em 2 linhas)
- 🧪 **Testável** e **manutenível**
- 📈 **Preparado para escalar** (adicionar novos providers)

### Context API vs Redux
- ✅ Suficiente para escopo do projeto
- ✅ Menos boilerplate e setup
- ✅ Performance adequada com `useCallback`/`useMemo`
- ✅ Mais rápido de implementar (2 dias de prazo)

## 🤝 **Contribuição**

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 **Licença**

Este projeto foi desenvolvido como parte de um case técnico para a **Laborit**.

## 📊 **Contexto de Desenvolvimento**

⏱️ **Tempo de desenvolvimento**: 2 dias  
🎯 **Objetivo**: Case técnico para vaga de desenvolvedor  
✅ **Entregas**: Aplicação funcional + Deploy + Documentação

### O que foi priorizado:
- ✅ Funcionalidades completas e testadas manualmente
- ✅ UX polida com animações e feedback visual
- ✅ Arquitetura escalável e bem organizada
- ✅ Código limpo com TypeScript 100%
- ✅ Deploy em produção funcionando

### Diferenciais implementados:
- ✅ Sistema de FAQ inteligente (reduz custos de API)
- ✅ Abstração de LLM (fácil trocar provider)
- ✅ Múltiplas telas funcionais (10+ screens)
- ✅ Persistência de dados (localStorage)
- ✅ Design system modular e consistente

## 👥 **Contato**

- **Desenvolvedor**: Juan Fernando
- **Case**: Laborit - Desenvolvedor Frontend
- **Repositório**: https://github.com/juanfernandobvb-ops/fintechx-chat-app

---

### **Notas Técnicas**

- 📚 **Documentação completa**: Veja `/docs/LLM_INTEGRATION.md` para detalhes da integração
- 🔐 **Segurança**: API key configurada via variáveis de ambiente (não commitada)
- 🧪 **Testes**: Estrutura preparada para Vitest/Jest (não implementado por priorização de tempo)
- 📊 **CI/CD**: Vercel com deploy automático a cada push

**Desenvolvido com ❤️ para o Case Técnico Laborit**
