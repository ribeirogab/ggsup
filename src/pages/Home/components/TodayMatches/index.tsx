import React, { useEffect, useState, useCallback } from 'react';
import { Image, FlatList, Linking } from 'react-native';

import {
  Container,
  Title,
  TodayMatch,
  TeamsContainer,
  Team1TodayMatch,
  Team2TodayMatch,
  TeamShieldTodayMatch,
  NoTodayMatch,
  Versus,
  ScheduleContainer,
  ScheduleText,
} from './styles';

interface TodayMatch {
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
  Stream: string;
  live: boolean;
  _ID: number;
}

const TodayMatches: React.FC = () => {
  const staticImagesURI = 'https://flybet.herokuapp.com/static/lol/teams/';
  const [todayMatches, setTodayMatches] = useState<TodayMatch[]>([]);

  const loadInBrowser = useCallback(
    url => url.indexOf('https://') !== -1 && Linking.openURL(url),
    [],
  );

  useEffect(() => {
    setTodayMatches([
      {
        Team1: 'string',
        Team2: 'string',
        Winner: 'string',
        Team1Score: 'string',
        Team2Score: 'string',
        'DateTime UTC': 'string',
        BestOf: 2,
        Tab: 'string',
        Patch: 'string',
        Disabled: [],
        Stream: 'string',
        live: true,
        _ID: 1,
      },
      {
        Team1: 'string',
        Team2: 'string',
        Winner: 'string',
        Team1Score: 'string',
        Team2Score: 'string',
        'DateTime UTC': 'string',
        BestOf: 2,
        Tab: 'string',
        Patch: 'string',
        Disabled: [],
        Stream: 'string',
        live: true,
        _ID: 2,
      },
      {
        Team1: 'string',
        Team2: 'string',
        Winner: 'string',
        Team1Score: 'string',
        Team2Score: 'string',
        'DateTime UTC': 'string',
        BestOf: 2,
        Tab: 'string',
        Patch: 'string',
        Disabled: [],
        Stream: 'string',
        live: true,
        _ID: 3,
      },
      {
        Team1: 'string',
        Team2: 'string',
        Winner: 'string',
        Team1Score: 'string',
        Team2Score: 'string',
        'DateTime UTC': 'string',
        BestOf: 2,
        Tab: 'string',
        Patch: 'string',
        Disabled: [],
        Stream: 'string',
        live: true,
        _ID: 4,
      },
      {
        Team1: 'string',
        Team2: 'string',
        Winner: 'string',
        Team1Score: 'string',
        Team2Score: 'string',
        'DateTime UTC': 'string',
        BestOf: 2,
        Tab: 'string',
        Patch: 'string',
        Disabled: [],
        Stream: 'string',
        live: true,
        _ID: 5,
      },
      {
        Team1: 'string',
        Team2: 'string',
        Winner: 'string',
        Team1Score: 'string',
        Team2Score: 'string',
        'DateTime UTC': 'string',
        BestOf: 2,
        Tab: 'string',
        Patch: 'string',
        Disabled: [],
        Stream: 'string',
        live: true,
        _ID: 6,
      },
      {
        Team1: 'string',
        Team2: 'string',
        Winner: 'string',
        Team1Score: 'string',
        Team2Score: 'string',
        'DateTime UTC': 'string',
        BestOf: 2,
        Tab: 'string',
        Patch: 'string',
        Disabled: [],
        Stream: 'string',
        live: true,
        _ID: 7,
      },
    ]);
  }, []);

  return (
    <Container>
      <Title>Partidas de hoje</Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ width: '100%', height: 73 }}
        data={todayMatches}
        ListEmptyComponent={
          <NoTodayMatch>Nenhuma partida hoje...</NoTodayMatch>
        }
        keyExtractor={item => String(item._ID)}
        renderItem={({ item, index }) => (
          <TodayMatch
            onPress={() => item.live && loadInBrowser(item.Stream)}
            disabled={!item.live}
            style={{ marginLeft: index === 0 ? 16 : 0 }}
          >
            <TeamsContainer live={item.live}>
              <Team1TodayMatch>
                <TeamShieldTodayMatch style={{ marginRight: 5 }}>
                  <Image
                    style={{ height: 30, resizeMode: 'contain' }}
                    source={{
                      uri: `${staticImagesURI}${item.Team1.replace(
                        / /g,
                        '_',
                      )}.png`,
                    }}
                  />
                </TeamShieldTodayMatch>
              </Team1TodayMatch>

              <Versus>vs</Versus>

              <Team2TodayMatch>
                <TeamShieldTodayMatch style={{ marginLeft: 5 }}>
                  <Image
                    style={{ height: 30, resizeMode: 'contain' }}
                    source={{
                      uri: `${staticImagesURI}${item.Team2.replace(
                        / /g,
                        '_',
                      )}.png`,
                    }}
                  />
                </TeamShieldTodayMatch>
              </Team2TodayMatch>
            </TeamsContainer>
            <ScheduleContainer live={item.live}>
              <ScheduleText live={item.live}>
                {item.live
                  ? 'ao vivo'
                  : `${
                      Number(item['DateTime UTC'].split(' ')[1].split(':')[0]) -
                      3
                    }:${item['DateTime UTC'].split(' ')[1].split(':')[1]}`}
              </ScheduleText>
            </ScheduleContainer>
          </TodayMatch>
        )}
      />
    </Container>
  );
};

export default TodayMatches;
