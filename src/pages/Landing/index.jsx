import React from 'react';

import Box, { Title, Heading, Paragraph, Logo } from '../../components/Core';

import translate from '../../translate';
import './style.scss';

const Landing = () => (
  <Box wrapper col12 center className="LandingPage">
    <Box col6 center noFloat className="LandingPage_GetStarted">
      <Title>{ translate('GET_STARTED_TITLE') }</Title>
      <Paragraph>{ translate('GET_STARTED_TEXT') }</Paragraph>
    </Box>
    <Box col12 wrapper>
      <Box col4 center className="LandingPage_ValueArea">
        <Logo large className="fab fa-js" />
        <Heading>{ translate('NUTRITION_QUICK_EASY_TITLE') }</Heading>
        <Paragraph>{ translate('NUTRITION_QUICK_EASY_TEXT') }</Paragraph>
      </Box>
      <Box col4 center className="LandingPage_ValueArea">
        <Logo large className="fab fa-js" />
        <Heading>{ translate('NUTRITION_QUICK_EASY_TITLE') }</Heading>
        <Paragraph>{ translate('WEIGHT_KEEP_TRACK_TEXT') }</Paragraph>
      </Box>
      <Box col4 center className="LandingPage_ValueArea">
        <Logo large className="fab fa-js" />
        <Heading>{ translate('EXERCISE_PROGRESS_TITLE') }</Heading>
        <Paragraph>{ translate('EXERCISE_PROGRESS_TEXT') }</Paragraph>
      </Box>
    </Box>
  </Box>
);
export default Landing;
