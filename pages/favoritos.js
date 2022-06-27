import List from "../components/List";
import { useContext } from "react";
import { FavoriteContext } from "../providers/Favorites";
import Head from "next/head";

const FavoritosPage = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <>
      <Head>
        <title>Rick and Morty | Favoritos</title>
        <meta
          name="description"
          content="Adicione personagens para sua lista de favoritos"
        />
      </Head>

      <div className="container">
        <h1 className="text-3xl font-bold my-8">
          {favorites?.length > 0
            ? "Meus favoritos"
            : "Nenhum personagem adicionado"}
        </h1>
        <hr />
        <List favorites={favorites} />
      </div>
    </>
  );
};

export default FavoritosPage;
