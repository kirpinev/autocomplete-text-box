import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { selectCountry, selectSuggestions } from "../actions";

import Input from "../uikit/Input";
import List from "../uikit/UnorderedList";
import ListItem from "../uikit/ListItem";

const Container = styled.div`
  width: 100%;
  border: 1px solid grey;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px 1px rgba(0, 0, 0, 0.18);

  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.73);
`;

const UnorderedList = styled(List)`
  border-top: 1px solid grey;

  &::before {
    content: "";
  }
`;

const Item = styled(ListItem)`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    background-color: rgba(128, 128, 128, 0.2);
  }
`;

const AutoCompleteText = ({
  countries,
  selectedCountry,
  selectedSuggestions,
  selectCountry,
  selectSuggestions,
}) => {
  const onInputChange = (e) => {
    const value = e.target.value;

    selectCountry(value);

    selectSuggestions([]);

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");

      selectSuggestions(
        countries.sort().filter((country) => regex.test(country))
      );
    }
  };

  const suggestionSelected = (value) => {
    selectCountry(value);

    selectSuggestions([]);
  };

  const renderSuggestions = () =>
    selectedSuggestions.length === 0 ? null : (
      <UnorderedList>
        {selectedSuggestions.map((suggestion) => (
          <Item
            onClick={() => suggestionSelected(suggestion)}
            key={new Date() * Math.random()}
          >
            {suggestion}
          </Item>
        ))}
      </UnorderedList>
    );

  return (
    <Container>
      <Input value={selectedCountry} type="text" onChange={onInputChange} />
      {renderSuggestions()}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  countries: state.countries,
  selectedCountry: state.selectedCountry,
  selectedSuggestions: state.selectedSuggestions,
});

export default connect(mapStateToProps, { selectCountry, selectSuggestions })(
  AutoCompleteText
);
