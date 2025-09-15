# 🛍️ Loja WhatsApp Ecommerce

Loja virtual integrada com WhatsApp Business para afiliados e vendas diretas.

## 🚀 Deploy no GitHub Pages

### 1. Configurar Repositório
```bash
git init
git add .
git commit -m "Loja ecommerce inicial"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/loja-whatsapp-ecommerce.git
git push -u origin main
```

### 2. Configurar GitHub Pages
1. Vá em **Settings** > **Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages**
4. Folder: **/ (root)**

### 3. Deploy Automático
```bash
cd client
npm install gh-pages --save-dev
npm run deploy
```

### 4. Acessar Loja
Sua loja estará disponível em:
`https://SEU_USUARIO.github.io/loja-whatsapp-ecommerce`

## 📝 Editar Produtos

### Arquivo Principal: `client/src/data/products.js`

```javascript
{
  id: 7, // ID único
  name: "Nome do Produto",
  price: 999.99,
  category: "Categoria",
  image: "URL_DA_IMAGEM",
  description: "Descrição do produto",
  affiliateLinks: {
    shopee: "SEU_LINK_SHOPEE",
    mercadolivre: "SEU_LINK_MERCADO_LIVRE", 
    amazon: "SEU_LINK_AMAZON"
  },
  tiktokKeywords: ["palavra1", "palavra2", "palavra3"],
  featured: true // Produto em destaque
}
```

### Configurações da Loja: `client/src/data/products.js`
```javascript
export const storeConfig = {
  name: "Sua Loja",
  whatsapp: "5511999999999",
  email: "contato@sualoja.com",
  instagram: "@sualoja",
  tiktok: "@sualoja"
};
```

## 🔄 Atualizar Loja

1. **Editar produtos** em `client/src/data/products.js`
2. **Fazer deploy**:
```bash
cd client
npm run deploy
```

## 📱 Funcionalidades

- ✅ Catálogo de produtos
- ✅ Links de afiliados (Shopee, ML, Amazon)
- ✅ Integração WhatsApp
- ✅ Hub de afiliados
- ✅ Sugestões TikTok
- ✅ Responsivo (mobile/desktop)

## 🛠️ Desenvolvimento Local

```bash
cd client
npm install
npm start
```

Acesse: `http://localhost:3000`