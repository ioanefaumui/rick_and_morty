# Rick and Morty
Este é um projeto de uma aplicaçao web para consulta de informações dos personagens de Rick and Morty, um clássico cartoon. As principais ferramentas e técnicas utilizadas nesta aplicaçao foram: 
- Next.js
- GraphQL
- Tailwind CSS
- Context API
- Cypress E2E
- Responsividade
- Componentização


## Funcionalidades
A aplicação web permite que o usuário pesquise informações sobre cada personagem de Rick and Morty, como nome, data de criação, espécie, entre outras. Ao filtrar os personagens por espécie, o usuário consegue então adicionar para sua lista de favoritos, assim como remover cada um dos personagens.

- **Buscar personagens por nome**
- **Filtrar personagens por espécie**
- **Visualização detalhada do personagem**
- **Adicionar e remover personagens dos favoritos**


## Começando
Para iniciar o projeto em sua máquina, rode os seguintes comandos em seu terminal:

```bash
git clone https://github.com/ioanefaumui/rick_and_morty.git
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

## Mídia
- **Página inicial**
![image](https://user-images.githubusercontent.com/73440390/176075870-5a8695fa-ff37-4d8e-abab-735041056183.png)

- **Página de buscar personagens**
![image](https://user-images.githubusercontent.com/73440390/176076355-1c4d722a-2cb3-452e-ac5c-ce3dcb5ae35a.png)

- **Página de favoritos**
![image](https://user-images.githubusercontent.com/73440390/176076454-300a220a-d08d-4cb5-8633-5b6698811afb.png)
