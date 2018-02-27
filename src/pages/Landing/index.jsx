import React from 'react';

import Box, { Title, Heading, Paragraph, Logo } from '../../components/Core';

import './style.scss';

const Landing = () => (
  <Box wrapper col12 center className="Landing_Page">
    <Box col12 center noFloat style={{ width: '50%' }}>
      <Title>Get Started</Title>
      <Paragraph>
        Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old.
      </Paragraph>
    </Box>
    <Box col12 wrapper>
      <Box col4 center>
        <Logo large className="fab fa-js" />
        <Heading>Nutritions</Heading>
        <Paragraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old.
        </Paragraph>
      </Box>
      <Box col4 center>
        <Logo large className="fab fa-js" />
        <Heading>Weight</Heading>
        <Paragraph>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour,
          or randomised words which dont look even slightly believable.
        </Paragraph>
      </Box>
      <Box col4 center>
        <Logo large className="fab fa-js" />
        <Heading>Excercise</Heading>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </Paragraph>
      </Box>
    </Box>
  </Box>
);
export default Landing;
