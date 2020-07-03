import React from "react";
import { Row, Col } from "reactstrap";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import styled from "styled-components";

const Tarefa = ({ tarefas, deleteTarefa }) => {
  const listaDasTarefas = tarefas.map((tarefa) => {
    return (
      <div key={tarefa.id}>
        <Row>
          <Col>
            <p className="tarefa">
              {tarefa.texto}
              <span>
                <IconButton onClick={() => deleteTarefa(tarefa.id)}>
                  <FaTrashAlt />
                </IconButton>
                <IconButton onClick={() => deleteTarefa(tarefa.id)}>
                  <FaPencilAlt />
                </IconButton>
              </span>
            </p>
          </Col>
        </Row>
      </div>
    );
  });
  return <div>{listaDasTarefas}</div>;
};

const IconButton = styled.button`
  float: right;
  background-color: #cce5ff;
  color: #175393;
  border: none;
`;

export default Tarefa;
