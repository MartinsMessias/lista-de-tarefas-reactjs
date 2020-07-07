import React, { Component } from "react";
import Tarefa from "./Tarefa";
import Alerta from "./Alerta";
import firebase from "./firebase";

import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

export default class ClasseTarefas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
      tarefaAtual: {
        texto: "",
        id: "",
      },
      inputError: false,
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("tarefas").get();
      const tarefas = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      this.setState({ tarefas });
    };
    fetchData();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const novaTarefa = this.state.tarefaAtual;
    console.log(typeof novaTarefa);
    if (novaTarefa.texto !== "") {
      const tarefas = [...this.state.tarefas, novaTarefa];
      const db = firebase.firestore();
      db.collection("tarefas").add({ texto: novaTarefa.texto });
      this.setState({
        tarefas,
        tarefaAtual: {
          texto: "",
          id: "",
        },
      });
    } else {
      this.setState({
        inputError: true,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      tarefaAtual: {
        texto: e.target.value,
        id: Date.now(),
      },
      inputError: false,
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

  updateTarefa = (texto, id) => {
    const tarefas = this.state.tarefas;
    tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.texto = texto;
        const db = firebase.firestore();
        db.collection("tarefas").doc(tarefa.id).set({ texto });
      }
      return null;
    });
    this.setState({
      tarefas,
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
        <Alerta isVisible={this.state.inputError} message="Digite um texo!" />
        <Tarefa
          tarefas={tarefas}
          deleteTarefa={this.deleteTarefa}
          updateTarefa={this.updateTarefa}
        />
      </div>
    );
  }
}
