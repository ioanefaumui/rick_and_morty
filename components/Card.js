import Image from "next/image";

const Card = ({ name, image, key }) => {
  return (
    <li key={key} className="flex justify-center">
      <div class="max-w-sm rounded overflow-hidden shadow-lg w-full">
        <div className="relative w-auto h-48">
          <Image
            class="object-cover"
            src={image}
            alt="Sunset in the mountains"
            layout="fill"
          />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{name}</div>
        </div>
      </div>
    </li>
  );
};

export default Card;
