import { createContext, useState } from "react";

export const FavoriteContext = createContext([]);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (character) => {
    const charExists = favorites.find(
      (favoriteCharacter) => favoriteCharacter.id === character.id
    );

    if (!charExists) {
      setFavorites([...favorites, character]);
      alert(`SUCESSO: ${character.name} foi adicionado aos favoritos!`);
      return;
    }

    alert(`ERRO: ${character.name} já foi adicionado!`);
  };

  const removeFavorite = (character) => {
    const newFavorites = favorites.filter(
      (favoriteCharacter) => favoriteCharacter.id !== character.id
    );
    setFavorites(newFavorites);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
