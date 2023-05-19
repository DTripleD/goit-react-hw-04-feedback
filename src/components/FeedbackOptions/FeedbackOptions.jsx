import { Button, ButtonWrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const Feedback = ({ onLeaveFeedback, options }) => {
  const arrayOfValues = Object.entries(options);
  return (
    <div>
      <ButtonWrapper>
        {arrayOfValues.map(option => (
          <Button
            type="button"
            onClick={() => onLeaveFeedback(option[0])}
            key={option[0]}
            value={option[1]}
          >
            {option[0]}
          </Button>
        ))}
      </ButtonWrapper>
    </div>
  );
};

export default Feedback;

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.objectOf(PropTypes.number),
};
