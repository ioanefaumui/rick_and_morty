import Head from "next/head";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_CHARS } from "../graphql/queries";
import List from "../components/List";
import handleFilter from "./utils/handleFilter";
import Pagination from "../components/Pagination";

const PesquisaPage = () => {
  const [name, setName] = useState("");
  const [alien, setAlien] = useState(false);
  const [human, setHuman] = useState(false);
  const [variables, setVariables] = useState({});

  const [getCharsByName, { loading, error, data }] = useLazyQuery(GET_CHARS);

  const handleCharSpecie = () => {
    return alien && human
      ? "todos"
      : alien
      ? "aliens"
      : human
      ? "humanos"
      : " todos";
  };

  useEffect(() => {
    handleFilter(alien, human, name, setVariables);
  }, [alien, human, name]);

  return (
    <>
      <Head>
        <title>Rick and Morty | Pesquisa</title>
        <meta
          name="description"
          content="Encontre todas as informações dos personagens de Rick and Morty"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container pt-8 px-4 md:px-9">
        <form
          id="search_form"
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col items-center"
        >
          <div className="flex justify-center items-center mb-8">
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline"
                id="char_input"
                type="text"
                placeholder={`Personagem: ${handleCharSpecie()}`}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button
              id="fetch_button"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => getCharsByName({ variables })}
            >
              Buscar
            </button>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-9 text-center">
            <span>Filtro:</span>
            <div className="flex justify-center gap-2">
              <label htmlFor="alien">Alien</label>
              <input
                className="h-6 w-6 accent-cyan-500"
                type="checkbox"
                id="alien"
                name="alien"
                onChange={() => setAlien(!alien)}
              />
            </div>
            <div className="flex justify-center gap-2">
              <label htmlFor="alien">Humano</label>
              <input
                className="h-6 w-6 accent-cyan-500"
                type="checkbox"
                id="alien"
                name="alien"
                onChange={() => setHuman(!human)}
              />
            </div>
          </div>
        </form>
      </div>

      <Pagination
        prev={data?.characters.info.prev}
        next={data?.characters.info.next}
        fetchFunction={getCharsByName}
        variables={variables}
      />

      <div className="container mt-8">
        {loading && "Carregando..."}
        {error && "Algo deu errado. Tente novamente mais tarde."}
        {data?.characters?.results.length == 0 &&
          "Nenhum resultado encontrado."}
        <List list={data?.characters?.results} />
      </div>
    </>
  );
};

export default PesquisaPage;
