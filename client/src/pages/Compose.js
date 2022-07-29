import { useContext, useState } from "react";
import styled from "styled-components";
import posts from "../apis";
import { UserContext } from "../context/Context";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../filebase";

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
  const [category, setCategory] = useState([]);
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTitle({ ...input, [name]: value });
  };

  const handleCategory = (event) => {
    const value = event.target.value;
    setCategory(value.split(","));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const result = { ...input, photo: downloadURL, category };
          try {
            const { data } = posts.post(`/posts`, result);
            setTitle({
              title: "",
              desc: "",
            });
            setCategory([]);
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
  };

  return (
    <Container>
      {file && <Image src={URL.createObjectURL(file)} alt="newImage" />}
      <ComposeForm onSubmit={handleSubmit}>
        <FormWrapper>
          <Label htmlFor="fileInput">
            <Icon>
              <i className="writeFormIcon fas fa-plus"></i>
            </Icon>
          </Label>
          <FileInput
            onChange={(event) => setFile(event.target.files[0])}
            type={"file"}
            id="fileInput"
            style={{ display: "none" }}
          />
          <TextInput
            onChange={handleChange}
            type={"text"}
            name="title"
            value={input.title}
            placeholder="Title"
            autoFocus={true}
          />
          <TextInput
            onChange={handleCategory}
            type={"text"}
            name="category"
            value={category}
            placeholder="Category"
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
