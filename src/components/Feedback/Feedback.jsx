import React, {Component} from "react" 
import "./Feedback.css"

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      render() {
        const {good,neutral,bad} = this.state
        return (
            <div>
                 <h1>Please leave feedback</h1>
                 <ul className="Feedback_button">
                    <li>
                        <button type="button">Good</button>
                    </li>
                    <li>
                        <button type="button">Neutral</button>
                    </li>
                    <li>
                        <button type="button">Bad</button>
                    </li>
                 </ul>
                 <h2>Statistics</h2>
                 <ul className="Feedback_statistics">
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                 </ul>
            </div>
           
            
        )
      }
}

export default Feedback