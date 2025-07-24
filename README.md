# Machinery Management System

Este é um projeto full-stack para gerenciamento de máquinas, composto por uma API backend construída com NestJS e uma aplicação frontend construída com Angular.

## 🏛️ Estrutura do Projeto

O repositório está organizado em duas pastas principais:

```
machinery/
├── 📄 README.md       # Este arquivo
├── 🐳 docker-compose.yml # Orquestrador dos containers
├── 📁 api/           # Aplicação Backend (NestJS) com seu Dockerfile
└── 📁 frontend/       # Aplicação Frontend (Angular) com seu Dockerfile
```

Cada subpasta (`api/` e `frontend/`) contém seu próprio `README.md` com instruções detalhadas sobre sua arquitetura e dependências.

## 🛠️ Tecnologias Utilizadas

| Área         | Tecnologia                                                 |
| :----------- | :--------------------------------------------------------- |
| **Backend**  | NestJS, TypeScript, TypeORM, PostgreSQL, Swagger (OpenAPI) |
| **Frontend** | Angular, TypeScript, Angular Material, SCSS, RxJS          |
| **Ambiente** | Node.js, npm, Docker, Docker Compose                       |

## 🚀 Guia de Execução com Docker (Recomendado)

Esta é a maneira mais simples de executar todo o ambiente (frontend, backend e banco de dados) com um único comando.

### Pré-requisitos

- [Docker](https://www.docker.com/products/docker-desktop/) e Docker Compose instalados.

### Execução

1.  Na raiz do projeto (`c:/workspace/machinery`), execute o seguinte comando:

    ```bash
    docker-compose up --build
    ```

    O comando `--build` é importante na primeira vez ou após fazer alterações nos arquivos `Dockerfile`.

2.  Aguarde até que todos os containers (db, api, frontend) estejam de pé e estáveis.

✅ **Pronto!** O sistema estará acessível nos seguintes endereços:

- **Aplicação Frontend**: `http://localhost:4200`
- **API Backend**: `http://localhost:3000`
- **Documentação da API (Swagger)**: `http://localhost:3000/api`

Para parar todos os serviços, pressione `CTRL + C` no terminal onde o compose está rodando e depois execute:

```bash
docker-compose down
```

---

## ⚙️ Guia de Execução Manual (Alternativo)

Para executar o sistema completo sem Docker, você precisará de dois terminais: um para o backend e outro para o frontend.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (v18 ou superior)
- [npm](https://www.npmjs.com/)
- Uma instância do [PostgreSQL](https://www.postgresql.org/download/) em execução.

### 1. Executar o Backend (API)

Abra o **primeiro terminal** e siga os passos:

1.  **Navegue até a pasta da API:**

    ```bash
    cd api
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Copie o arquivo `.env.example` para `.env` e preencha com as credenciais do seu banco de dados.

    ```bash
    copy .env.example .env
    ```

4.  **Altere o arquivo de proxy do front end**
    Altere o arquivo [proxy.conf.json](https://github.com/belloLucas/machinery/blob/main/frontend/proxy.conf.json), na linha 3, para apontar diretamente para o localhost:

    ```bash
    "target": "http://api:3000", <--- Para rodar com docker (default)
    "target": "http://localhost:3000", <--- Para rodar manualmente
    ```

5.  **Inicie o servidor da API:**
    ```bash
    npm run start:dev
    ```

✅ O backend estará em execução em `http://localhost:3000`. A documentação da API (Swagger) estará disponível em `http://localhost:3000/api`.

---

### 2. Executar o Frontend

Abra um **segundo terminal** e siga os passos:

1.  **Navegue até a pasta do frontend:**

    ```bash
    cd frontend
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Inicie a aplicação Angular:**
    ```bash
    npm start
    ```

✅ A aplicação frontend estará disponível em `http://localhost:4200`.

## 📖 Mais Detalhes

Para informações mais aprofundadas sobre cada parte do projeto, consulte os respectivos arquivos README:

- **[Backend README](https://github.com/belloLucas/machinery/blob/main/api/README.md)**
- **[Frontend README](https://github.com/belloLucas/machinery/blob/main/frontend/README.md)**
