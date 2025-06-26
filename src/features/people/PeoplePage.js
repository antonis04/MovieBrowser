import { Cast, CastRow } from "../../common/Cast/styled";
import { Container } from "../../common/Container/styled";
import {
  Content,
  Description,
  Paragraph,
  Section,
  Title,
  Wrapper,
  Strong,
} from "../../common/Wrapper/styled";
import { GlobalStyle } from "../../GlobalStyle";
import { ReactComponent as EmptyPicture } from "../../images/EmptyPicture.svg";

const PeoplePage = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <EmptyPicture />
          <Content>
            <Title>Name</Title>
            <Section>
              <Paragraph>
                <Strong>Birth</Strong>
              </Paragraph>
              <Paragraph>
                <Strong>Place</Strong>
              </Paragraph>
            </Section>
            <Description> Description </Description>
          </Content>
        </Wrapper>
        <Cast>
          <Title>Title</Title>
          <CastRow>Movie</CastRow>
        </Cast>
        <Cast>
          <Title>Title</Title>
          <CastRow>Movie</CastRow>
        </Cast>
      </Container>
    </>
  );
};

export default PeoplePage;
