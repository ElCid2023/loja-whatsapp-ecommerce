# 🚀 Instruções de Deploy

## ✅ Arquivos Preparados

Sua loja está pronta para deploy! Os arquivos foram configurados e o build foi gerado.

## 📋 Próximos Passos

### 1. Editar URLs (IMPORTANTE)
Antes de fazer o deploy, substitua `professor-dev` pelo seu username do GitHub nos arquivos:
- `package.json` (linha homepage)
- `client/package.json` (linha homepage)

### 2. Comandos para Deploy

```bash
# 1. Inicializar Git
git init

# 2. Adicionar arquivos
git add .

# 3. Fazer commit
git commit -m "Loja ecommerce inicial"

# 4. Definir branch principal
git branch -M main

# 5. Conectar com GitHub (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/loja-whatsapp-ecommerce.git

# 6. Enviar arquivos
git push -u origin main

# 7. Deploy no GitHub Pages
cd client
npm run deploy
```

### 3. Configurar GitHub Pages
1. Vá em Settings > Pages no seu repositório
2. Source: Deploy from a branch
3. Branch: gh-pages
4. Folder: / (root)

## 🌐 URLs da Loja

Após o deploy, sua loja estará disponível em:
- **Principal:** https://SEU_USUARIO.github.io/loja-whatsapp-ecommerce
- **Admin:** https://SEU_USUARIO.github.io/loja-whatsapp-ecommerce/admin.html
- **Tutorial:** https://SEU_USUARIO.github.io/loja-whatsapp-ecommerce/TUTORIAL.html

## 🛠️ Gerenciar Produtos

Use o arquivo `admin.html` para gerenciar produtos sem programação:
1. Abra `admin.html` no navegador
2. Adicione/edite produtos
3. Exporte o código
4. Cole em `client/src/data/products.js`
5. Faça novo deploy

## 📞 Suporte

WhatsApp: 11 914405349
Email: contato@novidadesp.com.br