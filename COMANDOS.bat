@echo off
echo ========================================
echo    LOJA WHATSAPP ECOMMERCE - DEPLOY
echo ========================================
echo.

echo IMPORTANTE: Antes de continuar, edite os arquivos:
echo - package.json (substitua professor-dev pelo seu usuario)
echo - client/package.json (substitua professor-dev pelo seu usuario)
echo.

pause

echo Iniciando deploy...
echo.

echo 1. Inicializando Git...
git init

echo 2. Adicionando arquivos...
git add .

echo 3. Fazendo commit...
git commit -m "Loja ecommerce inicial"

echo 4. Definindo branch principal...
git branch -M main

echo.
echo ATENCAO: Digite o comando abaixo substituindo SEU_USUARIO:
echo git remote add origin https://github.com/SEU_USUARIO/loja-whatsapp-ecommerce.git
echo.
pause

echo 5. Enviando para GitHub...
echo Digite: git push -u origin main
echo.
pause

echo 6. Deploy no GitHub Pages...
cd client
npm run deploy

echo.
echo ========================================
echo           DEPLOY CONCLUIDO!
echo ========================================
echo.
echo Sua loja estara disponivel em:
echo https://SEU_USUARIO.github.io/loja-whatsapp-ecommerce
echo.
pause