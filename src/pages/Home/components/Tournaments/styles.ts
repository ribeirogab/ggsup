import styled, { css } from 'styled-components/native';

interface TournamentProps {
  activated: boolean;
}

export const Container = styled.View`
  margin: 16px 0;
`;

export const Tournament = styled.TouchableOpacity<TournamentProps>`
  width: 62px;
  height: 62px;
  justify-content: center;
  align-items: center;
  background: #7f91;
  border-width: 2px;
  border-color: #7f94;
  border-radius: 50px;
  margin-right: 16px;

  ${props =>
    props.activated &&
    css`
      border-color: #71f59a;
      background: #7f93;
    `}
`;
export const Title = styled.Text`
  font-size: 18px;
  color: #efefef;
  font-family: 'SegoeUI-Semibold';
  margin: 0 16px;
  margin-bottom: 8px;
`;
