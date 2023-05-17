import { Button, ButtonWrapper } from './FeedbackOptions.styled';
import PropTypes, { arrayOf } from 'prop-types';

const Feedback = ({ onLeaveFeedback, options }) => (
  <div>
    <ButtonWrapper>
      {options.map(option => (
        <Button
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
          value={option}
        >
          {option}
        </Button>
      ))}
    </ButtonWrapper>
  </div>
);

export default Feedback;

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: arrayOf(PropTypes.string),
};
