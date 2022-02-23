import React, { Component } from 'react';

export class Nav extends Component {
  render() {
    return (
        <nav>
            <ul>
                <li className='activo'>Inicio</li>
                <li>Ventas</li>
                <li>Soporte</li>
            </ul>
        </nav>
    )
  }
}

export default Nav;
