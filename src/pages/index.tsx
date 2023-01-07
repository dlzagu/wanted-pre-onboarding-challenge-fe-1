import styled from "styled-components";

const Home = () => {
  return <Container>Main</Container>;
};

const Container = styled.div`
  ${({ theme }) => theme.mixins.flexBox()}
  height: 100vh;
  width: 100%;
`;
export default Home;
