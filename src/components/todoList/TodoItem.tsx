import { useState } from "react";
import styled from "styled-components";
import { TodoListInitial } from "../../types/todo";
import useDeleteTodo from "../../hooks/Todo/useDeleteTodo";
import CustomIcon from "../icons/CustomIcon";
import { theme } from "../../styles/theme";
import TodoItemEdit from "./TodoItemEdit";

const TodoItem = ({ item }: { item: TodoListInitial }) => {
  const { mutate: deleteTodo } = useDeleteTodo();
  const [isEdit, setIsEdit] = useState(false);
  const hanldeClickLogout = () => {
    deleteTodo(item.id);
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
        <Button onClick={onClickEditButton}>
          <CustomIcon
            name="edit"
            size="25"
            color={theme.mainWhite}
          ></CustomIcon>
        </Button>
        <Button onClick={hanldeClickLogout}>❌</Button>
      </Wrapper>
      {isEdit && (
        <TodoItemEdit
          title={title}
          content={content}
          id={id}
          setIsEdit={setIsEdit}
        />
      )}
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
  width: 100%;
  ${({ theme }) => theme.mixins.flexBox("column")}
  gap: ${({ theme }) => theme.spacingSemiMedium};
`;

const TodoTitle = styled.h3`
  width: 100%;
  ${({ theme }) =>
    theme.mixins.title(theme.fontMedium, theme.weightSemiBold, theme.mainWhite)}
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
