import React from "react";
import BoilingVerdict from "./BoilingVerdict";

export default class Calculator extends React.Component{
    state = {
        temperature: ''
    }

    onTemperatureChange = (e) =>{
        this.setState({
            temperature: e.target.value
        })
    }

    render(){
        const {temperature} = this.state;
        return(
            <>
                <fieldset>
                    <legend>Enter Temperature in Celsius: </legend>
                    <input type="number" value={temperature}  onChange={this.onTemperatureChange}/>
                </fieldset>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </>
        )
    }
}