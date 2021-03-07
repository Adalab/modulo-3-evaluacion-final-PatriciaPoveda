const getApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) =>
      data.results.map((character) => {
        return {
          name: character.name,
          image: character.image,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          episode: character.episode,
          id: character.id,
        };
      })
    );
};

export default getApi;
