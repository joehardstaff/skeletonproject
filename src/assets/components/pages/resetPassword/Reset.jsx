import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { auth, sendPasswordResetEmail } from 'firebase/auth';

const [email, setEmail] = useState('')
const auth = getAuth();

triggerRestEmail = async () =>{
  await sendPasswordResetEmail(auth, email);
  console.log('password reset email sent')
}

const resetPassword = () => {
  return (
    <Grid 
      container 
      component="main" 
      sx={{ 
        height: '100vh' }}
      >
        <Grid 
        item xs={12} 
        sm={8} 
        md={5}  
        elevation={6} 
        sx={{
            bgcolor: '#2B3336'
            }}
        square> 
        <Typography 
            component="h2" 
            variant="h5" 
            sx={{ 
                mt: 13,
                color: '#FFFFFF',
            }}
            >
              Please Enter Your Email
            </Typography>
        <TextField
                margin="normal"
                required
                fullWidth
                id="reset"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                variant="filled"
                sx={{ 
                    mt: 9,
                    bgcolor: '#272829',
                    input:{color: '#FFFFFF'},
                    label:{color: '#FFFFFF'},
                    borderRadius: '12px',
                }}
              />   
              <Button
                type="submit"
                size="md"
                onClick={function(){}}
                variant="contained"
                sx={{ 
                    mt: 15, 
                    mb: 2,
                    bgcolor: '#272829', 
                    variant:{color:'white'},
                    width: '250px',
                    borderRadius: '12px',
                }}
              >
                send email
              </Button>
        </Grid>
      </Grid>
  )
}

export default resetPassword;