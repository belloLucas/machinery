# Machinery Management API

API RESTful construída com NestJS para gerenciamento de máquinas, permitindo operações de CRUD, filtragem e consulta de status.

## ✨ Features

- **CRUD Completo**: Crie, leia, atualize e delete máquinas.
- **Validação de Dados**: Validação de entrada usando `class-validator` e `class-transformer`.
- **Documentação de API**: Geração automática de documentação interativa com Swagger (OpenAPI).
- **Configuração Centralizada**: Gerenciamento de variáveis de ambiente com `@nestjs/config`.
- **Banco de Dados**: Integração com PostgreSQL usando TypeORM.
- **Filtragem**: Endpoint para listar máquinas por status.

## 🛠️ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Swagger](https://swagger.io/)

## 🚀 Começando

Siga estas instruções para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (v18 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Uma instância do [PostgreSQL](https://www.postgresql.org/download/) em execução.

### Instalação

1.  **Instale as dependências**

    ```bash
    npm install
    ```

2.  **Configure as variáveis de ambiente**
    Copie o arquivo de exemplo `.env.example` para um novo arquivo chamado `.env`.

    ```bash
    copy .env.example .env
    ```

    Em seguida, edite o arquivo `.env` com as credenciais do seu banco de dados PostgreSQL.

    ```env
    # filepath: /machinery/api/.env
    PORT=3000
    DB_HOST=localhost
    DB_PORT=5432
    DB_USERNAME=postgres
    DB_PASSWORD=root
    DB_DATABASE=machinery
    ```

### Executando a Aplicação

- **Modo de Desenvolvimento (com watch)**

  ```bash
  npm run start:dev
  ```

- **Modo de Produção**
  ```bash
  npm run build
  npm run start:prod
  ```

A aplicação estará disponível em `http://localhost:3000`.

## 📄 Documentação da API (Swagger)

Após iniciar a aplicação, a documentação interativa da API estará disponível em:

**`http://localhost:3000/api`**

## 🕹️ Endpoints da API

Aqui estão os principais endpoints disponíveis:

| Método  | Rota                       | Descrição                                         |
| :------ | :------------------------- | :------------------------------------------------ |
| `POST`  | `/machines`                | Cria uma nova máquina.                            |
| `GET`   | `/machines`                | Lista todas as máquinas (aceita filtro `status`). |
| `GET`   | `/machines/:id`            | Busca uma máquina pelo seu ID.                    |
| `PATCH` | `/machines/:id`            | Atualiza os dados de uma máquina.                 |
| `GET`   | `/machines/status/:status` | Lista máquinas por um status específico.          |

### Exemplo de Body para `POST /machines`

```json
{
  "name": "Escavadeira CAT 320",
  "location": "Obra Norte - Setor A",
  "latitude": "-23.5505199",
  "longitude": "-46.6333094",
  "status": "operating"
}
```

## 📜 Scripts Disponíveis

- `npm run start`: Inicia a aplicação.
- `npm run start:dev`: Inicia a aplicação em modo de desenvolvimento com watch.
- `npm run build`: Compila o código TypeScript para JavaScript.
- `npm run format`: Formata o código com o Prettier.
- `npm run lint`: Executa o linter para análise de código.
- `npm test`: Executa os testes unitários.
- `npm run test:e2e`: Executa os testes end-to-end.
