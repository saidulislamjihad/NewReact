import React from "react";

export default class temperatureInput extends React.Component{
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
            <fieldset>
                <legend>Enter Temperature in Celsius: </legend>
                <input type="number" value={temperature}  onChange={this.onTemperatureChange}/>
            </fieldset>
        )
    }
}