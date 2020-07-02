import { combineReducers } from "redux";

import countriesReducer from "./countriesReducer";
import selectedCountryReducer from "./selectedCountryReducer";
import selectedSuggestionsReducer from "./selectedSuggestionsReducer";

export default combineReducers({
  countries: countriesReducer,
  selectedCountry: selectedCountryReducer,
  selectedSuggestions: selectedSuggestionsReducer,
});
