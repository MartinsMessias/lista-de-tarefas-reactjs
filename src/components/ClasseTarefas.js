import React, { Component } from "react";
import Tarefa from "./Tarefa";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button,
} from "reactstrap";

export default class ClasseTarefas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
      tarefaAtual: {
        texto: "",
        id: "",
      },
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const novaTarefa = this.state.tarefaAtual;
    console.log(typeof novaTarefa);
    if (novaTarefa.texto !== "" && novaTarefa.id !== "") {
      const tarefas = [...this.state.tarefas, novaTarefa];
      this.setState({
        tarefas,
        tarefaAtual: {
          texto: "",
          id: "",
        },
      });
    } else {
      alert("Digite algo antes!");
    }
  };

  handleChange = (e) => {
    this.setState({
      tarefaAtual: {
        texto: e.target.value,
        id: Date.now(),
      },
    });
  };

  deleteTarefa = (id) => {
    const filteredTarefas = this.state.tarefas.filter(
      (tarefa) => tarefa.id !== id
    );
    this.setState({
      tarefas: filteredTarefas,
    });
  };

  render() {
    const { texto } = this.state.tarefaAtual;
    const { tarefas } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="mb-3">
          <InputGroup
            style={{
              boxShadow: "rgba(0, 0, 0, 0.51) 0px 10px 10px",
              borderRadius: "5px",
            }}
          >
            <Input type="text" value={texto} onChange={this.handleChange} />
            <InputGroupAddon addonType="append">
              <Button color="primary" outline type="submit">
                Adicionar
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
        <Tarefa tarefas={tarefas} deleteTarefa={this.deleteTarefa} />
      </div>
    );
  }
}
