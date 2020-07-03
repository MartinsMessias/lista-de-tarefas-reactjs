import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListaTarefas = () => {
  return (
    <div className="container mt-2">
      <Jumbotron className="text-center">
        <h1 className="display-3">Lista de Tarefas</h1>
        <p className="lead">Uma aplicação simples usando ReactJS, para refrescar nossa memória das tarefas pendentes.</p>
      </Jumbotron>
    </div>
  );
}

export default ListaTarefas;
