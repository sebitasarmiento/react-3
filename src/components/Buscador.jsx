import React, { useState } from "react";

const Buscador = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <div>
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        placeholder="Buscar"
        type="text"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Buscador;
