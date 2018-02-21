import React from 'react';

import Page from '../../components/Page';
import PageSection from '../../components/PageSection';
import Jumbotron from '../../components/Jumbotron';

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
  </Page>
);
export default Landing;
