import { useForm } from "react-hook-form";
import styled from "styled-components";
import { TodoFormInitial } from "../../types/todo";
import { ErrorMessage, AuthButton } from "../../styles/authStyle";
import useSetAlert from "../../hooks/useSetAlert";
import useAddTodo from "../../hooks/Todo/useAddTodo";

const TodoItemCreator = () => {
  const { setAlertLoading } = useSetAlert();
  const { mutate: addTodo, isLoading } = useAddTodo();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoFormInitial>({
    mode: "onChange",
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const onSubmit = handleSubmit((todoForm) => {
    if (isLoading) {
      setAlertLoading({ loading: true });
    }
    addTodo(todoForm);
  });

  return (
    <Form onSubmit={onSubmit}>
      <InputContainer>
        <Input
          placeholder="제목"
          type="title"
          {...register("title", { required: "제목 입력은 필수입니다." })}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="내용"
          type="content"
          {...register("content", { required: "내용 입력은 필수입니다." })}
        />
        <ErrorMessage>{errors.content?.message}</ErrorMessage>
      </InputContainer>

      <AuthButton type="submit">작성</AuthButton>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  ${({ theme }) => theme.mixins.flexBox("column")}
  gap: 10px;
`;
const InputContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: ${(props) => props.theme.spacingMedium};
`;

const Input = styled.input`
  background: none;
  appearance: none;
  width: 100%;
  border: 0;
  font-size: 3rem;
  color: white;
  border-bottom: 2px solid white;
  text-align: center;
  &::placeholder {
    color: white;
  }
`;

export default TodoItemCreator;
