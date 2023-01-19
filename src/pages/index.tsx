import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import images from "../dev/backGroundImg";
import TodoItemCreator from "../components/todoList/TodoItemCreator";
import TodoItem from "../components/todoList/TodoItem";
import Clock from "../components/todoList/Clock";
import useGetTodos from "../hooks/Todo/useGetTodos";
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
        <Todos>
          {todos?.map((todo) => (
            <TodoItem item={todo} key={todo.id} />
          ))}
        </Todos>
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
  width: 80rem;
  overflow: auto;
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
const Todos = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "start", "start")}
  width: 100%;
  padding: ${(props) => props.theme.spacingSemiMedium};
  max-height: 45vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 1rem; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 20%; /* 스크롤바의 길이 */
    background: ${({ theme }) => theme.mainWhite}; /* 스크롤바의 색상 */
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
  }
`;
export default Home;
