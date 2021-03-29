//       [ Librerias ]       
import React, {useState, useContext} from 'react';
import { useLocation } from 'wouter';
import { UserContext } from '../../../context/UserContext';

//       [ API ]       
import GoogleLogin from 'react-google-login';

//       [ Estilos ]       
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputIcon from '@material-ui/icons/Input';
import '../index.css';
import logo from '../../../img/logo.png';

//       [ Estilos ]       
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
    linea: {
        width: 360,
        height: 1,
        backgroundColor: '#707070',
        marginBottom: 30
    }
  }));


const Formulario = () => {
    //       [ Estilos ]       
    const clases = useStyles();    

    //       [ Estados Formulario ]       
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');

    //       [ useLocation ]     
    const [, navigate] = useLocation();    

    //       [ Extraer valores del context ]     
    const { setUsername } = useContext(UserContext);
    const { setUsernameAPI } = useContext(UserContext);

    //       [ onClick datos formulario ]     
    const handleSubmit = e => {
        e.preventDefault();
        setUsername(nombre)
        navigate('/inicio')
    }

    /* [ Google API ] */
    const responseGoogle = (response) => {
        setUsernameAPI(response.Rs.BT); 
        navigate('/inicio')
      }

    return ( 
        <form className={clases.root} noValidate autoComplete="off">
        <img src={logo} alt="Logo App" className="logo"/>
        <h1 className="sesion">Iniciar Sesión</h1>
        <div className={clases.linea}/>
        <TextField 
            id="outlined-basic"
            label="Nombre Completo" 
            variant="outlined" 
            name="nombre"
            onChange={e => setNombre(e.target.value)} 
            value={nombre}
            />
        <TextField 
            id="outlined-basic"
            label="Correo Electronico" 
            variant="outlined" 
            type="email"
            name="correo"
            onChange={e => setCorreo(e.target.value)} 
            value={correo}
        />
        <TextField 
            id="filled-password-input"
            label="Contraseña" 
            type="password"
            autoComplete="current-password"
            variant="outlined" 
            nombre="contraseña"
            onChange={e => setContraseña(e.target.value)} 
            value={contraseña}
            />
        <Button 
            id="Uno" 
            className="ButtonUno large"  
            variant="contained" 
            color="primary"  
            endIcon={<InputIcon />}
            onClick={handleSubmit}
        > 
            INGRESAR 
        </Button>
        <GoogleLogin
            clientId="922231217950-s62rlqpefpfhg0b7f0h4idb2i6a7ad83.apps.googleusercontent.com"
            className="ButtonDos" 
            buttonText="Continuar con Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />            

    </form> 
     );
}
 
export default Formulario;