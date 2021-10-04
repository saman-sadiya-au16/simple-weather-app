import './ErrorMessage.css'
import React from "react";

const ErrorMessage = (props) => {
    console.log(props.error)
    return(
        <div className='error-msg'>
            <h1>{props.error}...</h1>
        </div>
    );
}

export default ErrorMessage;