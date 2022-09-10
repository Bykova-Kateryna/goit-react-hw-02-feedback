import PropTypes from 'prop-types';
import { ButtonFeedbackSection, FeedbackButton } from './Feedback.styled';

export const FeedbackOptions = ({
  hendleIncrementInGood,
  hendleIncrementInNeutral,
  hendleIncrementInBad,
}) => {
  return (
    <ButtonFeedbackSection>
      <FeedbackButton type="button" onClick={hendleIncrementInGood}>
        Good
      </FeedbackButton>
      <FeedbackButton type="button" onClick={hendleIncrementInNeutral}>
        Neutral
      </FeedbackButton>
      <FeedbackButton type="button" onClick={hendleIncrementInBad}>
        Bad
      </FeedbackButton>
    </ButtonFeedbackSection>
  );
};

FeedbackOptions.propTypes = {
  hendleIncrementInGood: PropTypes.func,
  hendleIncrementInNeutral: PropTypes.func,
  hendleIncrementInBad: PropTypes.func,
};
