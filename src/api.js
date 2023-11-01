async function fetchPokemonImage(pokemonName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await response.json();

    const imageUrl = data.sprites.front_default;
    const pokeImageElement = document.getElementById("poke-image");
    pokeImageElement.src = imageUrl;
  } catch (error) {
    console.error("Error fetching Pokemon image: ", error);
  }
}

export { fetchPokemonImage };
