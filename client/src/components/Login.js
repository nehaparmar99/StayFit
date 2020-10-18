import React, { useState,useEffect } from 'react'
import { login } from './UserFunctions'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
function Login() {
        const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	let history = useHistory();
    const onSubmit= (e)=> {
        e.preventDefault()
        console.log("making request");
        const user = {
            email: email,
            password: password
        }
        console.log(user)
        login(user).then(res => {
            console.log(res);
            // if (res.error) {
            // 	console.log("This is: " + this)
                history.push("/dashboard")
            // }
        })
        setEmail("");
        setPassword("")
    }
    return (
               <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
        value={email} onChange={(e)=>(setEmail(e.target.value))}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
         value={password} onChange={(e)=>(setPassword(e.target.value))}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>    
            // <div className="container">
            //     <div className="row">
            //         <div className="col-md-6 mt-5 mx-auto">
            //             <form noValidate onSubmit={this.onSubmit}>
            //                 <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            //                 <div className="form-group">
            //                     <label htmlFor="email">Email Address</label>
            //                     <input type="email"
            //                         className="form-control"
            //                         name="email"
            //                         placeholder="Enter Email"
            //                         value={this.state.email}
            //                         onChange={this.onChange} />
            //                 </div>
            //                 <div className="form-group">
            //                     <label htmlFor="password">Password </label>
            //                     <input type="password"
            //                         className="form-control"
            //                         name="password"
            //                         placeholder="Enter Password"
            //                         value={this.state.password}
            //                         onChange={this.onChange} />
            //                 </div>

                            // <button type="submit" className="btn btn-lg btn-primary btn-block">
                            //     Sign in
                            // </button>
            //             </form>
            //         </div>
            //     </div>
            // </div>
        )
    }

export default Login
