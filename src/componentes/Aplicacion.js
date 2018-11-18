import React, {Component} from 'react';
import Productos from './Productos';
import Header from './Header';
import Footer from './Footer';

class Aplicacion extends Component{

    render() {
        const productos = [
            {nombre: 'Libro Cthulhu', precio: 200},
            {nombre: 'Disco de música', precio: 240},
            {nombre: 'Crema facial', precio: 800},
            {nombre: 'Lentes', precio: 5500},
            {nombre: 'Libreta', precio: 35}
        ]
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