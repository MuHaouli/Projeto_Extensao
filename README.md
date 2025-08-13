# 🎯 Interrogatio

Plataforma inteligente para análise e feedback de entrevistas profissionais. O Interrogatio utiliza tecnologias modernas para ajudar recrutadores e entrevistadores a obterem insights valiosos durante o processo seletivo.

## 📂 Sobre o Projeto

- **Apresentação textual** do projeto  
- **Quem Somos**: fotos e perfis dos integrantes do grupo  
- **Logo** da UniFil  
- **Introdução ao problema**: contexto e relevância  
- **Justificativa do tema**: por que este projeto é importante  
- **Reflexão sobre a extensão curricular**: o que aprendemos e impactamos  
- **Comunidade**: público-alvo e benefícios sociais

## 🚀 Tecnologias

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- Inter font (Google Fonts)

### Backend (em desenvolvimento)
- Python (FastAPI/Flask)
- Processamento de Linguagem Natural
- Análise de Sentimentos

## 🛠 Como Instalar e Rodar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn como gerenciador de pacotes
- Git instalado

### Passo a passo

1. Clone o repositório:
```bash
git clone https://github.com/MuHaouli/Projeto_Extensao.git
cd Projeto_Extensao
```

2. Instale as dependências:
```bash
npm install
```

3. Configure os arquivos necessários:

Crie um arquivo `next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
```

Crie um arquivo `postcss.config.js`:
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

Crie um arquivo `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B263B',
        secondary: '#415A77',
        accent: '#E0E1DD',
        highlight: '#F4A261',
      },
    },
  },
  plugins: [],
}
```

4. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura de Pastas

```
interrogatio/
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Layout principal
│   │   ├── page.tsx      # Página inicial
│   │   └── globals.css   # Estilos globais
│   └── components/       # Componentes reutilizáveis
├── public/              # Arquivos estáticos
├── package.json         # Dependências e scripts
└── README.md           # Documentação
```

## 🎨 Paleta de Cores

- Primária: `#1B263B` (azul marinho)
- Secundária: `#415A77` (azul acinzentado)
- Acento: `#E0E1DD` (cinza claro)
- Destaque: `#F4A261` (laranja suave)

## 🤝 Como Contribuir

1. **Faça o fork** do projeto:
   - Clique no botão **Fork** no canto superior direito do repositório no GitHub.

2. **Crie uma branch** para sua nova feature:
   - `git checkout -b feature/nome-da-feature`
   
3. **Faça commit** das suas alterações:
   - `git commit -m 'Descrição'`
  
4. **Envie para o seu repositório remoto**:
   - `git push origin feature/nome-da-feature`

5. **Abra um Pull Request**:
   - No GitHub, vá até o seu fork e clique em Compare & pull request.
   - Descreva as alterações e envie para revisão.

## 📝 Licença

MIT

---

Desenvolvido como projeto de extensão na UniFil.
