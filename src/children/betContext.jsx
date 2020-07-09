import React, { Component } from 'react';

export const BetContext = React.createContext();

class BetContextprovider extends Component {
  constructor() {
    super();
    this.state = {
      lightTheme: true,
      lightOptions: {
        modeFont: '#FFFFFF',
        backgroundHex: '#FFFFFF',
        buttonHex: '#000000',
      },
      darkOptions: {
        modeFont: '	#FFFFFF',
        backgroundHex: '#000000',
        buttonHex: '#5c5858',
      },
    };
    this.Changetheme = this.Changetheme.bind(this)
  }
  //function to automatically change theme via button
  Changetheme =()=>{
      this.setState({
          lightTheme:!this.state.lightTheme
      })
  }
  render() {
    return (
      <div>
        <BetContext.Provider value={{ ...this.state,  Changetheme:this.Changetheme}}>
          {this.props.children}
        </BetContext.Provider>
      </div>
    );
  }
}

export default BetContextprovider;
