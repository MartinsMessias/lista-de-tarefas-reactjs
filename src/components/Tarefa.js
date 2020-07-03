import React from 'react'

const Tarefa = (props) => {
    const tarefas = props.tarefas;
    const listaDasTarefas = tarefas.map(tarefa => {
        return (
            <div key={tarefa.id}>
                {tarefa.texto}
            </div>
        )
    })
    return (
        <div>
            {listaDasTarefas}
        </div>
    )
}

export default Tarefa
