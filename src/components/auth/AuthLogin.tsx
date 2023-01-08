import styled from "styled-components";
import AuthHeader from "./AuthHeader";
import AuthLoginForm from "./AuthLoginForm";

const AuthLogin = () => {
  return (
    <AuthLoginWrapper>
      <AuthLoginContainer>
        <AuthHeader>Login</AuthHeader>
        <AuthLoginForm />
      </AuthLoginContainer>
    </AuthLoginWrapper>
  );
};

export default AuthLogin;

const AuthLoginWrapper = styled.article`
  ${({ theme }) => theme.mixins.flexBox()}
  width: 100%;
  height: calc(100vh - 7rem);
`;

const AuthLoginContainer = styled.section`
  ${({ theme }) => theme.mixins.flexBox("column")}
  width: 60rem;
  height: 50rem;
  padding: ${({ theme }) => theme.spacingLarge};
  border-radius: 0.5rem;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.lightDarkGrey};
  background-color: ${({ theme }) => theme.mainWhite};
`;
