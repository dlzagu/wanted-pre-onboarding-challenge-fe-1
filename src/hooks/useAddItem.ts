import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import useSetAlert from "./useSetAlert";
import { ErrorType } from "../types/error";
import { ItemAddRequest } from "../api/todoFetcher";

export default function useAddItem() {
  const { setAlertSuccess, setAlertError } = useSetAlert();

  const mutation = useMutation(ItemAddRequest, {
    onSuccess: (data) => {
      setAlertSuccess({ success: "작성성공" });
      console.log(data);
    },
    onError: (error: ErrorType) => {
      const errorMessage = error.response.data.message;
      setAlertError({ error: errorMessage });
    },
  });

  return mutation;
}
