import { useNavigate } from "react-router-dom";

export function useMoveBack() {
  console.log("Clicked");
  const navigate = useNavigate();

  return () => navigate(-1);
}
