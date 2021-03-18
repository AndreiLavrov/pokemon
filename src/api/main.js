const mainUrl = "https://pokeapi.co/api/v2";

export const getPokemonsListReq = async () => {
  try {
    const response = await fetch(`${mainUrl}/pokemon`);
    const data = await response.json();
    return data;
  } catch (err) {
    // here could be error listener
    console.error(err);
  }
};

export const getOnePokemonReq = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    // here could be error listener
    console.error(err);
  }
};
