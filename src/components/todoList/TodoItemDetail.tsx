import styled from "styled-components";
import useGetTodo from "../../hooks/Todo/useGetTodo";

const TodoItemDetail = ({ id }: { id: string }) => {
  const { data: todo } = useGetTodo(id);
  const createdAt = todo?.createdAt.split("T")[0];
  return (
    <>
      <TodoDetailHeader>
        <TodoDetailTitleStyle>{todo?.title}</TodoDetailTitleStyle>
        <TodoDetailSubTitleStyle>{createdAt}</TodoDetailSubTitleStyle>
      </TodoDetailHeader>
      <TodoDetailContent>{todo?.content}</TodoDetailContent>
    </>
  );
};

export default TodoItemDetail;

export const TodoDetailContainerStyle = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column")}
  width: 100%;
  padding: ${({ theme }) => theme.spacingLarge};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.mainWhite};
  box-shadow: 2px 2px 5px ${({ theme }) => theme.lightDarkGrey};
  margin-bottom: ${({ theme }) => theme.spacingMedium};
`;

export const TodoDetailHeader = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "end", "start")}
  gap:${({ theme }) => theme.spacingRegular};
  width: 90%;
  padding: ${({ theme }) => theme.spacingMedium};
  margin-bottom: ${({ theme }) => theme.spacingLarge};
  border-bottom: 1px solid ${({ theme }) => theme.lightDarkGrey};
`;

export const TodoDetailTitleStyle = styled.h2`
  ${({ theme }) =>
    theme.mixins.title(
      theme.fontMedium2,
      theme.weightSemiBold,
      theme.lightGrey
    )}
  color: ${({ theme }) => theme.mainBlack};
`;

export const TodoDetailSubTitleStyle = styled.h4`
  ${({ theme }) =>
    theme.mixins.title(theme.fontRegular, theme.weightRegular, theme.darkGrey)}
  color: ${({ theme }) => theme.darkGrey};
`;

const TodoDetailContent = styled.p`
  width: 100%;
  ${({ theme }) =>
    theme.mixins.title(
      theme.fontSemiMedium,
      theme.weightRegular,
      theme.lightGrey
    )}
  color: ${({ theme }) => theme.mainBlack};
  overflow: auto;
`;
