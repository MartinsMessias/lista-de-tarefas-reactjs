import React, { Component } from 'react'
import Tarefa from './Tarefa'

export default class ClasseTarefas extends Component {
    constructor (props){
        super(props);
        this.state = {
            tarefas: [],
            tarefaAtual: {
                texto: '',
                id: ''
            }
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        const novaTarefa = this.state.tarefaAtual;

        if (novaTarefa !== ''){
            const tarefas = [... this.state.tarefas, novaTarefa];  
            this.setState({
                tarefas,
                tarefaAtual: {
                    texto: '',
                    id: ''
                }
            });
        }
    }

    handleChange = e => {
        this.setState({
            tarefaAtual: {
                texto: e.target.value,
                id: Date.now()
            }
        });
    }

   

    render() {

        const {texto} = this.state.tarefaAtual;
        const {tarefas} = this.state;

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={texto} 
                        onChange={this.handleChange} 
                    />
                    <button type="submit" >Adicionar</button>
                </form>
                <Tarefa tarefas={tarefas} />
            </div>
        )
    }
}
