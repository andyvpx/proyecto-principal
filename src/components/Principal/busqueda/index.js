import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      position: 'absulote',
      width: '20ch',
      left: '19ch',
    },
  },
}));

const Busqueda = () => {
  const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
    <TextField
        color="secondary"
        className={classes.root}
        id="input-with-icon-textfield"
        label="Search"
        InputProps={{
        startAdornment: (
            <InputAdornment position="start">
            <SearchIcon  />
            </InputAdornment>
        ),
        }}
    />
    </form>
  );
}


export default Busqueda;

