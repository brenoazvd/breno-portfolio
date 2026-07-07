# Portfólio — Breno Rodrigues Azevedo

Site pessoal de Breno Rodrigues Azevedo, Analista de Dados Pleno no Grupo OEP e
fundador da Lumra Insights. Engenharia de dados, backend, cloud/VPS e automação.

**No ar:** https://brenoazvd.github.io/breno-portfolio/

## Páginas

- **Início** — apresentação e principais competências
- **Projetos** — o que já construí, com o fluxo de cada solução
- **Sobre** — trajetória em linha do tempo
- **Currículo** — CV completo; exporta para PDF pela impressão do navegador
  (abra `/#/cv` e use Ctrl+P → Salvar como PDF)
- **Contato** — e-mail e telefone

## Stack

React · TypeScript · Vite · Tailwind CSS · React Router (HashRouter)

## Rodar local

```bash
npm install
npm run dev
```

## Build e deploy

```bash
npm run build    # gera dist/
npm run preview  # serve o build local
```

O push na branch `main` dispara o workflow em `.github/workflows/deploy-pages.yml`,
que faz o build e publica no GitHub Pages.
