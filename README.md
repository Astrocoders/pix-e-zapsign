<p align="center">
  <img src="./screenshot.png" /> 
  <br />
</p>

# Pix e ZapSign

Crie uma loja pix com contratação de servicos que automaticamente pede a assinatura de um contrato de prestacão

# Como subir sua própria versão

### No Vercel

Requisitos:
1. Crie um documento modelo no ZapSign
1. Crie sua conta no http://conta.vanna.app/
1. Enviei seus dados e aguarde aprovação
1. Clique no botão abaixo

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAstrocoders%2Fpix-e-zapsign&env=VANNA_ID,VANNA_SECRET,NEXT_PUBLIC_SITE_NAME,ZAPSIGN_MODELO_ID)

## Configuração necessária do Vanna

| Env var | Descrição |
| ------- | ------- |
| VANNA_ID | Chave da API obtida na plataforma |
| VANNA_SECRET | Chave da API obtida na plataforma |
| NEXT_PUBLIC_SITE_NAME | Nome do seu site |
| ZAPSIGN_MODELO_ID | Id do modelo na ZapSign |
| ZAPSIGN_TOKEN | Token de acesso ZapSign |

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Acknowledgements

This was heavily inspired in https://github.com/vercel/nextjs-subscription-payments codebase!
