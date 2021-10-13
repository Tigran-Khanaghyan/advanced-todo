export const currentUserId = (id) => {
  return {
    type: "USER_ID",
    payload: id,
  };
};
