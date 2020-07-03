import React, { Component } from 'react'

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

        if (novaTarefa != ''){
            const tarefas = [... this.state.tarefas, novaTarefa];  
            this.setState({
                tarefas: tarefas
            });
        }
    }

    handleChange = e => {
        this.setState({
            tarefaAtual: {
                texto: e.target.value
            }
        });
    }

   

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.state.tarefaAtual.texto} 
                        onChange={this.handleChange} 
                    />
                    <button type="submit" >Adicionar</button>
                    <h4>{JSON.stringify(this.state.tarefas)}</h4>
                </form>
            </div>
        )
    }
}
