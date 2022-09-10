import React from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleIncrementInGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  hendleIncrementInNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  hendleIncrementInBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    } else {
      return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
    }
  };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            hendleIncrementInGood={this.hendleIncrementInGood}
            hendleIncrementInNeutral={this.hendleIncrementInNeutral}
            hendleIncrementInBad={this.hendleIncrementInBad}
          />
        </Section>
        <Section title={'Statistics'}>
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
