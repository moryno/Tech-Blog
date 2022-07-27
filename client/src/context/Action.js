export const LoginStart = (userCredentils) => ({
  type: "LOGIN_START",
});

export const LoginSucess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});
