import styled from "styled-components";
import Sidebar from "../components/Sidebar";

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

const Settings = () => {
  return (
    <Container>
      <Wrapper>
        <SettingTitle>
          <UpdateTitle>Update Your Account</UpdateTitle>
          <DeleteTitle>Delete Account</DeleteTitle>
        </SettingTitle>
        <SettingForm>
          <Label>Profile Picture</Label>
          <SettingProfile>
            <Image src="" alt="profileImg" />
            <Label htmlFor="fileInput">
              <Icon>
                <i className="settingsPPIcon far fa-user-circle"></i>
              </Icon>
            </Label>
            <Input type={"file"} id="fileInput" style={{ display: "none" }} />
          </SettingProfile>
          <Label>Username</Label>
          <Input type={"text"} placeholder="Username" />
          <Label>Email</Label>
          <Input type={"email"} placeholder="email@email.com" />
          <Label>Password</Label>
          <Input type={"password"} />
          <Button>Update</Button>
        </SettingForm>
      </Wrapper>
      <Sidebar />
    </Container>
  );
};

export default Settings;
