import React from 'react'

const Tarefa = ({tarefas, deleteTarefa}) => {
    const listaDasTarefas = tarefas.map(tarefa => {
        return (
            <div key={tarefa.id}>
                {tarefa.texto}
                <span>
                    <button onClick={() => deleteTarefa(tarefa.id)}>DEL</button>
                </span>
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
