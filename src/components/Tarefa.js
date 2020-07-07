import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import styled from "styled-components";
import Alerta from "./Alerta";
import React, { useState } from "react";

const Tarefa = ({ tarefas, deleteTarefa, updateTarefa }) => {
  const [modal, setModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const toggle = () => setModal(!modal);
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
                <IconButton onClick={toggle}>
                  <FaPencilAlt />
                </IconButton>
              </span>
            </p>
          </Col>
        </Row>
        <Modal isOpen={modal} toggle={toggle} backdrop={false} centered={true}>
          <ModalHeader toggle={toggle}>Editar tarefa</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              id={tarefa.id}
              value={tarefa.texto}
              onChange={(e) => {
                if (e.target.value.length > 0) {
                  updateTarefa(e.target.value, tarefa.id);
                  setVisible(false);
                } else {
                  setVisible(true);
                }
              }}
            />
            <Alerta isVisible={visible} message="Não pode ser vázio!" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Feito
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  });
  return <div>{listaDasTarefas}</div>;
};

const IconButton = styled.button`
  float: right;
  background-color: rgb(0, 101, 183);
  color: #fff;
  border: none;
`;

export default Tarefa;
