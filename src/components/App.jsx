import React, { Component } from "react"
import FeedbackOptions from "../components/FeedbackOptions/FeedbackOptions"
import Statistics from "../components/Statistics/Statistics"
import Section from "../components/Section/Section"

 class App extends Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 2
  }

  countTotalFeedback = () => {
    const values = Object.values(this.state)
    let total = 0
    for(const value of values) {
        total+=value
    }
    return total
  }

  countPositiveFeedbackPercentage = () => {
    const result = 100/this.countTotalFeedback()*this.state.good 
    return Math.round(result)
  }

  render () {
    const {good,neutral,bad} = this.state
return (
  <>
      <Section title="Please leave feedback"></Section>
      <FeedbackOptions options={Object.keys(this.state)}/>
      
      <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
    
      
    </>
)
    
  }
  
};

export default App
