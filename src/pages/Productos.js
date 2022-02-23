import React, { Component } from 'react'
import Card from '../components/Card'

export class Productos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productos: []
        }
        this.addProducto = this.addProducto.bind(this);
    }

    addProducto(producto, precio) { 
        // this.setState((prevState, prevProps) => {
        //     return {productos: [...prevState.productos, producto]};
        // });
        this.setState(prevState => ({
            productos: [...prevState.productos, producto]
        }));
    }

    

    render() {
        return (
            <div className='container'>
                <h1>Catálogo de productos</h1>
                <p>Número de productos añadidos: {this.state.productos.length}</p>
                <div className="container flex">
                    <Card>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <button onClick={() => this.addProducto('Producto 1')}>Añadir</button>
                    </Card>
                    <Card>
                        <ul>
                            <li>Lorem</li>
                            <li>Ipsum</li>
                            <li>Dolor</li>
                        </ul>
                        <button onClick={() => this.addProducto('Producto 2')}>Añadir</button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Productos