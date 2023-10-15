// Formulario.js
import React, { useState } from "react";

const Formulario = ({ setAlert, addColaborador }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormComplete = () => {
    return (
      formData.nombre.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.edad.trim() !== "" &&
      formData.cargo.trim() !== "" &&
      formData.telefono.trim() !== "" &&
      formData.email.includes("@") &&
      /^\d+$/.test(formData.telefono)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormComplete()) {
      setAlert({
        type: "danger",
        message: "Por favor ingresa tus datos válidos.",
      });
    } else {
      const newColaborador = {
        id: Date.now(), // Generate a unique ID (you can adjust this as needed)
        nombre: formData.nombre,
        correo: formData.email,
        edad: formData.edad,
        cargo: formData.cargo,
        telefono: formData.telefono,
      };

      addColaborador(newColaborador);

      setFormData({
        nombre: "",
        email: "",
        edad: "",
        cargo: "",
        telefono: "",
      });

      setAlert({ type: "success", message: "Registro exitoso" });
    }
  };

  return (
    <div className="formulario">
      <h2 className="form-title">Agregar colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            type="text"
            placeholder="Nombre del colaborador"
          />
        </div>
        <div className="input-container">
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            placeholder="Email del colaborador"
          />
        </div>
        <div className="input-container">
          <input
            name="edad"
            value={formData.edad}
            onChange={handleInputChange}
            type="number"
            placeholder="Edad del colaborador"
          />
        </div>
        <div className="input-container">
          <input
            name="cargo"
            value={formData.cargo}
            onChange={handleInputChange}
            type="text"
            placeholder="Cargo del colaborador"
          />
        </div>
        <div className="input-container">
          <input
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            type="number"
            placeholder="Telefono del colaborador"
          />
        </div>

        <button type="submit" className="btn btn-primary">Agregar colaborador</button>
      </form>
    </div>
  );
};

export default Formulario;
