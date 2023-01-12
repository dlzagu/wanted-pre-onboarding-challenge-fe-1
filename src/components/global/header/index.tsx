import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "../../../customRouter";
import Storage from "../../../storage";
import useSetAlert from "../../../hooks/useSetAlert";
import { useEffect, useState } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const isLogin = Storage.getToken() ? true : false;
  const [isMain, setIsMain] = useState(false);
  const navigate = useNavigate();
  const { setAlertSuccess } = useSetAlert();
  const hanldeClickLogout = () => {
    Storage.clearToken();
    setAlertSuccess({ success: "로그아웃 되었습니다." });
    navigate(PATH.LOGIN);
  };
  useEffect(() => {
    if (pathname === PATH.MAIN) {
      setIsMain(true);
    } else {
      setIsMain(false);
    }
  }, [pathname]);
  return (
    <HeaderContainer>
      <ContentContainer>
        <Logo itemScope={isMain}>TODO!</Logo>
        {!isLogin ? (
          <Login onClick={() => navigate(PATH.LOGIN)} itemScope={isMain}>
            login
          </Login>
        ) : (
          <Logout onClick={hanldeClickLogout} itemScope={isMain}>
            logout
          </Logout>
        )}
      </ContentContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 8%;
  background: none;
  z-index: 10;
  transition: all 0.5s;
`;

const ContentContainer = styled.nav`
  width: 100%;
  height: 7rem;

  ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")}
  @media (max-width: ${({ theme }) => theme.bpSmallest}) {
    height: 10rem;
  }
`;

const Logo = styled.h3`
  ${({ theme }) =>
    theme.mixins.title(theme.fontSemiMedium, theme.weightBold, theme.mainWhite)}
  color: ${({ theme, itemScope }) =>
    itemScope ? theme.mainWhite : theme.mainBlack};
`;

const Login = styled.div`
  cursor: pointer;
  color: ${({ theme, itemScope }) =>
    itemScope ? theme.mainWhite : theme.mainBlack};
  transition: all 0.5s;
  &:hover {
    color: ${({ theme }) => theme.darkGrey};
  }
`;

const Logout = styled.div`
  cursor: pointer;
  color: ${({ theme, itemScope }) =>
    itemScope ? theme.mainWhite : theme.mainBlack};
  transition: all 0.5s;
  &:hover {
    color: ${({ theme }) => theme.darkGrey};
  }
`;
