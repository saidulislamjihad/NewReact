import { useState } from 'react'
import React from 'react';
import Button from './Button';

class SecondClock extends React.Component {
    state = {date: new Date()};

    componentDidMount(){
        this.clockTimer = setInterval(()=> this.tick() ,1000);
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

    tick(){
        this.setState({
            date: new Date(),
        });
    }

    handleClick = (locale)=>{
        this.setState( {
            locale
        });
    }

    render(){
        const {date , locale} = this.state;

        return (
            <>
                <h1>
                    Class {date.toLocaleTimeString(locale)}
                </h1>
                {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale="en-US" show={false} enable/>
                ):(
                    <Button change={this.handleClick} locale="bn-BD" show={true} enable={false}/>
                )}
            </>
        )
    }
}

export default SecondClock;