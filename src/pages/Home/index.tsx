import React from 'react';
import { View } from 'react-native';

import Tournaments from './components/Tournaments';
import TodayMatches from './components/TodayMatches';
import WeeksMatches from './components/WeeksMatches';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Tournaments />
      <TodayMatches />
      <WeeksMatches />
    </Container>
  );
};

export default Home;
