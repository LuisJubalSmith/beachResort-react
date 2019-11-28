import { createClient } from 'contentful';

export default createClient({
  // space: 'cnpl84ozmmca',
  // accessToken: 'jZdudAwt10gKBMthMRIqvWM1mcNvbgCXuqQDcHV42ts',

  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
