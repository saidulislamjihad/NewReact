import { useState } from "react";
import React from "react";

class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        const {change: currentChange , locale: currentLocale} = this.props;
        const {change: nextChange , locale: nextLocale} = nextProps;
        if (currentChange === nextChange && currentLocale === nextLocale){
            return false;
        }
        return true;
    }

    render(){
        const {change , locale, show} = this.props;
        return(
            <>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
                </button>
                {show && <p>Button Component</p>}
            </>
        )
    }
}

export default Button;