import _ from 'lodash';

import enGB from './languages/en-GB';

const translate = key => _.get(enGB, key, key);

export default translate;
