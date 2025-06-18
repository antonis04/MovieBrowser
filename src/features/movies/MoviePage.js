import React from "react";
import { GlobalStyle } from "../../GlobalStyle.js";
import {
  Container,
  Details,
  DetailStar,
  Note,
  Paragraph,
  Section,
  Strong,
  Summary,
  Votes,
} from "../../common/Container/styled.js";
import {
  Content,
  Description,
  Tag,
  Tags,
  Title,
  Wrapper,
  Year,
} from "../../common/Wrapper/styled.js";
import PosterSVG from "../../components/PosterSVG/index.js";
import StarSVG from "../../components/StarSVG/StarSVG.js";

const MoviePage = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <PosterSVG />
          <Content>
            <Title>Mulan</Title>
            <Year>2020</Year>
            <Section>
              <Paragraph>
                <Strong>Production:</Strong> China, Unided Sates of America
              </Paragraph>
              <Paragraph>
                <Strong>Release date:</Strong> 24.10.2020
              </Paragraph>
            </Section>
            <Tags>
              <Tag>Action</Tag>
              <Tag>Adventure</Tag>
              <Tag>Drama</Tag>
            </Tags>
            <Details>
              <DetailStar>
                <StarSVG />
                <Summary>7,8</Summary>
              </DetailStar>
              <Note>/10</Note>
              <Votes>335 votes</Votes>
            </Details>

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
};

export default MoviePage;
