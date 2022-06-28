# Rick and Morty
Este é um projeto de uma aplicaçao web para consulta de informações dos personagens de Rick and Morty, um clássico cartoon. As principais ferramentas utilizadas nesta aplicaçao foram: 
- Next.js
- GraphQL
- Tailwind CSS
- Context API
- Cypress E2E


## Funcionalidades
A aplicação web permite que o usuário pesquise informações sobre cada personagem de Rick and Morty, como nome, data de criação, espécie, entre outras. Ao filtrar os personagens por espécie, o usuário consegue então adicionar para sua lista de favoritos, assim como remover cada um dos personagens.

- **Buscar personagens por nome**
- **Filtrar personagens por espécie**
- **Adicionar e remover personagens dos favoritos**


## Começando
Para iniciar o projeto em sua máquina, rode os seguintes comandos em seu terminal:

```bash
git clone
cd rick_and_morty
yarn install
yarn dev
```

Para executar os testes E2E, sirva a aplicação e execute o cypress em terminais diferentes:

Terminal 1:
```bash
yarn dev
```

Terminal 2:
```bash
yarn cypress open
```
