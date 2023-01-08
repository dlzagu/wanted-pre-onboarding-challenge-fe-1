import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { authLoginRequest } from "../../api/authFetcher";
import { PATH } from "../../customRouter";
import useSetAlert from "../useSetAlert";
import { ErrorType } from "../../types/error";

export default function useLogin() {
  const { setAlertSuccess, setAlertError } = useSetAlert();
  const navigate = useNavigate();

  const mutation = useMutation(authLoginRequest, {
    onSuccess: (message) => {
      setAlertSuccess({ success: message });
      navigate(PATH.MAIN);
    },
    onError: (error: ErrorType) => {
      const errorMessage = error.response.data.message;
      setAlertError({ error: errorMessage });
    },
  });

  return mutation;
}
