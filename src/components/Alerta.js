import React, { useState, useEffect } from "react";
import { Alert } from "reactstrap";

const Alerta = ({ isVisible, message }) => {
  const [visible, setVisible] = useState(isVisible);
  const onDismiss = () => setVisible(false);

  useEffect(() => {
    setVisible(isVisible)
  }, [isVisible])

  return (
    <div>
      <Alert
        color="danger"
        isOpen={visible}
        toggle={onDismiss}
        className="alerta mt-3"
      >
        {message}
      </Alert>
    </div>
  );
};

export default Alerta;
