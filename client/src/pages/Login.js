import { useContext, useRef } from "react";
import styled from "styled-components";
import userApi from "../apis";
import { UserContext } from "../context/Context";

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
  padding: 1.25rem;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 0.625rem 0;
  padding: 0.625rem;
`;

const Button = styled.button`
  width: 40%;
  background-color: teal;
  color: white;
  padding: 15px 1.25rem;
  cursor: pointer;
  border: none;
  margin-bottom: 0.625rem;
  &:disabled {
    cursor: not-allowed;
    color: green;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 0.75rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

export const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();

  const { user, errors, dispatch, isFetching } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const { data } = await userApi.post(`/users`, {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    } catch (error) {
      dispatch("LOGIN_FAILURE");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Username" name="username" ref={userRef} />
          <Input placeholder="Password" type="password" ref={passwordRef} />
          <Button disabled={isFetching}>LOGIN</Button>
          {errors && <Error>Something went wrong</Error>}
          <Link>DO NOT REMEMBER PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
