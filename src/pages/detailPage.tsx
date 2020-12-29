import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPokemonResponse } from "../interfaces/pokemonResponse.interface";

export const DetailPage = () => {
  const { pokemon } = useParams<{ pokemon: string }>();

  const [pokemonDetail, setPokemonDetail] = useState<IPokemonResponse>();
  const urlBase = "https://pokeapi.co/api/v2/pokemon/";
  const urlImgBase =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const normalUrlImg = urlImgBase + pokemonDetail?.id + ".png";
  const shinyUrlImg = urlImgBase + "shiny/" + pokemonDetail?.id + ".png";

  const getPokemon = async () => {
    const url = urlBase + pokemon;
    try {
      const res = await axios.get(url);
      console.log("res", res);
      setPokemonDetail(res.data);
    } catch {}
  };

  useEffect(() => {
    getPokemon();
  }, [pokemon]);

  return (
    <div className="detailPokemon">
      <img src={normalUrlImg} height="60em" alt={normalUrlImg} />
      <div>
        <div>
          <span>Pokedex Number:</span>
          {pokemonDetail?.id}
        </div>
        <div>
          <span>Name:</span>
          {pokemonDetail?.name.toUpperCase()}
        </div>
        <div>
          <span>Height:</span>
          {pokemonDetail?.height}fts
        </div>
        <div>
          <span>Weigth:</span>
          {pokemonDetail?.weight}lbs
        </div>
      </div>
      <img src={shinyUrlImg} height="60em" alt={shinyUrlImg} />
    </div>
  );
};
