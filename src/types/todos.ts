export type ToDo = {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
};

export type ToDoInputValue = Pick<ToDo, "title" | "content">;

export interface IToDoLayoutProps {
  isShowModal: boolean;
  onShowModal: () => void;
  onCloseModal: () => void;
}

export interface IToDoListProps {
  onShowModal: () => void;
  toDoList?: ToDo[];
}

export interface IAddToDoModalProps {
  isShowModal: boolean;
  onCloseModal: () => void;
}
export interface IAddToDoModalViewProps {
  isShowModal: boolean;
  disabledAddToDo: boolean;
  onClickAddToDo: () => void;
  onClickCancel: () => void;
  onChangeTitle: (e: any) => void;
  onChangeContent: (e: any) => void;
}

export interface IToDoItemProps {
  onClickDelete: (id: string) => void;
  onClickDetail: (id: string) => void;
  toDo: ToDo;
}

export interface ITodoDetailProps {
  toDoDetail: ToDo;
  isEdit: boolean;
  onClickCancel: () => void;
  onClickEdit: () => void;
  onClickSave: () => void;
}

export type AddToDoBtn = { disabledAddToDo: boolean };

export type OnCloseModal = (
  setShowModalCb: (isShow: boolean) => void,
  setTitleCb: (title: string) => void,
  setContentCb: (content: string) => void
) => void;

export type ToDoListState = {
  toDoList: ToDo[];
  toDoDetail: ToDo;
};

export type GetToDoCb = (toDoList: ToDo[]) => void;
export type CreateToDoCb = (toDo: ToDo) => void;
