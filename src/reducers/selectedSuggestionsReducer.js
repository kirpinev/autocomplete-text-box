export default (state = [], action) => {
  if (action.type === "SUGGESTIONS_SELECTED") {
    return action.payload;
  }

  return state;
};
