import Header from "../components/Header";
import "../styles/globals.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { FavoriteProvider } from "../providers/Favorites";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <FavoriteProvider>
        <ApolloProvider client={client}>
          <div className="overflow-hidden relative h-auto pb-20">
            <Header />
            <Component {...pageProps} />
          </div>
        </ApolloProvider>
      </FavoriteProvider>
    </>
  );
};

export default MyApp;
