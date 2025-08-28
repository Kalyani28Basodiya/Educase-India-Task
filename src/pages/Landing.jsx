import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Card = styled.div`
  background-color: #fff;
  width: 320px;
  padding: 30px 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #000;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  background-color: ${(props) => (props.primary ? "#6c63ff" : "#ede7f6")};
  color: ${(props) => (props.primary ? "#fff" : "#6c63ff")};

  &:hover {
    opacity: 0.95;
    transform: scale(1.02);
  }
`;

const Landing = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Card>
                <Title>Welcome to PopX</Title>
                <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
                <Button primary onClick={() => navigate("/signup")}>Create Account</Button>
                {/* <Button>Already Registered? Login</Button> */}
                <Button onClick={() => navigate("/login")}>
        Already Registered? Login
      </Button>
            </Card>
        </Wrapper>
    );
};

export default Landing;


