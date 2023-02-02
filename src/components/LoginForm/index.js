import React, { useState, useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AuthContext } from "../../contexts/authContext";
import ThemeContext from "../../contexts/themeContext";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleButton from 'react-google-button'

const LoginForm = () => {
  const auth = getAuth();
  const context = useContext(AuthContext);
  const [fbCode, setFbCode] = useState("");
  const theme = useContext(ThemeContext);
  const [values, setValues] = React.useState({
      email: '',
      password: '',
      showPassword: false,
    });


  const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  

  function reg(){
    context.register(values.email, values.password)
  }

  function log(){
    context.login(values.email, values.password)
  }

  function logGoogle(){
    context.loginGoogle();
  }

  const errorCheck = (errorCode) => {
    if (errorCode === "auth/email-already-in-use"){
      setFbCode("Account Already Exists");
    } 
    if (errorCode === "auth/invalid-email") {
      setFbCode("Invalid Email Address");
    } 
    if (errorCode === "auth/missing-email") {
      setFbCode("Enter an Email Address");
    } 
    if (errorCode === "auth/internal-error") {
      setFbCode("Invalid Password");
    }
  }

  return (
    <>
    <br></br>
    <Box sx={theme.styles.root}>
    <FormControl sx={{ m: 5, mt: 5, mb: 5, width: '25ch' }} variant="outlined">
    <Typography sx={theme.styles.title} color={theme.colors.primary} component="h2" variant="h3">
        Login
      </Typography>
    </FormControl>
    <br/>
    <FormControl sx={{ m: 1, width: '25ch', color: theme.colors.primary}} variant="outlined">
      <TextField
          required
          id="outlined-required"
          label="Email"
          autoFocus={true}
          onChange={handleChange('email')}
          sx={theme.styles.textField}
        />
        </FormControl>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel sx={{color:theme.colors.primary,'&:hover': {color: theme.colors.primary}, '&.Mui-focused':{color:theme.colors.primary}}} htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        required
        id="outlined-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        onChange={handleChange('password')}
        sx={theme.styles.outlinedInput}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              color={theme.colors.primary}
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
      <Typography sx={theme.styles.err}>
        {fbCode}
      </Typography>
    <FormControl sx={{ m: 1, mt: 5, width: '25ch' }} variant="outlined">
      <Button variant="contained" sx={{backgroundColor: theme.colors.primary,'&:hover': {backgroundColor: '#f5c542'}}} onClick={reg}>Create Account</Button>
    </FormControl>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <Button variant="contained" sx={{backgroundColor: theme.colors.primary,'&:hover': {backgroundColor: '#f5c542'}}} onClick={log}>Login</Button>
    </FormControl>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <GoogleButton style={{width: '24ch'}} onClick={() => logGoogle()}></GoogleButton>
    </FormControl>
    <br></br>
      <br></br>

    </Box>
    </>
  );
};


export default LoginForm;