import React, {useContext} from 'react';
import {Link} from 'wouter';
import { UserContext } from '../../../context/UserContext';
import Busqueda from "../busqueda/index";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import '../index.css';

// Imagenes
import userfoto from '../../../img/usuario.png';
import iconblanco from '../../../img/icon-blanco.png';

/* BORDES Y POSICION DEL MENU */
const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }))(MenuItem);

  
const Header = () => {
    //const isLogged = false;
    const { username, setUsername } = useContext(UserContext);
    const { usernameAPI, setUsernameAPI } = useContext(UserContext);

    const ifUsername = username;
    const ifUsernameAPI = usernameAPI;

    /*
            <header className="gf-header">
                {
                    username === ''
                    ? <h1>{usernameAPI}</h1>
                    : <h1>{username}</h1>
                }
                
            <Link to='/'>
                Cerrar sesión
            </Link>
        </header>
    */

        const [anchorEl, setAnchorEl] = React.useState(null);

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
      
        const handleClose = () => {
            setAnchorEl(null);
        };

    return ( 
        <>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          centered
        >
             
            <img src={userfoto} alt="" className="FotoUsuario" />
            <Button
              endIcon={<KeyboardArrowDownIcon />}
              className="BotonPrincipal"
              id="BotonPrincipal"
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              onClick={handleClick}
            >
            PEREZ PEREZ
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              >
              <StyledMenuItem>
              <ListItemIcon>
                <SendIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
                </StyledMenuItem>
              </StyledMenu>
            <Busqueda />
            <Tab id="NombreTab" label="INICIO" />
            <Tab id="NombreTab" label="TOP" />
            <Tab id="NombreTab" label="HITS" />
            <Tab id="NombreTab"label="NEWS" />
            <Tab id="NombreTab" label="NEWSLETTER" />
            <img src={iconblanco} id="FotoPrincipal" alt=""/>
        </Tabs>
      </>
     );
}
 
export default Header;