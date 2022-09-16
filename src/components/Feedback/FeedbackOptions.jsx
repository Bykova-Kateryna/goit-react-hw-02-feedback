import PropTypes from 'prop-types';
import { ButtonFeedbackSection, FeedbackButton } from './Feedback.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const objectButton = Object.keys(options).map(btn => {
    console.log(btn);
    return (
      <FeedbackButton
        type="button"
        key={btn}
        onClick={() => onLeaveFeedback(btn)}
      >
        {btn}
      </FeedbackButton>
    );
  });

  return <ButtonFeedbackSection>{objectButton}</ButtonFeedbackSection>;
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.object,
};
