import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Container, Title, Tournament } from './styles';

const Tournaments: React.FC = () => {
  const [selectedTournament, setSelectedTournament] = useState(0);

  const games = [
    { name: 'League of Legends' },
    { name: 'a', GameImage: null },
    { name: 'b', GameImage: null },
    { name: 'c', GameImage: null },
    { name: 'd', GameImage: null },
  ];

  return (
    <Container>
      <Title>Torneios</Title>
      <FlatList
        horizontal
        data={games}
        keyExtractor={item => item.name}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Tournament
            key={item.name}
            style={{ marginLeft: index === 0 ? 16 : 0 }}
            activated={selectedTournament === index}
            onPress={() => setSelectedTournament(index)}
          >
            {/* {item.GameImage && item.GameImage} */}
          </Tournament>
        )}
      />
    </Container>
  );
};

export default Tournaments;
