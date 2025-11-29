# 🚀 Guia Completo — Instalação do NVM e Node LTS no Linux

Este guia mostra como instalar o **NVM (Node Version Manager)** e o **Node.js LTS** nas distribuições Linux mais usadas.

---

## 📦 Instalação de Dependências por Distribuição

Antes de instalar o NVM, é recomendável ter `curl` e `git` instalados.

### 🟦 Arch Linux / Manjaro / EndeavourOS (pacman)

```bash
sudo pacman -S --needed curl git base-devel
````

---

### 🟩 Debian / Ubuntu / Linux Mint / Pop!_OS (apt)

```bash
sudo apt update
sudo apt install curl git build-essential -y
```

---

### 🟧 Fedora (dnf)

```bash
sudo dnf install curl git make automake gcc gcc-c++ kernel-devel -y
```

---

### 🟥 CentOS / RHEL / Amazon Linux (yum)

```bash
sudo yum install curl git make automake gcc gcc-c++ kernel-devel -y
```

---

### 🟪 openSUSE (zypper)

```bash
sudo zypper install curl git gcc gcc-c++ make -y
```

---

# 📥 Instalar o NVM (Método Oficial)

O método oficial funciona em **qualquer distro**:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

> O script baixa automaticamente a versão mais recente do NVM.

---

# ⚙️ Configurando o NVM no Shell

## Bash (`~/.bashrc`)

Edite o arquivo:

```bash
nano ~/.bashrc
```

Adicione no final:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Recarregue:

```bash
source ~/.bashrc
```

---

## Zsh (`~/.zshrc`)

```bash
nano ~/.zshrc
```

Adicione:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
```

Recarregue:

```bash
source ~/.zshrc
```

---

# 🧪 Testando o NVM

```bash
nvm --version
```

Se aparecer a versão → tudo certo!

---

# 🟢 Instalando o Node.js LTS

Instalar a versão LTS:

```bash
nvm install --lts
```

Definir como padrão:

```bash
nvm use --lts
nvm alias default lts/*
```

---

# 🔍 Verificação

```bash
node -v
npm -v
```

---

# 🔄 Atualizar o NVM

```bash
cd ~/.nvm
git pull
```

---

# ❗ Aviso Importante

Se você instalou Node pelo sistema (pacman, apt, etc), pode gerar conflito.

Recomenda-se remover:

### Arch:

```bash
sudo pacman -Rs nodejs npm
```

### Debian/Ubuntu:

```bash
sudo apt remove nodejs npm -y
```

---

# 🎉 Conclusão

Agora você tem:

* NVM instalado
* Node.js LTS configurado
* Controle de múltiplas versões de Node
* Setup padronizado para qualquer distro Linux

