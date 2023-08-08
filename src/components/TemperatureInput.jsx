import React from "react";

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
}

export default function temperatureInput ({temperature, scale, onTemperatureChange}){
    return(
        <fieldset>
            <legend>Enter Temperature in {scaleNames[scale]}: </legend>
            <input type="number" value={temperature}  onChange={(e) => onTemperatureChange(e, scale)}/>
        </fieldset>
    )
}