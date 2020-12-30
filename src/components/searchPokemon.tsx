import { useHistory } from "react-router-dom";

export const SearchPokemon = () => {
  const History = useHistory();
  let pokemon = "";

  const changeValue = (e: any) => {
    const { value } = e.target;
    pokemon = value;
  };

  const toDetail = () => {
    History.push(`/detail/${pokemon}`);
  };

  const onKeyDown = (e: any) => {
    if (e.key === "Enter") {
      toDetail();
    }
  };

  return (
    <div className="searchPokemon">
      <input
        type="text"
        placeholder="Introduce the name or number of pokemon"
        onChange={changeValue}
        onKeyDown={onKeyDown}
      />
      <button onClick={toDetail}>Send</button>
    </div>
  );
};
