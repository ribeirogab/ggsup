import styled, { css } from 'styled-components/native';

interface LiveProps {
  live: boolean;
}

export const Container = styled.View`
  margin-top: 16px;
  align-items: center;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 8px;
  color: #efefef;
  margin-right: auto;
  margin-left: 16px;
  font-family: 'SegoeUI-Semibold';
`;

export const TodayMatch = styled.TouchableOpacity`
  width: 140px;
  align-items: center;
  margin-right: 16px;
`;

export const TeamsContainer = styled.View<LiveProps>`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 140px;
  height: 60px;
  background: ${props => (props.live ? '#fee' : '#efefef')};
  border-radius: 50px;
  border-width: 2px;
  border-color: ${props => (props.live ? '#f56' : '#fff')};
  padding: 10px;
`;

export const Team1TodayMatch = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Team2TodayMatch = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TeamShieldTodayMatch = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 50px;
`;

export const NoTodayMatch = styled.Text`
  margin-top: 20px;
  margin-left: 35px;
  height: 50px;
  font-size: 16px;
  color: #aaa;
  font-family: 'SegoeUI';
`;

export const Versus = styled.Text`
  font-size: 15px;
  color: #333;
`;

export const ScheduleContainer = styled.View<LiveProps>`
  position: absolute;
  bottom: 1px;
  margin: 0 auto;
  background: #fff;
  padding: 3px 10px;
  border-radius: 50px;
  ${props =>
    props.live &&
    css`
      background: #f56;
    `}
`;

export const ScheduleText = styled.Text<LiveProps>`
  font-size: 14px;
  color: #999;
  ${props =>
    props.live &&
    css`
      color: #fff;
    `}
`;
