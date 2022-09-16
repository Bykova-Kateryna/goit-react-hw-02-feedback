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

  hendleIncrement = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
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
            options={this.state}
            onLeaveFeedback={this.hendleIncrement}
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
