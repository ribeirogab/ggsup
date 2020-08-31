import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 32px;
  background: #e9e9e9;
  padding: 24px;
  border-radius: 24px;
  min-height: 300px;
`;

export const TitleHeader = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
  margin-right: auto;
  font-family: 'SegoeUI-Semibold';
`;

export const Rank = styled.TouchableOpacity`
  flex-direction: row;
  border-width: 1px;
  border-color: #292c31;
  background: #7f98;
  justify-content: center;
  align-items: center;
  padding: 0 9px;
  border-radius: 10px;
`;

export const RankText = styled.Text`
  color: #ec428d;
`;
