export default (state = "", action) => {
  if (action.type === "COUNTRY_SELECTED") {
    return action.payload;
  }

  return state;
};
