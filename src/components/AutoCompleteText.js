import React, { useState } from "react";
import styled from "styled-components";

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

const AutoCompleteText = ({ items }) => {
  const [suggestions, setSuggestions] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    const value = e.target.value;

    setInputValue(e.target.value);

    setSuggestions([]);

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");

      setSuggestions(items.sort().filter((item) => regex.test(item)));
    }
  };

  const suggestionSelected = (value) => {
    setInputValue(value);

    setSuggestions([]);
  };

  const renderSuggestions = () =>
    suggestions.length === 0 ? null : (
      <UnorderedList>
        {suggestions.map((suggestion) => (
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
    <Container className="AutoCompleteText">
      <Input value={inputValue} type="text" onChange={onInputChange} />
      {renderSuggestions()}
    </Container>
  );
};

export default AutoCompleteText;
