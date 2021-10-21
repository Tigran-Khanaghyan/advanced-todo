export const loadStore = () => {
  try {
    const serializedState = localStorage.getItem("store");
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveStore = (store) => {
  try {
    const serializedState = JSON.stringify(store);
    localStorage.setItem("store", serializedState);
  } catch {}
};
