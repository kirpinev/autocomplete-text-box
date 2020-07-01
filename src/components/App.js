import React from "react";
import styled from "styled-components";

import AutoCompleteText from "./AutoCompleteText";

import countries from "../data/countries";

const AppContainer = styled.div`
  text-align: center;
`;

const Wrapper = styled.div`
  margin: 150px auto 0 auto;
  width: 600px;
`;

const App = () => (
  <AppContainer>
    <Wrapper>
      <Wrapper>
        <AutoCompleteText items={countries} />
      </Wrapper>
    </Wrapper>
  </AppContainer>
);

export default App;
