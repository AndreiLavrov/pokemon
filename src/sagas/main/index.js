import { takeEvery } from "redux-saga/effects";

// handlers for action events
import { loadPokemonsList, loadOnePokemon } from "./main";

// action events types
import { LOAD_POKEMONS_LIST, LOAD_ONE_POKEMON } from "../../actions/types/main";

export default function* () {
  yield takeEvery(LOAD_POKEMONS_LIST, loadPokemonsList);
  yield takeEvery(LOAD_ONE_POKEMON, loadOnePokemon);
}
