const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        errors: false,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        errors: false,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        errors: true,
      };
    case "UPDATE_START":
      return {
        ...state,
        isFetching: true,
      };

    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        ...state,
      };

    case "UPDATE_FAILURE":
      return {
        user: state.user,
        isFetching: false,
        errors: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        errors: false,
      };

    default:
      return state;
  }
};

export default UserReducer;
