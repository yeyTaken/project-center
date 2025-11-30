# 🐚 Guia Completo — Instalação do Zsh no Linux

Este guia mostra como instalar o **Zsh** nas principais distribuições Linux e defini-lo como shell padrão.

---

## 📦 Instalação do Zsh por Distribuição

### 🟦 Arch Linux / Manjaro / EndeavourOS (pacman)

```bash
sudo pacman -S --needed zsh
```

---

### 🟩 Debian / Ubuntu / Linux Mint / Pop!_OS (apt)

```bash
sudo apt update
sudo apt install zsh -y
```

---

### 🟧 Fedora (dnf)

```bash
sudo dnf install zsh -y
```

---

### 🟥 CentOS / RHEL / Amazon Linux (yum)

```bash
sudo yum install zsh -y
```

---

### 🟪 openSUSE (zypper)

```bash
sudo zypper install zsh -y
```

---

# 🔧 Definir o Zsh como Shell Padrão

```bash
chsh -s $(which zsh)
```

> ⚠️ É necessário **encerrar a sessão** e entrar novamente para aplicar.

---

# 🧪 Testar o Zsh

Digite:

```bash
echo $SHELL
```

Se aparecer `/bin/zsh` ou `/usr/bin/zsh`, tudo certo!

---

# 🎉 Conclusão

Agora você tem:

* Zsh instalado
* Shell padrão configurado
* Ambiente pronto para instalar Oh My Zsh

---

---

# 💡 Guia Completo — Instalação do Oh My Zsh + Powerlevel10k + Plugins

Este guia instala:

✅ **Oh My Zsh**
✅ Tema **powerlevel10k**
✅ Plugin **zsh-autosuggestions**
✅ Plugin **zsh-syntax-highlighting**

---

# 📥 Instalar o Oh My Zsh (Método Oficial)

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

> Se você ainda não estiver usando zsh como shell padrão, o instalador pergunta se você deseja mudar.

---

# 🎨 Instalar o Tema Powerlevel10k

## Via Git (recomendado)

```bash
git clone --depth=1 https://github.com/powerlevel10k/powerlevel10k.git \
  ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

---

# ⚙️ Configurar o Tema no `.zshrc`

Edite:

```bash
nano ~/.zshrc
```

Altere a linha do tema:

```bash
ZSH_THEME="powerlevel10k/powerlevel10k"
```

Recarregue:

```bash
source ~/.zshrc
```

---

# ⚡ Instalar Plugins

## 🔵 zsh-autosuggestions

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions \
  ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

## 🟣 zsh-syntax-highlighting

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git \
  ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

---

# 🔧 Ativar os Plugins no `.zshrc`

Edite o arquivo:

```bash
nano ~/.zshrc
```

Altere a linha dos plugins para:

```bash
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

Recarregue:

```bash
source ~/.zshrc
```

---

# 🧪 Testar os Plugins

* Digite alguns comandos — sugestões devem aparecer em **cinza claro**
* Escreva um comando inválido — ele deve aparecer em **vermelho**

---

# 🌈 Configurar o Powerlevel10k

Inicie o assistente:

```bash
p10k configure
```

> Isso abrirá o menu gráfico para configurar o visual do seu terminal.

---

# 🎉 Conclusão

Agora você tem:

* Oh My Zsh instalado
* Tema Powerlevel10k configurado
* Plugins essenciais ativados
* Terminal rápido, bonito e produtivo