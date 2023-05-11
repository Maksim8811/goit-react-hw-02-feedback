import React from "react" 
import "./FeedbackOptions.css"

function FeedbackOptions ({options}) {
        console.log(options)
        return options.map(option => (
        <button 
            className="Feedback_button_list"
            type="button"
            key={option}>
                {option}
            </button>
            ))
            
           
           
            
        
      
}

export default FeedbackOptions