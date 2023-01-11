import { ComponentType } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../customRouter";
import Storage from "../storage";
import useSetAlert from "../hooks/useSetAlert";

const AuthCheckHOC = (AuthComponent: ComponentType) => {
  const AuthCheck = () => {
    const { setAlertError } = useSetAlert();
    const navigate = useNavigate();
    const isLogin = Storage.getToken() ? true : false;
    if (!isLogin) {
      setAlertError({ error: "로그인이 필요한 서비스입니다." });
      navigate(PATH.LOGIN);
    }
    return <AuthComponent />;
  };

  return AuthCheck;
};

export default AuthCheckHOC;
