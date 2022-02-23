import React, { Component } from 'react';

export class ClientesDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowHelp: false
         }
        this.handleShowHelp = this.handleShowHelp.bind(this);
    }

    handleShowHelp() {
        this.setState(prevState => ({
            isShowHelp: !prevState.isShowHelp
        }));
    }

    render() {
        return (
            <div className="container">
                <h1>{this.props.titulo}</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Nombre</th>
                            <th>CIF</th>
                        </tr>
                        {this.props.clientes.map(cliente => {
                            return (
                                <tr key={cliente.cif}>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.cif}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {
                    this.state.isShowHelp 
                    ?
                    <>
                        <button onClick={this.handleShowHelp}>Ocultar ayuda</button>
                        <div className="help">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
                        </div>
                    </>
                    :
                    <button onClick={this.handleShowHelp}>Ver ayuda</button>
                }
            </div>
        );
    }
}

export default ClientesDashboard;
