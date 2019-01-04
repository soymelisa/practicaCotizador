import Productos from './Productos';
import Header from './Header';
import React, {Component} from 'react';
import Footer from './Footer';

class Aplicacion extends Component{
    
    state = {
        productos : []
    };
    
    componentDidMount() {
        
        const productos = [
            {nombre: 'Libro Cthulhu', precio: 200},
            {nombre: 'Disco de música', precio: 240},
            {nombre: 'Crema facial', precio: 800},
            {nombre: 'Lentes', precio: 5500},
            {nombre: 'Libreta', precio: 35}
        ]

        setTimeout( () => {
            this.setState({
                productos : productos
            });
        }, 3000);
    }

    render() {
        return (
            <div>
                <Header
                    titulo="Mis compras para el buen fin"
                />
                <Productos
                    productos={this.state.productos}
                />
                <Footer />
            </div>
        )
    }

}


export default Aplicacion;