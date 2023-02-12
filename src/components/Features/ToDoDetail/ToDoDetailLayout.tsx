import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Store } from "../../../store/types/store";

import { getDetailToDo, selectTodoDetail } from "./Slice/toDoDetailSlice";
import { ITodoDetailLayoutProps } from "./Types/toDoDetail";

import ToDoDetailLayoutView from "./Views/ToDoDetailLayoutView";

const ToDoDetailLayout = () => {
  const toDoDetail = useSelector(selectTodoDetail);
  const toDoList = useSelector((state: Store) => state.toDoList.toDoList);
  const toDoId = useParams();
  const dispatch = useDispatch();

  const toDoDetailLayoutProps: ITodoDetailLayoutProps = {
    toDoDetail,
  };

  useEffect(() => {
    dispatch(getDetailToDo({ toDoList, id: toDoId.id }));
  }, []);

  return <ToDoDetailLayoutView {...toDoDetailLayoutProps} />;
};

export default ToDoDetailLayout;
