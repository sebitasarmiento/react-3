
import React from "react";

const Alert = ({ type, message }) => {
  const alertClass = type === "success" ? "alert alert-success" : "alert alert-danger";

  return (
    <div className={alertClass} role="alert">
      {message}
    </div>
  );
};

export default Alert;
