import React from "react";
import styled from "styled-components";

import AutoCompleteText from "./AutoCompleteText";

const AppContainer = styled.div`
  text-align: center;
`;

const Wrapper = styled.div`
  margin: 150px auto 0 auto;
  max-width: 600px;
`;

const App = () => (
  <AppContainer>
    <Wrapper>
      <Wrapper>
        <AutoCompleteText />
      </Wrapper>
    </Wrapper>
  </AppContainer>
);

export default App;
