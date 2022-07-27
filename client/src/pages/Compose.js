import { useContext, useState } from "react";
import styled from "styled-components";
import posts from "../apis";
import { UserContext } from "../context/Context";

const Container = styled.section`
  padding-top: 3.125rem;
`;

const Image = styled.img`
  margin-left: 9.375rem;
  width: 70vw;
  height: 15.625rem;
  border-radius: 0.625rem;
  object-fit: cover;
`;

const ComposeForm = styled.form`
  position: relative;
`;

const FormWrapper = styled.article`
  margin-left: 9.375rem;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  width: 1.5625rem;
  height: 1.5625rem;
  border-radius: 50%;
  border: 1px solid;
  font-size: 1.25rem;
  color: rgb(121, 119, 119);
  cursor: pointer;
`;

const Label = styled.label``;

const FileInput = styled.input``;

const TextInput = styled.input`
  font-size: 1.875rem;
  padding: 1.25rem;
  border: none;
  width: 70vw;
  &:focus {
    outline: none;
  }
`;

const WriteGroup = styled.article`
  margin-left: 9.375rem;
  display: flex;
  align-items: center;
`;

const Content = styled.textarea`
  font-size: 1.25rem;
  height: 100vh;
  padding: 1.25rem;
  border: none;
  width: 70vw;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 3.125rem;
  border: none;
  color: white;
  background-color: teal;
  padding: 0.625rem;
  border-radius: 0.625rem;
  cursor: pointer;
  font-size: 1rem;
`;

const Compose = () => {
  const { user } = useContext(UserContext);
  const [input, setTitle] = useState({
    title: "",
    desc: "",
    author: user.username,
    date: new Date(),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTitle({ ...input, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await posts.post(`/posts`, input);
      setTitle({
        title: "",
        desc: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Image
        src="https://www.gizmodo.com.au/wp-content/uploads/sites/2/2021/11/04/league-of-legends-arcane.jpg?quality=80&resize=1280,720"
        alt="newImage"
      />
      <ComposeForm onSubmit={handleSubmit}>
        <FormWrapper>
          <Label htmlFor="fileInput">
            <Icon>
              <i className="writeFormIcon fas fa-plus"></i>
            </Icon>
          </Label>
          <FileInput type={"file"} id="fileInput" style={{ display: "none" }} />
          <TextInput
            onChange={handleChange}
            type={"text"}
            name="title"
            value={input.title}
            placeholder="Title"
            autoFocus={true}
          />
        </FormWrapper>
        <WriteGroup>
          <Content
            onChange={handleChange}
            name="desc"
            value={input.desc}
            placeholder="What is your story...?"
          />
        </WriteGroup>
        <Button>Publish</Button>
      </ComposeForm>
    </Container>
  );
};

export default Compose;
