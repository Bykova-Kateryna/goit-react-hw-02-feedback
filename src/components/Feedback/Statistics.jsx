import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Feedback.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <p>Good: {good}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Neutral: {neutral}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p></p>Bad: {bad}
      </StatisticsItem>
      <StatisticsItem>
        <p></p>Total: {countTotalFeedback}
      </StatisticsItem>
      <StatisticsItem>
        <p></p>Positive feedback: {countPositiveFeedbackPercentage}%
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  countTotalFeedback: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  countPositiveFeedbackPercentage: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.number,
  ]),
};
