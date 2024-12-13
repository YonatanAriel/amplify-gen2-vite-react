import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  to: string;
  text: string;
};
function NavigationLink({ to, text }: Props) {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(to)} variant="text">
      {text}
    </Button>
  );
}
export default NavigationLink;
