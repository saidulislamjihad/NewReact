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

    handleClick = ()=>{
        this.setState( {
            locale: 'bn-BD',
        });
    }

    render(){
        const {date , locale} = this.state;
        return (
            <>
                <h1>
                    Class Base React Watch {date.toLocaleTimeString(locale)}
                </h1>
                <Button/>
            </>
        )
    }
}

export default SecondClock;