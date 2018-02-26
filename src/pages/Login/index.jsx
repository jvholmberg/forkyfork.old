import React from 'react';

import Box from '../../components/Basic';
import { TextInput } from '../../components/Input/';

const Login = () => (
  <Box wrapper col12>
    <Box col12>
      Some information regarding login
    </Box>
    <Box col12>
      <TextInput data="Username" />
      <TextInput data="Password" />
    </Box>
  </Box>
);
export default Login;
