export const addApp = (app, id) => {
  return {
    type: "NEW_APP",
    userId: id,
    payload: app,
  };
};

export const deleteApp = (apps, index) => {
  return {
    type: "DELETE_APP",
    apps,
    index
  };
};

