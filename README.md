# Luísa Ferreira — The Infinite Mind

Portfólio pessoal de página única, feito com HTML, CSS e JavaScript puros, empacotado com [Vite](https://vitejs.dev/).

## Antes de publicar: troque os placeholders

- **Foto:** coloque sua imagem em `public/` (ex.: `public/foto.jpg`) e altere o `src` e o `alt` da tag `<img>` na seção Início em `index.html`.
- **Sobre mim:** complete o parágrafo marcado com colchetes (instituição, período do curso etc.).
- **Projetos:** edite os três blocos `[Nome do projeto]` em `index.html`. Para adicionar outro, copie um bloco `<li class="project">` e ajuste os ids (`p4` etc.).
- **Contato:** substitua `SEU-USUARIO` nos links de GitHub, LinkedIn e Instagram, e `seu-email@exemplo.com` no e-mail.

## 1. Instalar as dependências

Requer [Node.js](https://nodejs.org/) 18 ou superior.

```bash
npm install
```

## 2. Executar localmente

```bash
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173). Para testar a versão final:

```bash
npm run build
npm run preview
```

## 3. Publicar no GitHub

1. Crie um repositório vazio em https://github.com/new (sem README, sem .gitignore).
2. Na pasta do projeto, rode:

```bash
git init
git add .
git commit -m "Primeira versão do portfólio"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

## 4. Conectar à Vercel

1. Entre em https://vercel.com e faça login com sua conta do GitHub.
2. Clique em **Add New… → Project** e escolha o repositório.
3. A Vercel detecta o Vite sozinha. Confirme: Build Command `npm run build` e Output Directory `dist`.
4. Clique em **Deploy**. Em instantes o site estará em um endereço `.vercel.app`.
5. Para usar domínio próprio: **Settings → Domains** no projeto da Vercel.

## 5. Fazer futuras atualizações

```bash
# edite os arquivos, teste com npm run dev, depois:
git add .
git commit -m "Descreva a mudança"
git push
```

Cada `git push` na branch `main` gera um novo deploy automático na Vercel.

## Estrutura

```
index.html        conteúdo e estrutura
src/style.css     identidade visual (paleta e tipografia no topo, em :root)
src/main.js       menu, seção ativa na navbar, projetos interativos
public/           favicon e foto
```

## Acessibilidade

Navegação por teclado com foco visível, link "Ir para o conteúdo", marcação semântica, botões com `aria-expanded`, contraste adequado e respeito à preferência de movimento reduzido do sistema.

## Importante

Não abra o `index.html` com duplo clique: o site usa módulos JavaScript e precisa de um servidor. Use sempre `npm run dev` (local) ou o endereço publicado na Vercel.
