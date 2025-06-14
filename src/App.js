import React from "react";
import { GlobalStyled } from "./GlobalStyled.js";
import { Container } from "./common/Container";
import {
  Content,
  Description,
  Tag,
  Tags,
  Title,
  Wrapper,
  Year,
} from "./common/Wrapper";
import PosterSVG from "./components/Poster.jsx";

function App() {
  return (
    <>
      <GlobalStyled />
      <Container>
        <Wrapper>
          <PosterSVG />
          <Content>
            <Title>Mulan</Title>
            <Year>2020</Year>
            <Tags>
              <Tag>Action</Tag>
              <Tag>Adventure</Tag>
              <Tag>Drama</Tag>
            </Tags>
            <Description>
              A young Chinese maiden disguises herself as a male warrior in
              order to save her father. Disguises herself as a male warrior in
              order to save her father. A young Chinese maiden disguises herself
              as a male warrior in order to save her father.
            </Description>
          </Content>
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
