import Head from "next/head";
import Image from "next/image";
import heroImage from "../public/assets/hero-image.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick e Morty</title>
        <meta
          name="description"
          content="Informações detalhadas sobre os personagens de Rick and Morty"
        />
      </Head>
      <main className="container pt-20 flex flex-col items-center px-4">
        <Image id="hero_image" src={heroImage} width="489px" height="149px" />
        <h1 id="hero_heading" className="text-3xl my-8 max-w-sm text-center">
          Conheça tudo sobre os seus personagens favoritos de Rick and Morty!
        </h1>
        <Link href="/pesquisa">
          <a
            id="hero_cta"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
          >
            Começar
          </a>
        </Link>
      </main>
    </>
  );
}
