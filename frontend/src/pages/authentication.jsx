import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import Snackbar from '@mui/material/Snackbar';


const defaultTheme = createTheme();

export default function Authentication() {
  
    const [userName, setUserName] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();

    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false);

	const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
		try {
			if(formState === 0) {

				let result = await handleLogin(userName,password);
				console.log(result);

			}
			if(formState === 1) {
				let result = await handleRegister(name, userName, password);
				console.log(result);
				setUserName("");
				setMessage(result);
				setOpen(true);
				setError("");
				setFormState(0);
				setPassword("");
			}
		} catch (err) {
			let message = (err.response.data.message);
			setError(message);
		}
    }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh',
        }}
      >
        <CssBaseline />

        {/* LEFT: IMAGE */}
        <Grid
          size={{ sm: 4, md: 7 }}
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },

            backgroundImage:
              'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80)',

            backgroundRepeat: 'no-repeat',

            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[50]
                : theme.palette.grey[900],

            backgroundSize: 'cover',

            backgroundPosition: 'center',
          }}
        />

        {/* RIGHT: LOGIN FORM */}
        <Grid
          size={{ xs: 12, sm: 8, md: 5 }}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,

              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Lock Icon */}
            <Avatar
              sx={{
                m: 1,
                bgcolor: 'secondary.main',
              }}
            >
              <LockOutlinedIcon />
            </Avatar>

            
            <div>
                <Button variant={formState === 0 ? "contained" :"" } onClick={() => {
                    setFormState(0)
                }}>
                    Sign In
                </Button>
                <Button variant={formState === 1 ? "contained" : ""} onClick={() => {
                    setFormState(1)
                }}>
                    Sign Up
                </Button>
            </div>

            {/* FORM */}
            <Box
              component="form"
              noValidate
              
              sx={{
                mt: 1,
                width: '100%',
              }}
            >
              {formState === 1 ?  <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                label="Full Name"
                type="name"
                id="name"
				value={name}
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
               : ""}

             
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
				value={userName}
                autoFocus
                onChange={(e) => setUserName(e.target.value)}
              />

              {/* Password */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
				value={password}
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Sign In */}
			  <p style={{color: "red"}}>{error}</p>

              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                }}
				onClick={handleAuth}
              >
                {formState === 0 ? "Log In" : "Register" } 
              </Button>              
            </Box>
          </Box>
        </Grid>
      </Grid>
				<Snackbar
				open={open}
				autoHideDuration={4}
				message={message}
				/ >

				
    </ThemeProvider>
  );
}
