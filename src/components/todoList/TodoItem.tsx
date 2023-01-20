import { useState } from "react";
import styled from "styled-components";
import { TodoListInitial } from "../../types/todo";
import useDeleteTodo from "../../hooks/Todo/useDeleteTodo";
import CustomIcon from "../icons/CustomIcon";
import { theme } from "../../styles/theme";
import TodoItemEdit from "./TodoItemEdit";
import Modal from "../modal/Modal";
import useModal from "../../hooks/common/useModal";
import TodoItemDetail from "./TodoItemDetail";

const TodoItem = ({ item }: { item: TodoListInitial }) => {
  const { mutate: deleteTodo } = useDeleteTodo();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenModal, handleModalOpenButonClick, handleModalCloseButtonClick] =
    useModal(false);
  const [
    isOpenDetialModal,
    handleDetialModalOpenButonClick,
    handleDetialModalCloseButtonClick,
  ] = useModal(false);
  const handleClickDeleteButton = () => {
    deleteTodo(item.id);
    handleModalCloseButtonClick();
  };
  const { title, content, id } = item;
  const onClickEditButton = () => {
    setIsEdit(true);
  };

  return (
    <>
      <Wrapper>
        <TodoContainer>
          <TodoTitle>{title}</TodoTitle>
          <TodoContent>{content}</TodoContent>
        </TodoContainer>
        <Button onClick={handleDetialModalOpenButonClick}>
          <CustomIcon
            name="detail"
            size="28"
            color={theme.mainWhite}
          ></CustomIcon>
        </Button>
        <Button onClick={onClickEditButton}>
          <CustomIcon
            name="edit"
            size="25"
            color={theme.mainWhite}
          ></CustomIcon>
        </Button>
        <Button onClick={handleModalOpenButonClick}>❌</Button>
      </Wrapper>
      {isEdit && (
        <TodoItemEdit
          title={title}
          content={content}
          id={id}
          setIsEdit={setIsEdit}
        />
      )}
      <Modal
        isOpenModal={isOpenDetialModal}
        onModalCancelButtonClickEvent={handleDetialModalCloseButtonClick}
        isAlertModal={true}
      >
        <TodoItemDetail id={id} />
      </Modal>
      <Modal
        isOpenModal={isOpenModal}
        onModalCancelButtonClickEvent={handleModalCloseButtonClick}
        onModalAcceptButtonClickEvent={handleClickDeleteButton}
        isShowImage={true}
      >
        정말 삭제하시겠습니까?
      </Modal>
    </>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()}
  width: 100%;
  gap: 0.5rem;
  &:not(:first-child) {
    margin-top: ${({ theme }) => theme.spacingMedium};
  }
`;

const TodoContainer = styled.div`
  width: 80%;
  ${({ theme }) => theme.mixins.flexBox("column")}
  gap: ${({ theme }) => theme.spacingSemiMedium};
`;

const TodoTitle = styled.h3`
  width: 100%;
  ${({ theme }) =>
    theme.mixins.title(theme.fontMedium, theme.weightSemiBold, theme.mainWhite)}
  ${({ theme }) => theme.ellipsis}
`;
const TodoContent = styled.p`
  width: 100%;
  padding-left: ${({ theme }) => theme.spacingSemiMedium};
  ${({ theme }) =>
    theme.mixins.title(
      theme.fontSemiMedium,
      theme.weightSemiBold,
      theme.lightDarkGrey
    )};
  ${({ theme }) => theme.ellipsis}
`;

const Button = styled.button`
  flex: 0 0 3.5rem;
  height: 3.5rem;
  font-size: 3rem;
  font-weight: 7rem;
  background-color: transparent;
  border: 0;
`;

export default TodoItem;
