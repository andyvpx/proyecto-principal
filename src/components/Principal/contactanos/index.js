import React, {useState} from 'react';
import {motion} from 'framer-motion';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import logo from '../../../img/icon-blanco.png';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
     const top = 50 ;
     const left = 50;
   
     return {
       top: `${top}%`,
       left: `${left}%`,
       transform: `translate(-${top}%, -${left}%)`,
     };
 }

 const useStyles = makeStyles(theme => ({
     paper: {
       position: 'absolute',
       width: 450,
       backgroundColor: theme.palette.background.paper,
       boxShadow: theme.shadows[5],
       padding: theme.spacing(2, 4, 3),
     },
 }));

const Contactanos = () => {
     const [ modalStyle ] = useState(getModalStyle);
    const classes = useStyles();

    const [contacto, setContacto] = useState(false);

    const handleOpen = () => {
        setContacto(true)
    }

    const handleClose = () => {
        setContacto(false)
    }


    return ( 
        <div className="contacto">
             <motion.div initial="hidden" animate="visible" variants={{
                  hidden: {
                       opacity: 0,
                  },
                  visible: {
                       opacity: 1,
                       transition: {
                            delay: .4
                       }
                  },
             }}>
               <img src={logo} alt="Logo información" className="logo-contacto"/>
          </motion.div>

          <h1 className="subtitulo">Para amantes músicales</h1>

          <motion.div initial="hidden" animate="visible" variants={{
                  hidden: {
                       scale: .8,
                       opacity: 0
                  },
                  visible: {
                       scale: 1,
                       opacity: 1,
                       transition: {
                            delay: .4
                       }
                  },
             }}>
               <h1 className="titulo-contacto">
                    PROYECTO MÚSICA
               </h1>   
             </motion.div>
             <Button
                className="button-contacto" 
                variant="contained" 
                color="primary"  
                endIcon={<EmailIcon />}
                onClick={handleOpen}
             >
                  Contáctanos
             </Button>

        </div>
     );
}
 
export default Contactanos;