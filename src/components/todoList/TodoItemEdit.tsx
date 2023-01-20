import { useForm } from "react-hook-form";
import styled from "styled-components";
import { TodoFormInitial } from "../../types/todo";
import { ErrorMessage } from "../../styles/authStyle";
import useSetAlert from "../../hooks/useSetAlert";
import useUpdateTodo from "../../hooks/Todo/useUpdateTodo";

interface TodoItemProps {
  title: string;
  content: string;
  id: string;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoItemEdit = ({
  title,
  content,
  id: todoId,
  setIsEdit,
}: TodoItemProps) => {
  const { setAlertLoading } = useSetAlert();
  const { mutate: updateTodo, isLoading } = useUpdateTodo();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoFormInitial>({
    mode: "onChange",
    defaultValues: {
      title,
      content,
    },
  });
  const onSubmit = handleSubmit((todoForm) => {
    if (isLoading) {
      setAlertLoading({ loading: true });
    }
    updateTodo({ todoForm, todoId });
    setIsEdit(false);
  });
  const onClickCloseButton = () => {
    setIsEdit(false);
  };

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
      <ButtonContainer>
        <EditButton type="submit">수정</EditButton>
        <CloseButton type="button" onClick={onClickCloseButton}>
          닫기
        </CloseButton>
      </ButtonContainer>
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
const ButtonContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox()}
  width:100%;
  gap: 2rem;
`;
const EditButton = styled.button`
  ${({ theme }) => theme.mixins.mediumButton()};
  width: 30%;
  &:active {
    transform: scale(0.98);
  }
`;
const CloseButton = styled.button`
  ${({ theme }) =>
    theme.mixins.mediumButton(
      "none",
      theme.mainWhite,
      `1px solid ${theme.mainWhite}`
    )};
  width: 30%;
  &:active {
    transform: scale(0.98);
  }
`;
export default TodoItemEdit;
