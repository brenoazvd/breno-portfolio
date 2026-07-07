# Portfólio — Breno Rodrigues Azevedo

Site de portfólio (React + Vite + Tailwind). Páginas: início, projetos, sobre,
currículo e contato. O currículo exporta para PDF pela impressão do navegador
(abra `/#/cv` e use Ctrl+P → Salvar como PDF); nada é gerado no servidor.

## Rodar local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # gera dist/
npm run preview    # serve o build local
```

## Deploy

Push na branch `main` dispara o workflow `.github/workflows/deploy-pages.yml`,
que faz o build e publica no GitHub Pages. Ative em
Settings → Pages → Source: GitHub Actions.

## Conteúdo

`src/data/content.json` é um snapshot gerado a partir da base de conhecimento
privada. Para atualizar, regenere na origem e copie o novo `content.json`.
