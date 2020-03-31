import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
    //static contextType = Context;
    //static is like button.contextType, you add a property to class
    //reference of contextype from context object
    // static contextType = LanguageContext;

    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleguen';
    };

    renderButton(color) {
        return(
            <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
                {({language}) => this.renderSubmit(language) }
            </LanguageContext.Consumer>
            </button> 
        );
    }

    render() {

        // <LanguageContext.Consumer></LanguageContext.Consumer>
        //recives ONLY ONE  function that will be called
        return (
            <ColorContext.Consumer>
                {(color)=> this.renderButton(color)} 
            </ColorContext.Consumer>
        );
        
        
    }
}

export default Button;