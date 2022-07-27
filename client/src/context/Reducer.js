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

    default:
      return state;
  }
};

export default UserReducer;
