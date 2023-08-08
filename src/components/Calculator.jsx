import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelsius, toFahrenhrit } from "../lib/converter";

export default class Calculator extends React.Component{
    state = {
        temperature: '',
        scale: 'c',
    };

    handleChange = (e, scale) =>{
        this.setState({
            temperature: e.target.value,
            scale,
        });
    }

    render(){
        const { temperature , scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature , toCelsius) : temperature;
        const fahrenhrit = scale === 'c' ? convert(temperature , toFahrenhrit) : temperature;
        return(
            <>
                <TemperatureInput scale= "c" temperature={celsius} onTemperatureChange={this.handleChange}/>
                <TemperatureInput scale= "f" temperature={fahrenhrit} onTemperatureChange={this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </>
        )
    }
}