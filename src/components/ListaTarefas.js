import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import ClasseTarefas from './ClasseTarefas';

const ListaTarefas = () => {
  return (
    <div>
      <Header />
      <ClasseTarefas />
    </div>
  );
}

export default ListaTarefas;
