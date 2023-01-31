import styled from "@emotion/styled";

import { blue, orange } from "../../Common/styles/commonColor";
import { IToDoListProps, ToDo } from "../types/todos";
import ToDoItem from "../ToDoItem";
import EmptyTodo from "../../Common/Empty/EmptyTodo";

const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 100px 0 80px;
  min-width: 500px;
`;

const AddToDoBtn = styled.button`
  border: 1px solid ${orange};
  border-radius: 8px;
  padding: 8px 18px;
  color: #333;
  background-color: #fff;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: 0.3s;

  :hover {
    background-color: ${orange};
    color: #fff;
  }
`;

const ToDoListView = ({ onShowModal, toDoList }: IToDoListProps) => {
  return (
    <Container>
      <AddToDoBtn onClick={onShowModal}>ToDo 작성</AddToDoBtn>
      {!toDoList?.length && <EmptyTodo>작성한 ToDo가 없어요</EmptyTodo>}
      {toDoList?.map((toDo: ToDo) => (
        <ToDoItem key={toDo.id} toDo={toDo} />
      ))}
    </Container>
  );
};

export default ToDoListView;
