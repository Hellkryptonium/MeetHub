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


const defaultTheme = createTheme();

export default function Authentication() {
  
    const [userName, setUserName] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const [error, setError] = React.useState();
    const [messages, setMessages] = React.useState();

    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false);

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
                name="username"
                label="Full Name"
                type="username"
                id="username"
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
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Remember Me */}
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                  />
                }
                label="Remember me"
              />

              {/* Sign In */}
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                }}
              >
                Sign In
              </Button>              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
