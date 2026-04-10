# FinTechX Chat Inteligente 💬

Um assistente virtual moderno para a FinTechX, desenvolvido com React, TypeScript e integração com OpenAI GPT.

![React](https://img.shields.io/badge/React-18.3.1-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)
![SCSS](https://img.shields.io/badge/SCSS-1.80-pink.svg)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF.svg)

## 🎯 **Sobre o Projeto**

Interface de chat inteligente desenvolvida para aprimorar a comunicação e suporte ao cliente da FinTechX. O assistente responde automaticamente às dúvidas dos clientes em tempo real usando linguagem natural.

### **Funcionalidades Principais**

- 🤖 **Chat IA Inteligente** - Powered by OpenAI GPT-3.5 Turbo
- 📱 **Design Responsivo** - Mobile-first approach
- ⚡ **Performance Otimizada** - Vite + React 18
- 🎨 **Design System** - Componentes reutilizáveis com SCSS
- 🔒 **TypeScript** - Type safety e melhor DX
- 🌟 **UX Moderna** - Animações e micro-interações

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
- Chave API OpenAI

### **Instalação**

```bash
# Clone o repositório (substitua pela URL real)
git clone [REPOSITORY_URL]
cd projeto-case

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env e adicione sua VITE_OPENAI_API_KEY
```

### **Configuração da API**

1. Obtenha sua chave da OpenAI em: https://platform.openai.com/api-keys
2. Adicione no arquivo `.env`:

```env
VITE_OPENAI_API_KEY=sk-your-openai-api-key-here
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
├── components/          # Componentes React
│   └── ui/             # Componentes base do design system
├── context/            # Context API para gerenciamento de estado
├── data/              # Dados estáticos (informações FinTechX)
├── hooks/             # Custom React hooks  
├── services/          # Integração com APIs externas
├── types/             # Definições TypeScript
└── utils/             # Funções utilitárias
```

## 🛠️ **Stack Tecnológica**

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: SCSS com variáveis customizadas
- **AI**: OpenAI GPT-3.5 Turbo
- **Icons**: Lucide React
- **State**: Context API
- **Linting**: ESLint + Prettier

## 📋 **Scripts Disponíveis**

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build para produção |
| `npm run preview` | Visualiza build local |
| `npm run lint` | Executa linting do código |

## 🚀 **Deploy**

### **Vercel (Recomendado)**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Em produção, configure as variáveis de ambiente no dashboard Vercel
```

### **Netlify**

```bash
# Build local
npm run build

# Upload da pasta dist/ no Netlify
```

## 🤝 **Contribuição**

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 **Licença**

Este projeto foi desenvolvido como parte de um teste técnico para a **Laborit**.

## 👥 **Contato**

- **Desenvolvedor**: Juan
- **Empresa**: Case Técnico - Laborit
- **Email**: [Seu email aqui]

---

### **Notas Técnicas**

- ⚠️ **Produção**: Remover `dangerouslyAllowBrowser: true` da configuração OpenAI
- 🔐 **Segurança**: Implementar proxy backend para APIs em produção
- 🧪 **Testes**: Estrutura preparada para Jest + React Testing Library
- 📊 **Monitoramento**: Pronto para integração com Analytics

**Desenvolvido com ❤️ para o Case Técnico Laborit**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
