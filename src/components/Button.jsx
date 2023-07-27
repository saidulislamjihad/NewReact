import { useState } from "react";
import React from "react";

class Button extends React.Component{
    render(){
        return(
            <button type="button" onClick={this.handleClick}>Click Me!</button>
        )
    }
}

export default Button;