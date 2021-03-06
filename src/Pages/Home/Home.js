import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Segment,
  Header,
  Icon,
  Grid,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import {
  PRIMARY_KULER,
  SECONDARY_KULER,
} from '../../constants';

const Wrapper = styled.div`
  background-color: ${SECONDARY_KULER};
  color: white;
  min-height: 100%;
`;

const Hero = styled(Segment)`
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  width: 100% !important;
  background-color: ${PRIMARY_KULER} !important;
`;

const Title = styled(Header)`
  color: white !important;
  font-size: 3rem;
  @media (min-width: 767px) {
    font-size: 4rem;
  }
`;

const Caption = styled.p`
  font-size: 2.5rem;
  padding: 1rem 0;
`;

const Section = styled.section`
  padding: 1rem;
`;

const Block = styled.div`
  border: 1px solid PRIMARY_KULER;
  border-radius: 5px;
  margin: 1rem;
  padding: 4rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.35s ease-in-out;

  &:hover {
    background-color: ${PRIMARY_KULER};
  }
`;

const BlockCaption = styled.p`
  margin-top: 2rem;
  font-size: 2rem;
`;

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [fullscreen, setFullscreen] = useState(false);

  // const setFullscreen = () => {
    
  // }

  return (
    <Wrapper
      className="fade-in"
    >
      <Hero
        placeholder
        basic
      >
        <Title
          as="h1"
        >
          Book your cleaning now!
        </Title>
        <Caption>
          Get a quote in minutes
        </Caption>
      </Hero>
      <Section>
        <Caption>
          1. What kind of home?
        </Caption>
        <Grid
          stackable
          columns={2}
          textAlign="center"
        >
          <Grid.Column>
            <Link to="/details">
              <Block>
                <Icon
                  name="home"
                  size="massive"
                />
                <BlockCaption>
                  House
                </BlockCaption>
              </Block>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Block>
              <Icon
                name="building"
                size="massive"
              />
              <BlockCaption>
                Condo/Apartment
              </BlockCaption>
            </Block>
          </Grid.Column>
        </Grid>
      </Section>
    </Wrapper>
  );
};

export default Home;
