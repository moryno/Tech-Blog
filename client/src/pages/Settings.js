import { useContext, useState } from "react";
import styled from "styled-components";
import users from "../apis";
import Sidebar from "../components/Sidebar";
import { UserContext } from "../context/Context";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import app from "../filebase";

const Settings = () => {
  const [success, setSuccess] = useState(false);
  const [{ userId, username, email, password }, setState] = useState({
    userId: null,
    username: "",
    email: "",
    password: "",
  });
  const [file, setFile] = useState(null);
  const { user, dispatch } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((state) => ({ ...state, userId: user._id, [name]: value }));
  };

  const handleUpdate = (event) => {
    dispatch({ type: "UPDATE_START" });
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
          const result = {
            userId,
            username,
            email,
            password,
            profile: downloadURL,
          };

          try {
            const { data } = users.put(`/users/${user._id}`, result);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: data });
            // window.location.reload();
          } catch (error) {
            dispatch({ type: "UPDATE_FAILURE" });
          }
        });
      }
    );
  };

  const handleDelete = async () => {
    try {
      await users.delete(`/users/${user._id}`, { data: { userId: user._id } });
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <SettingTitle>
          <UpdateTitle>Update Your Account</UpdateTitle>
          <DeleteTitle onClick={handleDelete}>Delete Account</DeleteTitle>
        </SettingTitle>
        <SettingForm onSubmit={handleUpdate}>
          <Label>Profile Picture</Label>
          <SettingProfile>
            <Image
              src={file ? URL.createObjectURL(file) : user.profile}
              alt="profileImg"
            />
            <Label htmlFor="fileInput">
              <Icon>
                <i className="settingsPPIcon far fa-user-circle"></i>
              </Icon>
            </Label>
            <Input
              onChange={(event) => setFile(event.target.files[0])}
              type={"file"}
              id="fileInput"
              style={{ display: "none" }}
            />
          </SettingProfile>
          <Label>Username</Label>
          <Input
            onChange={handleChange}
            type={"text"}
            name="username"
            value={username}
            placeholder="Username"
          />
          <Label>Email</Label>
          <Input
            onChange={handleChange}
            type={"email"}
            name="email"
            value={email}
            placeholder="email@email.com"
          />
          <Label>Password</Label>
          <Input
            onChange={handleChange}
            type={"password"}
            name="password"
            value={password}
          />
          <Button>Update</Button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile updated successfully...
            </span>
          )}
        </SettingForm>
      </Wrapper>
      <Sidebar />
    </Container>
  );
};

export default Settings;

const Container = styled.main`
  display: flex;
`;

const Wrapper = styled.section`
  flex: 9;
  padding: 1.25rem;
`;

const SettingTitle = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UpdateTitle = styled.span`
  font-size: 1.875rem;
  margin-bottom: 1.25rem;
  color: lightcoral;
`;

const DeleteTitle = styled.span`
  font-size: 0.75rem;
  color: red;
  cursor: pointer;
`;

const SettingForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.25rem;
  margin-top: 1.25rem;
`;

const SettingProfile = styled.article`
  display: flex;
  align-items: center;
  margin: 0.625rem 0;
`;

const Image = styled.img`
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 1.25rem;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 1.5625rem;
  height: 1.5625rem;
  border-radius: 50%;
  background-color: lightcoral;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 0.625rem;
`;

const Input = styled.input`
  color: gray;
  margin: 0.625rem 0;
  height: 1.875rem;
  border: none;
  border-bottom: 1px solid lightgray;
  outline: none;
`;

const Button = styled.button`
  width: 9.375rem;
  align-self: center;
  color: white;
  background-color: teal;
  border: none;
  border-radius: 0.625rem;
  padding: 0.625rem;
  cursor: pointer;
  margin-top: 1.25rem;
`;
