# 🌐 Next Base — Boilerplate com Next.js 16, i18n, Theme Switcher e HeroUI

Este projeto é uma **base modelo** para aplicações modernas utilizando o ecossistema do **Next.js 16 (App Router)**.  
Ele contém uma estrutura sólida e escalável, focada em internacionalização, tema claro/escuro, UI consistente e separação limpa de responsabilidades.

---

## 🚀 Tecnologias principais

- **Next.js 16** (App Router)
- **TypeScript**
- **ESLint**
- **Tailwind CSS**
- **HeroUI**
- **next-intl** (Internacionalização)
- **Dark/Light Theme com next-themes**
- Arquitetura otimizada para **componentização e reuso**

---

## 📁 Estrutura do Projeto

```

next-base/
├── public/
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── components/
│   │   └── ui/
│   │       ├── switcher/
│   │       │   ├── locale.tsx
│   │       │   └── theme.tsx
│   │       └── Footer/
│   │           └── index.tsx
│   ├── lib/
│   │   ├── i18n/
│   │   │   ├── message/
│   │   │   │   ├── en.json
│   │   │   │   └── pt.json
│   │   │   ├── navigation.ts
│   │   │   ├── request.ts
│   │   │   └── routing.ts
│   │   ├── providers.tsx
│   │   └── theme.tsx
│   ├── types/
│   │   └── layout.d.ts
│   └── proxy.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── eslint.config.mjs

```

---

## 🌍 Internacionalização (i18n)

O projeto utiliza **next-intl** com:

- Resolução dinâmica de idioma via `[locale]` no App Router
- Arquivos de mensagens em:
  - `src/lib/i18n/message/en.json`
  - `src/lib/i18n/message/pt.json`
- `routing.ts`, `request.ts` e `navigation.ts` configurados para:
  - Rotas automaticamente localizadas
  - Navegação client-side com troca de locale sem reload

### Troca de idioma

Implementada no componente:

```

src/components/ui/switcher/locale.tsx

```

---

## 🎨 Tema Claro/Escuro

Theme provider configurado com:

- **next-themes**
- Suporte a:
  - `light`
  - `dark`
  - `system`

O provider global está em:

```

src/lib/theme.tsx

```

O switcher está em:

```

src/components/ui/switcher/theme.tsx

````

Integrado com Tailwind usando:

```ts
darkMode: "class"
````

---

## 🧩 Componentes de UI

### 🔹 Switcher de tema

Permite alternar entre dark, light e system.
Usa HeroUI + react-icons + framer-motion.

### 🔹 Switcher de idiomas

Permite troca instantânea entre idiomas registrados no projeto.

### 🔹 Footer

Footer simples, estilizado com Tailwind.

---

## 🏗 Provider Global

O arquivo:

```
src/lib/providers.tsx
```

é responsável por unir:

* `ThemeProvider`
* `NextIntlClientProvider`
* `HeroUIProvider`

Permitindo que todos os componentes da aplicação tenham acesso aos mesmos contextos.

---

## 📄 Estrutura das Páginas

O projeto base já inicia com:

### `/[locale]/layout.tsx`

* Define o boilerplate global por idioma.
* Aplica Providers.
* Define HTML `<body>` com theme controlado.

### `/[locale]/page.tsx`

* Página inicial por idioma.
* Exemplo de uso de mensagens traduzidas.

---

## 🧩 Tipagens

```
src/types/layout.d.ts
```

Contém tipagens necessárias para remoção de erros comuns do Next.js App Router.

---

## 🔧 Configuração Tailwind

Configurações personalizadas em:

```
tailwind.config.ts
```

* Suporte ao modo dark baseado em classe
* Paths configurados para todo o diretório src

---

## ⭐ Objetivo do Projeto

Este boilerplate foi criado para ser:

### ✔ Um **modelo base** reutilizável

Ideal para iniciar projetos com qualidade profissional.

### ✔ Estruturado para **escalabilidade**

Separação clara de responsabilidades.

### ✔ Pronto para **projetos multilíngues**

i18n totalmente funcional e automático.

### ✔ Totalmente integrável com **component libraries**

HeroUI já configurado e funcionando.

### ✔ Com **tema dinâmico** desde o início

Dark/light mode com suporte a system theme.

---

## ▶ Scripts comuns

| Comando      | Ação                               |
| ------------ | ---------------------------------- |
| `pnpm dev`   | Inicia ambiente de desenvolvimento |
| `pnpm build` | Gera build de produção             |
| `pnpm start` | Inicia servidor em produção        |

---

## 📌 Requisitos

* Node **>= 18**
* pnpm **>= 8** (recomendado)
* Next.js 16

---

## 🧠 Observações Importantes

* Todos os contextos devem ser aplicados via provider global.
* Os arquivos JSON de i18n devem sempre conter as mesmas chaves.
* Componentes que usam estado, framer-motion, HeroUI ou contextos precisam de `"use client"`.

---

## 📬 Contato

Caso queira expandir esta base com novos módulos (auth, dashboard, prisma, APIs, SSR, etc.), posso ajudar a construir **uma versão estendida e completa**.

---