import { LOAD_POKEMONS_LIST } from "../types/main";
import { LOAD_ONE_POKEMON } from "../types/main";

export const loadPokemonsList = () => ({
  type: LOAD_POKEMONS_LIST,
});

export const loadOnePokemon = (url, index) => ({
  type: LOAD_ONE_POKEMON,
  url,
  index,
});
