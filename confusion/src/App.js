
import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react'
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color='primary'>
          <div className="container">
            <NavbarBrand href="/">Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;