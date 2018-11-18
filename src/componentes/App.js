import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';

class App extends Component {

  state = {
    resultado : '',
    datos: {}
  }
  cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos;

    // Agregar que la base sea de 2000
    let resultado = 2000;

    // por cada año restar el seguro 3% 
    const diferencia = obtenerDiferenciaAnio(year);
    
    resultado -= ((diferencia * 3 ) * resultado) / 100;
    // Si elige auto Europeo, el porcentaje cambia a 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;

    /* el plan del auto, el básico incrementa el valor 20%
    y la cobertura completa, 50% 
    */ 
    let incrementoPlan = obtenerPlan(plan);
    
    // dependiendo del plan incrementar aa 
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    
    // crear objeto para el resumen
    const datosAuto = {
      marca : marca,
      plan : plan, 
      year : year
    }
    this.setState({
      resultado: resultado, 
      datos : datosAuto
    })

  }
  render() {
    return (
      <div className="contenedor">
        <Header
          titulo = 'Cotizador de seguro de Autos'
        />
        <div className="contenedor-formulario">
        <Formulario
          cotizarSeguro= {this.cotizarSeguro}
        />
        </div>
      </div>
    );
  }
}

export default App;
