import Feedback from 'components/FeedbackOptions/FeedbackOptions';
import Statistic from 'components/Statistic/Statistic';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import { useState } from 'react';
import { AppWrapper } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.trunc((good / countTotalFeedback()) * 100);
  };

  const total = countTotalFeedback();

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <AppWrapper>
      <Section title="Please leave feedback">
        <Feedback
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {total > 0 ? (
        <Section title="Statistics">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </AppWrapper>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = option => {
//     this.setState({ [option]: this.state[option] + 1 });
//   };

//   countTotalFeedback = () => {
//     const total = Object.values(this.state);
//     return total.reduce((acc, num) => {
//       acc += num;
//       return acc;
//     });
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const btnNames = Object.keys(this.state);
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <AppWrapper>
//         <Section title="Please leave feedback">
//           <Feedback options={btnNames} onLeaveFeedback={this.onLeaveFeedback} />
//         </Section>

//         {total > 0 ? (
//           <Section title="Statistics">
//             <Statistic
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           </Section>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </AppWrapper>
//     );
//   }
// }

export default App;
