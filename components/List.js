import { useRouter } from "next/router";
import Card from "./Card";

const List = ({ list, favorites }) => {
  const router = useRouter();

  const characters = router.pathname == "/favoritos" ? favorites : list;

  return (
    <ul className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-8 px-4 md:px-0 mt-8">
      {characters &&
        characters.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            species={item.species}
            created={item.created}
            episode={item.episode}
            character={item}
            id={item.id}
            status={item.status}
          />
        ))}
    </ul>
  );
};

export default List;
