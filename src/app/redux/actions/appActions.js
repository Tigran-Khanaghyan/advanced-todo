export const addApp = (app, id) => {
  return {
    type: "NEW_APP",
    userId: id,
    payload: app,
  };
};
