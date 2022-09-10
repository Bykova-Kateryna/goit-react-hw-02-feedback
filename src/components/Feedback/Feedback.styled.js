import styled from 'styled-components';

export const FeedbackSection = styled.div`
  padding: 15px;
  background-color: #e4e4e4;
`;

export const ButtonFeedbackSection = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  padding: 20px 5px;
`;

export const FeedbackButton = styled.button`
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #67ebf1;
  }
`;

export const StatisticsList = styled.ul`
  padding: 20px 5px;
`;

export const StatisticsItem = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
