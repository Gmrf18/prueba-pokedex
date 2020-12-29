// import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { IPokemon } from "../interfaces/pokemonsResponse.interface";

interface Props {
  text: string;
}

export const PokemonList: React.FC<Props> = ({ text }) => {
  const History = useHistory();
  const url = "https://pokeapi.co/api/v2/pokemon?limit=650";
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
  const getPokemons = async () => {
    try {
      const res = await axios.get(url);
      setPokemonList(res.data.results);
    } catch {}
  };

  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  const pokemonsRender = pokemonList.map((pokemon: IPokemon) => {
    const numberPokemon = pokemon.url.split("/")[6];
    const pokemonImgUrl = imgUrl + numberPokemon + ".svg";
    return (
      <div
        key={numberPokemon}
        onClick={() => History.push(`detail/${pokemon.name}`)}
      >
        <img src={pokemonImgUrl} alt="pokemonImgUrl" height="55em"></img>{" "}
        <div>{pokemon.name}</div>
      </div>
    );
  });
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="">
      <h4>{text}</h4>
      <div className="container">
        <div className="pokemonList">{pokemonsRender}</div>
      </div>
    </div>
  );
};
