import React from 'react';
// import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Feather';

import { Container, TitleHeader, Title, Rank } from './styles';

interface MatchSchedule {
  Team1: string;
  Team2: string;
  Winner: string | number;
  Team1Score: string | number;
  Team2Score: string | number;
  'DateTime UTC': string;
  BestOf: number;
  Tab: string;
  Patch: string | number;
  Disabled: string[];
  _ID: number;
}

export type Day = MatchSchedule[];

export interface Week {
  week: number;
  days: Day[];
}

const WeekMatches: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TitleHeader>
        <Title>Resumo</Title>
        <Rank onPress={() => navigation.navigate('Standings')}>
          {/* <Icon name="award" size={16} color="#292C31" /> */}
        </Rank>
      </TitleHeader>
    </Container>
  );
};

export default WeekMatches;
