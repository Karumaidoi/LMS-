import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: #fff;
  border: 1px solid #f3f4f6;
  border-radius: 7px;

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

const Button = styled.button`
  background-color: #323232;
  padding: 8px 14px;
  margin-top: 1rem;
  color: white;
  border-radius: 4px;

  &:hover {
    background-color: #222222;
  }
`;

function PageNotFound() {
  const useMove = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <h4>The page you are looking for could not be found 😢</h4>
        <Button size="large" onClick={useMove}>
          &larr; Go back
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
