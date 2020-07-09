import React, { Component } from 'react';
import Displayboard from './children/displayboard';
import BetContextprovider from './children/betContext';
import ChangeTheme from './children/ChangeTheme';

class Parent extends Component {
  render() {
    return (
      <div>
        <BetContextprovider>
          <Displayboard />
          <ChangeTheme />
        </BetContextprovider>
      </div>
    );
  }
}

export default Parent;
