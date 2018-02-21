import React from 'react';

import Page from '../../components/Page';
import PageSection from '../../components/PageSection';
import { TextInput } from '../../components/Input/';

const Login = () => (
  <Page>
    <PageSection>
      Some information regarding login
    </PageSection>
    <PageSection>
      <TextInput data="Username" />
      <TextInput data="Password" />
    </PageSection>
  </Page>
);
export default Login;
