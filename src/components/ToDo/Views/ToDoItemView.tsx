import styled from "@emotion/styled";
import todoIconMonky from "../../../assets/images/todoIcon-monky.png";

import { RiDeleteBin5Line, RiPencilFill, RiZoomInLine } from "react-icons/ri";
import {
  boxShadow,
  orange,
  warning,
  yellow,
} from "../../../styles/commonColor";

import { ToDo } from "../../../types/todos";

const ToDoItemWrap = styled.li`
  position: relative;
  width: 700px;

  border: 1px solid ${yellow};
  border-radius: 8px;
  padding: 10px 32px;
  background-color: #fff;
  box-shadow: ${boxShadow};
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  animation: create 1s;

  @keyframes create {
    0% {
      transform: translate(300px, 0);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;

const ToDoItemIcon = styled.img`
  width: 74px;
  height: 74px;
  margin-right: 50px;
`;

const ToDoControl = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  svg {
    width: 28px;
    height: 28px;
    margin-right: 10px;

    transition: 0.3s;
    cursor: pointer;
  }

  svg:nth-of-type(1):hover,
  svg:nth-of-type(2):hover {
    color: ${orange};
  }

  svg:nth-of-type(3):hover {
    color: ${warning};
  }
`;

const ToDoItemContent = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  h3,
  .todo-content {
    font-family: "Yeon Sung", cursive;
  }

  h3 {
    width: 380px;
    font-weight: 700;
    font-size: 22px;
    padding-bottom: 12px;
    margin-bottom: 12px;
    height: 34px;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
  }

  .todo-content {
    flex-grow: 1;
    font-size: 18px;
    word-break: break-all;
    line-height: 1.6;

    padding-bottom: 20px;
  }

  .createTime {
    font-size: 12px;
    font-family: inherit;
    position: absolute;
    bottom: 0;
    right: -24px;
    color: rgb(180, 180, 180);
  }
  .createTime span {
  }
`;

const ToDoItemView = ({ title, content, createdAt }: ToDo) => {
  return (
    <ToDoItemWrap>
      <ToDoItemIcon src={todoIconMonky} />
      <ToDoControl>
        <RiZoomInLine />
        <RiPencilFill />
        <RiDeleteBin5Line />
      </ToDoControl>

      <ToDoItemContent>
        <h3>{title}</h3>
        <p className="todo-content">{content}</p>
        <p className="createTime">
          <span>작성 시간 : </span>
          {createdAt}
        </p>
      </ToDoItemContent>
    </ToDoItemWrap>
  );
};

export default ToDoItemView;
