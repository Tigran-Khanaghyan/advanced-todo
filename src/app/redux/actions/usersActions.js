export const addUser = (user) => {
        return {
          type: "NEW_USER",
          payload: user
        }
  };