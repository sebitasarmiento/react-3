import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BaseColaboradores } from "./data/object";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Alert from "./components/Alert";
import Buscador from "./components/Buscador";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filteredColaboradores, setFilteredColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState({ type: null, message: "" });

  const handleSearch = (searchTerm) => {
    const filtered = colaboradores.filter((colaborador) => {
      return colaborador.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredColaboradores(filtered);
  };

  const addColaborador = (newColaborador) => {
    setColaboradores([...colaboradores, newColaborador]);
    setFilteredColaboradores([...colaboradores, newColaborador]);
  };

  return (
    <div>
      <h1>Lista de Colaboradores</h1>
      <div>
        <Buscador onSearch={handleSearch} />
        <Listado colaboradores={colaboradores} filteredColaboradores={filteredColaboradores} />
         <Formulario addColaborador={addColaborador} setAlert={setAlert} />
        {alert.message && <Alert type={alert.type} message={alert.message} />}
      </div>
    </div>
  );
}

export default App;
