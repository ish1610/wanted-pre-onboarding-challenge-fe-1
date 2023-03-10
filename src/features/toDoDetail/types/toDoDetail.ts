import React from "react";
import { ToDo } from "../../toDo/types/todos";

export interface ITodoDetailProps {
  children?: React.ReactNode;
  toDoDetail: ToDo;
  isEdit: boolean;
  onClickCancel: () => void;
  onClickEdit: () => void;
  onClickSave: () => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface ITodoDetailLayoutProps {
  toDoDetail: ToDo;
}

export type ToDoDetailSliceState = {
  toDoDetail: ToDo;
};
