# Guia de Customização - ZucroPay Landing Page

## 🎨 Cores

A cor principal do projeto é **#380F7F** (roxo escuro). Para alterar:

1. Abra `tailwind.config.ts`
2. Procure por `purple-950` e `#380F7F`
3. Atualize para sua nova cor

### Onde a cor é usada:
- Botões principais
- Cabeçalho (Hero section)
- Seção de premiações
- CTA final
- Hover states

## 🖼️ Logo

O logotipo está em `public/logotipo.png`. Para substituir:

1. Substitua o arquivo `logotipo.png` na pasta `public/`
2. Mantenha o nome do arquivo ou atualize as referências nos componentes:
   - `components/sections/Hero.tsx`
   - `components/sections/Footer.tsx`
   - `components/Navbar.tsx`

## 📝 Conteúdo

### Textos principais
Edite os seguintes arquivos para mudar o conteúdo:

- **Hero**: `components/sections/Hero.tsx`
  - Título principal
  - Subtítulo
  - Estatísticas (taxa PIX, D+0, etc)

- **Features**: `components/sections/Features.tsx`
  - Métodos de pagamento integrados

- **Conversion**: `components/sections/Conversion.tsx`
  - Benefícios da plataforma

- **Support**: `components/sections/Support.tsx`
  - Informações de suporte

- **Awards**: `components/sections/Awards.tsx`
  - Premiações e reconhecimentos

- **Footer**: `components/sections/Footer.tsx`
  - Links do footer
  - Informações de contato
  - CNPJ e redes sociais

## 🔗 Links

### Botões CTA
Os botões "Criar Conta" e "Criar uma conta" ainda não têm links funcionais.

Para adicionar os links:
1. Substitua os componentes `<Button>` por links `<a>` ou adicione `onClick` handlers
2. Exemplo:
```tsx
<Button onClick={() => window.location.href = 'https://app.zucropay.com/signup'}>
  Criar Conta
</Button>
```

### Navegação
O menu de navegação usa âncoras (#) para scroll suave. Os IDs das seções são:
- `#features` - Integração/Diferenciais
- `#support` - Suporte
- `#awards` - Premiações
- `#contact` - Footer/Contato

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Build Manual
```bash
npm run build
npm start
```

## 📦 Adicionar Novos Componentes shadcn/ui

```bash
npx shadcn@latest add [component-name]
```

Exemplos:
```bash
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

## 🎭 Animações

As animações estão configuradas em `tailwind.config.ts`:
- `animate-fade-in` - Fade in suave
- `animate-slide-up` - Slide para cima
- `animate-float` - Flutuação contínua

Para adicionar novas animações, edite a seção `keyframes` no arquivo.

## 📱 Responsividade

O design é totalmente responsivo:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Os breakpoints do Tailwind são:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔧 Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização
- **Radix UI** - Componentes primitivos
- **shadcn/ui** - Componentes de UI
- **Lucide React** - Ícones

## 📞 Suporte

Para questões sobre o projeto, consulte:
- Documentação Next.js: https://nextjs.org/docs
- Documentação Tailwind: https://tailwindcss.com/docs
- Documentação shadcn/ui: https://ui.shadcn.com
