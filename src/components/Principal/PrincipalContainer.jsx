import React, {useState, useEffect} from 'react';
import Header from './header/index';
import Contactanos from './contactanos/index';
import ApartadoTrending from './trending/index';

import trazado from '../../img/trazado.jpg';
import './Principal.css';
import { makeStyles } from '@material-ui/core/styles';

//       [ Estilos ]       
const useStyles = makeStyles((theme) => ({

  fondo: {
    background: 'linear-gradient(90deg, rgba(20,27,37,1) 43%, rgba(30,53,71,1) 76%, rgba(36,93,119,1) 100%)',
    height: '100vh'
  }
}));



const PrincipalContainer = () => {

  const clases = useStyles();    


    return ( 
          <div className={clases.fondo}>
            <img src={trazado} alt="" className="Trazado"/>
            <Header/>
            <Contactanos/>      
            <ApartadoTrending/> 
          </div>
     );
}
  
export default PrincipalContainer;