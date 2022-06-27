import CloseIcon from "./Icons/CloseIcon";
import Image from "next/image";
import { useContext } from "react";
import { FavoriteContext } from "../providers/Favorites";
import { useRouter } from "next/router";

const Modal = ({
  name,
  image,
  species,
  created,
  episode,
  modal,
  handleModal,
  character,
  status,
}) => {
  const { addFavorite, removeFavorite } = useContext(FavoriteContext);
  const router = useRouter();
  const isFavorite = router.pathname === "/favoritos";

  const handleDate = (created) => {
    const date = new Date(created);
    return date.toLocaleString("pt-BR", { timeZone: "UTC" });
  };

  const closeModal = (e) => {
    e.stopPropagation();
    handleModal(!modal);
  };

  const handleClick = () => {
    if (isFavorite) {
      return removeFavorite(character);
    }
    return addFavorite(character);
  };

  return (
    <div className="bg-black/[0.75] fixed z-20 w-full h-screen top-0 left-0 flex justify-center items-center">
      <div className="relative max-w-sm rounded overflow-hidden shadow-lg w-96 m-4 bg-white p-4 text-slate-600">
        <button
          className="p-2 self-end mb-3 bg-slate-100 rounded absolute top-6 border-2 right-6 z-10"
          onClick={(e) => closeModal(e)}
        >
          <CloseIcon />
        </button>
        <div className="relative w-full h-60 rounded overflow-hidden">
          <Image
            className="object-cover"
            src={image}
            alt="Sunset in the mountains"
            layout="fill"
          />
        </div>
        <p className="my-2 font-bold text-xl text-slate-800">{name}</p>
        <span>
          <b>Status:</b>{" "}
          {status.includes("unk")
            ? "Desconhecido"
            : status.includes("liv")
            ? "Vivo"
            : "Morto"}
        </span>
        <p>
          <b>Espécie:</b> {species.includes("um") ? "Humano" : "Alien"}
        </p>
        <p>
          <b>Quantidade de episódios:</b> {episode.length}
        </p>
        <hr className="my-2" />
        <p>
          <b>Criado em:</b> {handleDate(created)}
        </p>
        <button
          className={`${
            isFavorite
              ? "bg-red-500 hover:bg-red-600"
              : "bg-cyan-500 hover:bg-cyan-600"
          } text-white font-bold py-2 px-4 w-full mt-4 rounded`}
          onClick={handleClick}
        >
          {isFavorite ? "Remover" : "Favoritar"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
