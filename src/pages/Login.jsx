import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../contex/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if user exists in context
    const user = state.user;

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    if (user && user.email === email && user.password === password) {
      // Optional: update context again if needed
      dispatch({ type: "SET_USER", payload: user });
      navigate("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>Login</Title>

        <Label>Email Address</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <Label>Password</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <LoginButton type="submit">Login</LoginButton>
      </Form>
    </Container>
  );
};

// Styled Components

const Container = styled.div`
  /* display: flex;
  justify-content: center;
  margin-top: 50px; */

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  color: black;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;
const Input = styled.input`
  width: 90%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  color: black;
  font-size: 1rem;

  &::placeholder {
    color: #888;
  }

  &:focus {
    outline: none;
    border-color: #6c63ff;
  }
`;

const LoginButton = styled.button`
 width: 100%;
  padding: 12px;
  background-color: #6c63ff;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #5a54d6;
  }
`;


export default Login;
