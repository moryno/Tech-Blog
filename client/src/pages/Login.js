import { useRef } from "react";
import styled from "styled-components";
import user from "../apis";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.bostonproper.com/i/bostonproper/756-d2-home-feature-01-desktop?fmt=auto")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  background-color: teal;
  color: white;
  padding: 15px 20px;
  cursor: pointer;
  border: none;
  margin-bottom: 10px;
  &:disabled {
    cursor: not-allowed;
    color: green;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

export const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userRef.current.value);
    console.log(passwordRef.current.value);

    try {
      const { data } = await user.post("/users", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
    } catch (err) {}
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Username" name="username" ref={userRef} />
          <Input placeholder="Password" type="password" ref={passwordRef} />
          <Button>LOGIN</Button>
          {/* {error && <Error>Something went wrong</Error>} */}
          <Link>DO NOT REMEMBER PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
