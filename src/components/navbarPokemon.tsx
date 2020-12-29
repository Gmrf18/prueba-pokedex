import React from "react";
import { useHistory } from "react-router-dom";

interface Props {
  title: string;
}
export const NavbarPokemon: React.FC<Props> = ({ title }) => {
  const History = useHistory();
  return (
    <div className="navbar">
      <img
        onClick={() => {
          History.push("/home");
        }}
        src="https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-28.jpg"
        alt="pokedex"
        height="50em"
      ></img>
      <div className="title">{title}</div>
    </div>
  );
};
