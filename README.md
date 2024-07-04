# Node.js Google OAuth2 Authentication API

Esta é uma API simples em Node.js que utiliza OAuth2 para autenticar usuários através do Google. O projeto utiliza as bibliotecas `express`, `express-session`, `passport`, e `passport-google-oauth2`.

## Dependências

- nodemon: ^3.1.4
- express: ^4.19.2
- express-session: ^1.18.0
- passport: ^0.7.0
- passport-google-oauth2: ^0.2.0

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/oThisgo/oAuth2_API.git
    cd oAuth2_API
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Crie um projeto no Google Developers Console e obtenha suas credenciais OAuth2 (ID do Cliente e Chave Secreta do Cliente).

4. Substitua as variáveis `GOOGLE_CLIENT_ID` e `GOOGLE_CLIENT_SECRET` no arquivo `auth.js` com suas credenciais do Google.

## Uso

1. Execute o servidor:
    ```sh
    npm start
    ```

2. Abra o navegador e acesse `http://localhost:8001` para iniciar a autenticação com o Google.
