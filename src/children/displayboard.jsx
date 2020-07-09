import React, { Component } from 'react';
import '../css/style.css';
import { BetContext } from './betContext';

class Displayboard extends Component {
  constructor() {
    super();
    this.state = {
      stakes: 4,
      unit: 32.08,
      bet_price: 0,
      winning_avrg: 22,
    };
    //because the keyword this is undefined in the handler functions
    this.handlePrice = this.handlePrice.bind(this);
    this.handleStake = this.handleStake.bind(this);
    this.clearPrice = this.clearPrice.bind(this);
    this.clearStake = this.clearStake.bind(this);
  }
  //create the handler methods outside the construtor and render
  //using setState method (used in updating state)

  //event for handling stakes clicks
  handleStake() {
    this.setState({
      stakes: this.state.stakes * 2,
    });
    //console.log(this) results undefined
  }
  // event for handling price clicks
  handlePrice() {
    this.setState({
      bet_price: this.state.bet_price + this.state.unit,
    });
  }
  // events for clearing price
  clearPrice() {
    this.setState({
      bet_price: this.state.price * 0,
    });
  }
  // events for clearing stakes
  clearStake() {
    this.setState({
      stakes: this.state.stakes * 0 + 4,
    });
  }

  static contextType = BetContext;
  render() {
    const { lightTheme, lightOptions, darkOptions } = this.context; //context is a property in contexttype
    const useTheme = lightTheme ? lightOptions : darkOptions;
    return (
      <div className='main-div'style={{ backgroundColor: useTheme.backgroundHex }}>
        <button className='mybtn' style={{color: useTheme.modeFont, backgroundColor:useTheme.buttonHex}}>{this.state.stakes}</button>
        <button className='mybtn' style={{color: useTheme.modeFont, backgroundColor:useTheme.buttonHex}}>{this.state.unit}</button>
        <button className='mybtn' style={{color: useTheme.modeFont, backgroundColor:useTheme.buttonHex}}>{this.state.bet_price}</button>
        <button className='mybtn' style={{color: useTheme.modeFont, backgroundColor:useTheme.buttonHex}}>{this.state.winning_avrg}</button>
        <div className='small-div'>
          <button className='downbtn' onClick={this.handleStake}>
            ++Stakes
          </button>
          <button className='downbtn' onClick={this.handlePrice}>
            ++Price
          </button>
          <button className='downbtn' onClick={this.clearStake}>
            xxStakes
          </button>
          <button className='downbtn' onClick={this.clearPrice}>
            xxPrice
          </button>
        </div>
      </div>
    );
  }
}

export default Displayboard;
