import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

const Card = ({
  name,
  image,
  species,
  created,
  episode,
  id,
  character,
  status,
  index,
}) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <li className="card flex justify-center">
      {modal && (
        <Modal
          name={name}
          image={image}
          species={species}
          created={created}
          episode={episode}
          id={id}
          modal={modal}
          handleModal={handleModal}
          character={character}
          status={status}
          index={index}
        />
      )}

      <div
        className="max-w-sm rounded overflow-hidden shadow-lg w-full cursor-pointer"
        onClick={() => handleModal()}
      >
        <div className="relative w-auto h-48">
          <Image
            className="object-cover"
            src={image}
            alt="Sunset in the mountains"
            layout="fill"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
        </div>
      </div>
    </li>
  );
};

export default Card;
