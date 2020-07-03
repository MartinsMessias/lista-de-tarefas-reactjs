import React from "react";
import { Jumbotron } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";

const Header = () => {
  return (
    <div>
      <Jumbotron
        className="text-center px-1"
        fluid
        style={{
          backgroundColor: "#0065b7",
          color: "#ffffff",
          boxShadow: "rgba(0, 0, 0, 0.51) 0px 10px 10px",
        }}
      >
        <h1 className="display-3">Lista de Tarefas</h1>
        <p className="lead">
          Uma aplicação simples usando ReactJS, para refrescar nossa memória das
          tarefas pendentes.
        </p>
      </Jumbotron>
    </div>
  );
};

export default Header;
