import React, { useState } from "react";
import { ToDoAPI } from "../../api/toDo";
import {
  IAddToDoModalProps,
  IAddToDoModalViewProps,
  ToDoInputValue,
} from "./type";
import AddToDoModalView from "./Views/AddToDoModalView";

const AddToDoModal = ({ isShowModal, onCloseModal }: IAddToDoModalProps) => {
  const [toDoInput, setToDoInput] = useState({ title: "", content: "" });

  const handleDisabledAddToDo = (inputValue: ToDoInputValue) => {
    const inputValues = [inputValue.title, inputValue.content];

    return inputValues.every((value) => value.length > 5);
  };

  const resetToDoInput = () => {
    setToDoInput({ title: "", content: "" });
  };

  const onClickCancel = () => {
    resetToDoInput();
    onCloseModal();
  };

  const onClickAddToDo = (todo: { title: string; content: string }) => {
    ToDoAPI.createToDo(todo);
  };

  onClickAddToDo({ title: "123", content: "123" });

  const addToDoProps: IAddToDoModalViewProps = {
    isShowModal,
    disabledAddToDo: handleDisabledAddToDo(toDoInput),
    onClickCancel: () => onClickCancel(),
    onChangedTitle: (e) =>
      setToDoInput((prev) => {
        return { ...prev, title: e.target.value };
      }),
    onChangedContent: (e) =>
      setToDoInput((prev) => {
        return { ...prev, content: e.target.value };
      }),
  };

  return <AddToDoModalView {...addToDoProps} />;
};

export default AddToDoModal;
