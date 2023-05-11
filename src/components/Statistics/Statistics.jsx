import React, {Component} from "react" 
import "./Statistics.css"

class Statistics extends Component {

    render () {
        return(
        <>
            <h2>Statistics</h2>
                 <ul className="Feedback_statistics">
                    <li>Good: {this.props.good}</li>
                    <li>Neutral: {this.props.neutral}</li>
                    <li>Bad: {this.props.bad}</li>
                    <li>Total: {this.props.total}</li>
                    <li>Positive feedback: {this.props.positivePercentage}%</li>
                 </ul>
        </>
        )
    }
}

export default Statistics