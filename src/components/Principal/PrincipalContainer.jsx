import React from 'react';
import Header from './header/index';
import trazado from '../../img/trazado.jpg';
import './index.css';

const PrincipalContainer = () => {
    return ( 
        <div className="trazado">
          <img src={trazado} alt="" className="Trazado"/>
          <Header />
        </div>
     );
}
 
export default PrincipalContainer;