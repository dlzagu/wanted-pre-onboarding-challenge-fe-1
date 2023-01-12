import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import images from "../dev/backGroundImg";
import TodoItemCreator from "../components/todoList/TodoItemCreator";
import TodoItem from "../components/todoList/TodoItem";
import Clock from "../components/todoList/Clock";
import useGetTodos from "../hooks/todo/useGetTodos";
import CustomIcon from "../components/icons/CustomIcon";

const Home = () => {
  const { data: todos } = useGetTodos();
  const [isCreator, setIsCreator] = useState(false);
  const [bg, setBg] = useState("");
  const onClickCreator = useCallback(() => {
    setIsCreator((prev) => !prev);
  }, [setIsCreator]);

  useEffect(() => {
    setBg(chosenImage);
  }, []);

  return (
    <Wrapper itemProp={bg}>
      <ContentWrapper>
        <Clock></Clock>
        <Creator onClick={onClickCreator}>
          TODO 추가하기
          <CustomIcon name="click" size="25" />
        </Creator>
        {isCreator && <TodoItemCreator setIsCreator={setIsCreator} />}
        {todos?.map((todo) => (
          <TodoItem item={todo} key={todo.id} />
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};
const chosenImage = images[Math.floor(Math.random() * images.length)];
const Wrapper = styled.div`
  positon: fixed;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  background-size: cover;
  background-position: center center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) =>
      props.itemProp ||
      "https://user-images.githubusercontent.com/59393359/74718667-0adb8a80-5276-11ea-8bc3-0e36c67cf28a.jpg"});
`;
const ContentWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column")};
  width: 70rem;
  overflow: auto;
  padding: 2rem;
`;
const Creator = styled.button`
  background: none;
  appearance: none;
  width: 40%;
  border: 0;
  font-size: ${({ theme }) => theme.fontMedium};
  color: ${({ theme }) => theme.mainWhite};
  border-bottom: 2px solid white;
  text-align: center;
  &::placeholder {
    color: white;
  }
  margin-bottom: ${(props) => props.theme.spacingMedium};
`;

export default Home;
