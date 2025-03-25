
## Pipeline de CI/CD

### CI Pipeline

1. **Checkout code**: Faz o checkout do código do repositório.
2. **Set up Node.js**: Configura o ambiente Node.js.
3. **Install dependencies**: Instala as dependências do projeto.
4. **Run tests**: Executa os testes.
5. **Build project**: Constrói o projeto.
6. **Upload artifact**: Faz o upload do artefato gerado.
7. **Notify on failure**: Notifica em caso de falha.

### CD Pipeline

1. **Checkout code**: Faz o checkout do código do repositório.
2. **Download artifact**: Faz o download do artefato gerado.
3. **Create GitHub Release**: Cria uma release no GitHub.
4. **Notify on failure**: Notifica em caso de falha.
5. **Deploy to Test Environment**: Faz o deploy para o ambiente de teste.
6. **Notify on failure**: Notifica em caso de falha.
7. **Manual approval for production deploy**: Requer aprovação manual para deploy em produção.
8. **Deploy to GitHub Pages**: Faz o deploy para o GitHub Pages.
9. **Notify on failure**: Notifica em caso de falha.

## Configuração Inicial

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/linter-action.git
    cd linter-action
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Compile o projeto:
    ```sh
    npm run build
    ```

## Uso

Para usar esta GitHub Action, adicione o seguinte ao seu workflow:

```yml
name: Lint Code

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '12'

      - name: Install dependencies
        run: npm install

      - name: Run linter
        uses: ./ # Usa a ação do repositório atual
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}