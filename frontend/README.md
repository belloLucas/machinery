# Machinery Management - Frontend

Esta é a aplicação frontend para o sistema de Gerenciamento de Máquinas, construída com Angular e Angular Material. A interface permite que os usuários visualizem, cadastrem, editem e vejam detalhes das máquinas, consumindo a [API de backend]().

## ✨ Features

- **Dashboard Interativa**: Lista todas as máquinas cadastradas com status visual e acesso rápido aos detalhes.
- **Cadastro e Edição**: Formulário reativo e unificado para criar e atualizar máquinas, com validação de dados em tempo real.
- **Página de Detalhes**: Exibe informações completas de uma máquina, incluindo um mapa interativo do Google Maps com sua localização.
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela.
- **Feedback ao Usuário**: Indicadores de carregamento (spinners) e notificações (snackbars) para uma experiência de usuário mais clara.
- **Roteamento Completo**: Navegação bem definida entre as páginas da aplicação.

## 🛠️ Tecnologias Utilizadas

- [Angular](https://angular.io/) (v19+)
- [TypeScript](https://www.typescriptlang.org/)
- [Angular Material](https://material.angular.io/)
- [SCSS](https://sass-lang.com/)
- [RxJS](https://rxjs.dev/)

## 🚀 Começando

Siga estas instruções para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (v18 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- A **API de backend** do projeto deve estar em execução (normalmente em `http://localhost:3000`).

### Instalação

1.  Navegue até a pasta do frontend no seu terminal:

    ```bash
    cd machinery/frontend
    ```

2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```

### Executando a Aplicação

1.  Inicie o servidor de desenvolvimento do Angular:

    ```bash
    npm start
    ```

    ou

    ```bash
    ng serve
    ```

2.  Abra seu navegador e acesse `http://localhost:4200/`.

A aplicação usa um proxy (`proxy.conf.json`) para redirecionar as chamadas de `/api` para o backend em `http://localhost:3000`, evitando problemas de CORS durante o desenvolvimento.

## 📁 Estrutura do Projeto

A estrutura de pastas foi organizada para separar responsabilidades e facilitar a manutenção:

```
src/app/
├── core/
│   ├── models/       # Interfaces e Enums (Machine, MachineStatus)
│   ├── dto/          # Data Transfer Objects para a API
│   └── services/     # Serviços para comunicação com a API (MachineService)
│
├── features/
│   ├── machine-list/   # Componente da Dashboard
│   ├── machine-detail/ # Componente da página de Detalhes
│   └── machine-form/   # Componente do formulário de Criar/Editar
│
├── app.component.*   # Componente raiz (layout principal com toolbar)
├── app.config.ts     # Configuração da aplicação (HttpClient, etc.)
└── app.routes.ts     # Definição das rotas de navegação
```

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm start`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila a aplicação para produção na pasta `dist/`.
- `npm test`: Executa os testes unitários via Karma.
- `npm run watch`: Compila em modo de desenvolvimento e observa as alterações nos arquivos.
