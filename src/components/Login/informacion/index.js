import React from 'react';
import logo from '../../../img/icon-blanco.png';
import '../index.css';

const Informacion = () => {
    return ( 
        <div>
            <img src={logo} alt="Logo información" className="logo-info"/>
            <h1 className="titulo-proyecto">PROYECTO MÚSICA</h1>
            <p className="texto">EXPLORA, INFORMATE Y CONOCE TODO SOBRE LA INDUSTRIA MUSICAL</p>
        </div>
     );
}
 
export default Informacion;