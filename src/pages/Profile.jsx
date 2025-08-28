import styled from "styled-components";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <Container className="">
            <h3>Account Settings</h3>
            <img
                src="https://via.placeholder.com/80"
                alt="profile"
                style={{ borderRadius: "50%", margin: "10px auto" }}
            />
            <h4>{user.fullName}</h4>
            <p>{user.email}</p>
            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr...</p>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 400px;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  width: 300px;
   align-items: center;
   color: black;
    
`;
export default Profile;
