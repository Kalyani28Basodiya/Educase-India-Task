import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../contex/UserContext";

const Signup = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(UserContext);

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        isAgency: "yes",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "SET_USER", payload: formData });
        navigate("/profile");
    };


    return (
        <Container>
            <Title>Create your PopX account</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    name="fullName"
                    placeholder="Full Name"
                    onChange={handleChange}
                    required
                />
                <Input
                    name="phone"
                    placeholder="Phone number"
                    onChange={handleChange}
                    required
                />
                <Input
                    name="email"
                    placeholder="Email address"
                    onChange={handleChange}
                    required
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <Input
                    name="company"
                    placeholder="Company name"
                    onChange={handleChange}
                />
                <Label>Are you an Agency?</Label>
                <RadioGroup>
                    <label>
                        <input
                            type="radio"
                            name="isAgency"
                            value="yes"
                            checked={formData.isAgency === "yes"}
                            onChange={handleChange}
                        />{" "}
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="isAgency"
                            value="no"
                            checked={formData.isAgency === "no"}
                            onChange={handleChange}
                        />{" "}
                        No
                    </label>
                </RadioGroup>
                <Button type="submit">Create Account</Button>
            </Form>
        </Container>
    );
};


const Container = styled.div`
  width: 100%;
   height: 100vh;
  max-width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
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

const Label = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 8px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const Button = styled.button`
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


export default Signup;


