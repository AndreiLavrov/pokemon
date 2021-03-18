import {
  LOAD_POKEMONS_LIST_SUCCESS,
  LOAD_ONE_POKEMON_SUCCESS,
} from "../actions/types/main";

const initialState = {
  pokemonsList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_POKEMONS_LIST_SUCCESS:
      const { results } = action.response;

      return {
        ...state,
        pokemonsList: results,
      };

    case LOAD_ONE_POKEMON_SUCCESS:
      const { index, response } = action;

      const modifiedItem = {
        ...state.pokemonsList[index],
        ...response,
      };

      const modifaedPokemonsList = [...state.pokemonsList];
      modifaedPokemonsList.splice(index, 1, modifiedItem);

      return {
        ...state,
        pokemonsList: modifaedPokemonsList,
      };

    default:
      return state;
  }
}
