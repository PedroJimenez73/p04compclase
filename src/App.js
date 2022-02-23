import React from 'react';
import Nav from './components/Nav';
import ClientesDashboard from './pages/ClientesDashboard';
import Productos from './pages/Productos';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: 'Listado de clientes',
            clientes: [
                { nombre: 'Gas Natural', cif: 'A12345678' },
                { nombre: 'Iberdrola', cif: 'A87654321' },
                { nombre: 'Jazztel', cif: 'B12345678' },
                { nombre: 'BBVA', cif: 'C12345678' },
            ]
         }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                clientes: [...this.state.clientes, {nombre: 'Yomvi', cif: 'A847683476'}]
            })
        }, 3000 );
        setTimeout(() => {
            this.setState({titulo: 'Listado de clientes actualizado'})
        }, 5000 );
    }

    render() {
        return (
            <>
                <Nav />
                <ClientesDashboard titulo={this.state.titulo} clientes={this.state.clientes} />
                <Productos />
            </>
        );
    }
}

export default App;

