import styled from "styled-components";
import { TodoListInitial } from "../../types/todo";
import useDeleteTodo from "../../hooks/Todo/useDeleteTodo";

const TodoItem = ({ item }: { item: TodoListInitial }) => {
  const { mutate: deleteTodo } = useDeleteTodo();
  const hanldeClickLogout = () => {
    deleteTodo(item.id);
  };
  return (
    <Wrapper>
      <Todo>{item.title}</Todo>
      <Button onClick={hanldeClickLogout}>❌</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:not(:first-child) {
    margin-top: 2rem;
  }
`;

const Todo = styled.div`
  flex: 1;
  width: 100%;
  height: 3.5rem;
  color: white;
  border-radius: 0.5rem;
  border: 0;
  background-color: transparent;
  padding: 0 2rem;
  box-sizing: border-box;
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
