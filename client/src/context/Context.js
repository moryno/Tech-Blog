import { createContext, useReducer } from "react";
import UserReducer from "./Reducer";
const INITIAL_STATE = {
  user: null,
  isFetching: false,
  errors: false,
};

export const UserContext = createContext(INITIAL_STATE);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        errors: state.errors,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
