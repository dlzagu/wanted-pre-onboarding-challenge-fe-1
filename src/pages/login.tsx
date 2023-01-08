import BasePageComponent from "../hoc/BasePageComponent";
import AuthLogin from "../components/auth/AuthLogin";

const Login = () => {
  return (
    <BasePageComponent>
      <AuthLogin />
    </BasePageComponent>
  );
};

export default Login;
