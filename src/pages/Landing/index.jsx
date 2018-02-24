import React from 'react';

import Page from '../../components/Page';
import PageSection from '../../components/PageSection';
import Jumbotron from '../../components/Jumbotron';

import Box, { Title, Subtitle, Paragraph } from '../../components/Backbone';

import './Landing.scss';

const Landing = () => (
  <Page unique="Landing_Page">
    <Jumbotron
      title="Attention! Look Here!"
      text="This is some paragraph"
    />
    <PageSection>
      Section 1
    </PageSection>
    <PageSection>
      Section 2
    </PageSection>
    <Box wrapper col12>
      <Box col4>
        <Title>Get Started</Title>
        <Subtitle>Its free so why not just do it</Subtitle>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
        </Paragraph>
      </Box>
      <Box col4>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
        <Paragraph>
        electronic typesetting, remaining essentially unchanged. It was popularised in
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
        </Paragraph>
      </Box>
      <Box col4>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
        </Paragraph>
      </Box>
    </Box>
    <Box wrapper col12>
      <Box col4>
        <Title>Get Started</Title>
        <Subtitle>Its free so why not just do it</Subtitle>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
        </Paragraph>
      </Box>
      <Box col4>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
        <Paragraph>
        electronic typesetting, remaining essentially unchanged. It was popularised in
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
        </Paragraph>
      </Box>
      <Box col4>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
        </Paragraph>
      </Box>
    </Box>
  </Page>
);
export default Landing;
