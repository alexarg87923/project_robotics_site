import React from 'react';

import Banner from './sections/Banner';
import One from './sections/One';
import Two from './sections/Two';
import Three from './sections/Three';
import Four from './sections/Four';
import Five from './sections/Five';

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
    </>
  );
};

export default Home;
