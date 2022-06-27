const handleFilter = (alien, human, name, setVariables) => {
  if (human && alien) {
    setVariables({
      name,
    });
    return;
  }
  if (alien) {
    setVariables({
      name,
      species: "alien",
    });
    return;
  }
  if (human) {
    setVariables({
      name,
      species: "human",
    });
    return;
  } else {
    setVariables({
      name,
    });
    return;
  }
};

export default handleFilter;
