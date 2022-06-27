const Pagination = ({ prev, next, fetchFunction, variables }) => {
  const nextPage = {
    ...variables,
    page: next,
  };

  const prevPage = {
    ...variables,
    page: prev,
  };

  return (
    <div className="container">
      <div className="flex gap-2 justify-between mt-14 flex-wrap px-4 sm:px-0">
        {prev != null ? (
          <button
            className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-bold py-2 px-4 rounded"
            onClick={() => {
              fetchFunction({
                variables: prevPage,
              });
            }}
          >
            Voltar
          </button>
        ) : (
          <div></div>
        )}
        {next != null ? (
          <button
            className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-bold py-2 px-4 rounded"
            onClick={() => {
              fetchFunction({
                variables: nextPage,
              });
            }}
          >
            Próximo
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
