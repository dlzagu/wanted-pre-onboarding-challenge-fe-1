import { useForm } from "react-hook-form";
import { AuthFormInitial } from "../../types/auth";
import useSignup from "../../hooks/auth/useSignup";
import useSetAlert from "../../hooks/useSetAlert";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AuthButton,
  AuthButtonContainer,
  AuthInput,
  AuthInputContainer,
  ErrorMessage,
} from "../../styles/authStyle";
import { PATH } from "../../customRouter";

const AuthRegisterForm = () => {
  const { mutate: signUp, isLoading } = useSignup();
  const { setAlertLoading } = useSetAlert();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<AuthFormInitial>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = handleSubmit((registerForm) => {
    delete registerForm.confirmPassword;
    if (isLoading) {
      setAlertLoading({ loading: true });
    }
    signUp(registerForm);
  });

  return (
    <AuthRegisterFormContainer onSubmit={onSubmit}>
      <AuthInputContainer>
        <AuthInput
          placeholder="E-mail"
          type="email"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "이메일 형식에 맞지 않습니다!",
            },
          })}
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthInput
          placeholder="Password"
          type="password"
          {...register("password", {
            required: { value: true, message: "비밀번호를 입력해주세요." },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
              message: "숫자,특수문자,영문 포함 8자리 이상 적어주세요.",
            },
          })}
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthInput
          placeholder="Confirm Password"
          type="password"
          {...register("confirmPassword", {
            required: "비밀번호를 한번 더 입력해 주세요",
            validate: {
              mathchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || "비밀번호가 일치하지 않습니다.";
              },
            },
          })}
        />
        <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
      </AuthInputContainer>
      <AuthButtonContainer>
        <AuthButton type="submit">Registration</AuthButton>
        <AuthLink to={PATH.LOGIN}>Sign in</AuthLink>
      </AuthButtonContainer>
    </AuthRegisterFormContainer>
  );
};

export default AuthRegisterForm;

const AuthRegisterFormContainer = styled.form`
  ${(props) => props.theme.mixins.flexBox("column")}
  width: 90%;
  height: 100%;
`;

const AuthLink = styled(Link)`
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  color: ${({ theme }) => theme.themeColor};
  cursor: pointer;
`;
