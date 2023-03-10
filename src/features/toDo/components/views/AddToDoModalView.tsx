import React from "react";
import styled from "@emotion/styled";

import { TextField } from "@mui/material";
import { IAddToDoModalViewProps } from "../../types/todos";
import { flexCenter } from "../../../../common/styles/FlexCenter";
import headerImg from "../../../../assets/images/homeBackground.png";
import { boxShadow, blue, cancel } from "../../../../common/styles/commonColor";

import { yellow } from "@mui/material/colors";

const AddToDoModalView = ({
  children,
  isShowModal,
  onClickCancel,
  onChangeTitle,
  onChangeContent,
}: IAddToDoModalViewProps) => {
  return (
    <React.Fragment>
      {isShowModal && <BackDrop onClick={onClickCancel} />}

      {isShowModal && (
        <AddToModal>
          <header>
            <img src={headerImg} alt="헤더 로고" /> CREATE ToDo!
          </header>

          <AddToDoInputWrap>
            <TextField
              label="Title"
              name="title"
              fullWidth={true}
              autoFocus={true}
              helperText="제목은 최소 5글자 작성해주세요!"
              placeholder="작성할 ToDo의 제목을 입력해주세요."
              required
              size="small"
              color="warning"
              onChange={onChangeTitle}
              margin="normal"
            />

            <TextField
              label="Content"
              name="content"
              fullWidth={true}
              minRows={5}
              multiline
              helperText="내용은 최소 5글자 작성해주세요!"
              placeholder="작성할 ToDo의 내용을 입력해주세요."
              required
              color="warning"
              onChange={onChangeContent}
            />
          </AddToDoInputWrap>

          <AddToDoControl>
            {children}
            <div>
              <button
                className="cancel-todo"
                type="submit"
                onClick={onClickCancel}
              >
                닫기
              </button>
            </div>
          </AddToDoControl>
        </AddToModal>
      )}
    </React.Fragment>
  );
};

export default AddToDoModalView;

const BackDrop = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.8);
`;

const AddToModal = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 250px;
  z-index: 10;
  width: 80%;
  border: 1px solid ${blue};
  border-radius: 5px;
  background-color: #fff;
  box-shadow: ${boxShadow};
  ${flexCenter}
  flex-direction: column;

  header {
    ${flexCenter}
    height: 54px;
    width: 100%;
    font-size: 22px;
    font-weight: 700;
    border-bottom: 1px solid ${blue};
  }

  img {
    height: 42px;
    width: 42px;
    margin-right: 10px;
  }

  @media (max-width: 750px) {
    header {
      font-size: 18px;
    }
  }
`;

const AddToDoInputWrap = styled.div`
  flex-direction: column;
  width: 80%;
  padding-top: 42px;

  input,
  textarea {
    font-family: "yeon sung";
    outline-color: ${yellow};
  }

  p {
    margin-bottom: 20px;
  }
`;

const AddToDoControl = styled.div`
  ${flexCenter}
  padding-bottom: 50px;

  div {
    ${flexCenter}
    margin-top: 20px;
    margin-right: 50px;
  }

  div:last-of-type {
    margin-right: 0;
  }

  button {
    padding: 10px 42px;
    border-radius: 6px;
  }

  .cancel-todo {
    color: #333;
    background-color: ${cancel};
    border: 1px solid ${cancel};
  }
`;
