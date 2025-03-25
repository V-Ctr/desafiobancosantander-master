# Linter Action

Este projeto reflete na utilização do GitHub Action para executar um linter em um repositório. Ele inclui um pipeline de CI/CD para garantir a qualidade do código e a entrega contínua.

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

## Desenho do Diagrama

Para visualizar diagramas usando PlantUML, siga os passos abaixo:

1. **Instale o PlantUML**:
    - Você pode instalar o PlantUML como uma extensão no VS Code. Vá para a aba de extensões e procure por "PlantUML".

2. **Instale o Graphviz**:
    - O PlantUML depende do Graphviz para gerar diagramas. Baixe e instale o Graphviz a partir do [site oficial](https://graphviz.gitlab.io/download/).

3. **Crie um arquivo de diagrama**:
    - Crie um arquivo com a extensão `.puml` ou `.plantuml` e adicione o código do diagrama. Por exemplo:
    ```plantuml
    @startuml
    Alice -> Bob: Teste
    @enduml
    ```

4. **Visualize o diagrama**:
    - Abra o arquivo `.puml` no VS Code e use o atalho `Alt + D` para visualizar o diagrama.

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

## Boas Práticas  

Commits frequentes: Faça commits frequentes para manter o histórico de mudanças claro.
Testes automatizados: Sempre escreva testes para seu código e execute-os no pipeline de CI.
Revisões de código: Realize revisões de código para garantir a qualidade e a consistência.
Documentação: Mantenha a documentação atualizada para facilitar o entendimento do projeto.
Gerenciamento de dependências: Mantenha as dependências atualizadas e remova as que não são mais necessárias.

# Contribuição
1. Faça um fork do projeto.
2. Crie uma branch para sua feature (git checkout -b feature/nova-feature).
3. Commit suas mudanças (git commit -am 'Adiciona nova feature').
4. Faça o push para a branch (git push origin feature/nova-feature).
5. Abra um Pull Request.
