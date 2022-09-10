import PropTypes from 'prop-types';
import { FeedbackSection } from './Feedback.styled';

export const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <h1>{title}</h1>
      {children}
    </FeedbackSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
