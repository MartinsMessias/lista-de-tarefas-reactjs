import React from "react";
import { Alert } from "reactstrap";

const Alerta = ({ isVisible, message }) => {
  return (
    <div>
      <Alert color="danger" isOpen={isVisible} className="alerta">
        {message}
      </Alert>
    </div>
  );
};

export default Alerta;
