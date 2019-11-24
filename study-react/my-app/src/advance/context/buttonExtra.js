import React, { Component } from 'react';
import { ThemeCustomer } from './index';

class ButtonExtra extends Component {

  render() { 
    return ( 
      <ThemeCustomer>
       {value => <button>按钮{value}</button>}
      </ThemeCustomer>
     );
  }
}

export default ButtonExtra;
