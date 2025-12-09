- ⚠️ *Importante:* o **Yay só funciona em distribuições baseadas em Arch Linux**.
---

# 🟦 Guia Completo — Instalação do Yay por Distribuição

Abaixo estão instruções para Arch Linux, Manjaro, EndeavourOS e outras distros baseadas em Arch.

---

## 🟦 Arch Linux / EndeavourOS / CachyOS / Garuda / RebornOS (pacman)

### 📦 1. Instalar dependências

```bash
sudo pacman -S --needed base-devel git
```

### 📥 2. Clonar o repositório do Yay

```bash
git clone https://aur.archlinux.org/yay.git
```

### 🔧 3. Compilar e instalar

```bash
cd yay
makepkg -si
```

---

## 🟨 Manjaro

Manjaro permite instalar o Yay direto dos repositórios oficiais:

### 📦 Instalar via pacman

```bash
sudo pacman -S --needed yay
```

> Se quiser compilar manualmente (opcional), pode seguir o mesmo método do Arch.

---

## 🟫 Archcraft / Crystal Linux / ArcoLinux / Outras derivadas

Quase todas seguem o método padrão AUR:

### 📦 Instalar dependências

```bash
sudo pacman -S --needed base-devel git
```

### 📥 Clonar

```bash
git clone https://aur.archlinux.org/yay.git
```

### 🔧 Compilar

```bash
cd yay
makepkg -si
```

---

# 🧪 Testar o Yay

```bash
yay --version
```

Testar busca:

```bash
yay -Ss google-chrome
```

---

# 🔄 Atualizar Sistema + AUR

```bash
yay -Syu
```

---

# 🎉 Conclusão

Agora você tem:

✔ Yay instalado com sucesso
✔ Suporte ao AUR habilitado
✔ Sistema mais fácil de manter e instalar pacotes
