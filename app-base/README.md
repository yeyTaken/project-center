## app-base

`app-base` é uma base para criação de aplicativos de desktop usando Electron, com configuração de splash screen, janela principal e suporte a empacotamento para Windows.

---

### Pré-requisitos

* **Node.js** (versão 16 ou superior)
* **npm** [Não use; pnpm, yarn ou bun. Apenas NPM]
* **Git** (opcional, para versionamento)

---

### Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/yeyTaken/app-base app-base
   cd app-base
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

---

### Estrutura de pastas

```
app-base/
├─ icon.ico                  # Ícone para o executável
├─ package.json              # Configurações do projeto e scripts
├─ electron.conf.json        # Configurações de splash e janela principal
├─ src/
│  └─ electron/
│     └─ index.js            # Código principal do Electron
├─ public/                   # Arquivos estáticos (views)
│  ├─ splash/
│  │  └─ index.html          # Página da splash screen
│  └─ default/
│     └─ index.html          # Página da janela principal
└─ .gitignore                # Arquivos ignorados pelo Git
```

> **Observação:** Certifique-se de que a pasta `public/` contenha as pastas `splash/` e `default/` com seus respectivos `index.html`.

---

### Scripts npm

* **`npm run electron:dev`**
  Executa o app em modo de desenvolvimento:

  * Abre a splash screen (se ativa)
  * Após 5 segundos, fecha a splash e exibe a janela principal

* **`npm run electron:build:windows`**
  Empacota o aplicativo para Windows (.exe) usando `electron-packager`:

  * **Saída:** pasta `dist/`
  * Ícone: `icon.ico`
  * Overwrite, prune e ASAR ativados

---

### Configuração (`electron.conf.json`)

Este arquivo controla o comportamento da splash screen e da janela principal:

```json
{
  "splash": {
    "active": true,        // true para exibir splash, false para pular
    "width": 300,          // largura da splash
    "height": 400          // altura da splash
  },
  "default_window": {
    "width": 1200,         // largura da janela principal
    "height": 800,         // altura da janela principal
    "minWidth": 800,       // largura mínima
    "minHeight": 600,      // altura mínima

    "URL": {
      "active": false,     // true para carregar URL externa, false para carregar HTML local
      "url": "https://google.com/"  // URL a ser carregada quando active=true
    }
  }
}
```

* **`splash.active`**: ativa (`true`) ou desativa (`false`) o splash screen.
* **`default_window.URL.active`**: carrega um site externo se `true`, caso contrário carrega `public/default/index.html`.

Para alterar dimensões ou habilitar diretamente uma URL, edite este arquivo.

---

### Personalização

1. **Splash screen:**

   * Edite `public/splash/index.html` com sua marca ou animação.
   * Ajuste `electron.conf.json` para modificar tamanho ou desativar.

2. **Janela principal:**

   * Personalize `public/default/index.html` e demais assets estáticos.
   * Para carregar um site externo, defina `"URL.active": true` e informe a `url` desejada.

3. **Ícone do executável:**

   * Substitua `icon.ico` pelo seu ícone, mantendo o nome ou ajustando o script de build.

---

### Build para Windows

```bash
npm run electron:build:windows
```

Após a execução, a pasta `dist/app-base-win32-x64/` conterá seu executável `app-base.exe` e arquivos auxiliares.

---

### Contribuições

Pull requests são bem-vindos! Sinta-se à vontade para abrir issues ou enviar melhorias.

---

### Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
