export const selectCountry = (country) => {
  return {
    type: "COUNTRY_SELECTED",
    payload: country,
  };
};

export const selectSuggestions = (countries) => {
  return {
    type: "SUGGESTIONS_SELECTED",
    payload: countries,
  };
};
