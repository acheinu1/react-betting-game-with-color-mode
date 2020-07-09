import React, { Component } from 'react';
import { BetContext } from './betContext';
import '../css/style.css';

class ChangeTheme extends Component {
    static contextType = BetContext

    render() { 
        const {Changetheme} = this.context
        return ( 
            <button  className="chgBtn" onClick={Changetheme}>Theme mode</button>
         );
    }
}
 
export default ChangeTheme;