import { call, put } from "redux-saga/effects";

import { getPokemonsListReq, getOnePokemonReq } from "../../api/main";

import {
  LOAD_POKEMONS_LIST_SUCCESS,
  LOAD_ONE_POKEMON_SUCCESS,
} from "../../actions/types/main";

export function* loadPokemonsList(/* actions */) {
  // const { filterList } = action;

  try {
    const response = yield call(getPokemonsListReq);

    yield put({
      type: LOAD_POKEMONS_LIST_SUCCESS,
      response,
    });
  } catch (err) {
    // here action for fail.
    // yield put({ type: LOAD_POKEMONS_LIST_FAILURE });
  }
}

export function* loadOnePokemon(action) {
  const { url, index } = action;
  debugger;

  try {
    const response = yield call(getOnePokemonReq, url);
    debugger;

    yield put({
      type: LOAD_ONE_POKEMON_SUCCESS,
      response,
      index,
    });
  } catch (err) {
    // here action for fail.
    // yield put({ type: LOAD_POKEMONS_LIST_FAILURE });
  }
}
