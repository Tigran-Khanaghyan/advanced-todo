export const addUser = (user) => {
        return {
          type: "NEW-USER",
          payload: user
        }
  };