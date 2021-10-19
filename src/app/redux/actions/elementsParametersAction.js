export const elementCoordinates = (coordinates) => {
  return {
    type: "ELEMENTS-CCORDINATES",
    payload: coordinates,
  };
};

export const getCoordinates = (coordinates) => {
  return (dispatch) => {
    let elementCoordinate = coordinates
    dispatch(elementCoordinates(elementCoordinate));
  };
};
