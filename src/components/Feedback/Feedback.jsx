import React, {Component} from "react" 
import "./Feedback.css"

class Feedback extends Component {
    state = {
        good: 3,
        neutral: 2,
        bad: 2
      }

      countTotalFeedback = () => {
        const totalFeedback = this.state.good + this.state.neutral + this.state.bad
        return totalFeedback
      }

      countPositiveFeedbackPercentage = () => {
        const result = 100/this.countTotalFeedback()*this.state.good 
        return Math.round(result)
      }

      render() {
        const {good,neutral,bad} = this.state
        return (
            <div>
                 <h1>Please leave feedback</h1>
                 <ul className="Feedback_button_list">
                    <li>
                        <button type="button" className="Feedback_button">Good</button>
                    </li>
                    <li>
                        <button type="button" className="Feedback_button">Neutral</button>
                    </li>
                    <li>
                        <button type="button" className="Feedback_button">Bad</button>
                    </li>
                 </ul>
                 <h2>Statistics</h2>
                 <ul className="Feedback_statistics">
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {this.countTotalFeedback()}</li>
                    <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
                 </ul>
            </div>
           
            
        )
      }
}

export default Feedback