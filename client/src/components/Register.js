import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import './Register.css'
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
  root: {
    // backgroundImage: `url(https://source.unsplash.com/random)` ,
    // backgroundRepeat: 'no-repeat',
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
   
    // backgroundSize: 'cover',
    // // backgroundPosition: 'center',
    margin: "0px",
    padding: "0px",
    top:"0"
  },
    paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
      alignItems: 'center',
background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      // backgroud: "white",
    "padding":"30px"
  },
    // cont:{
    //   marginTop:"70px" 
    // },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
    // marginTop:"150px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
function Register() {
    const classes = useStyles();
    const [first_name, setFName] = useState('');
    const [last_name, setLName] = useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [message, setMessage] = useState("");
    // let history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault()
    //   const newUser = {
    //       first_name: first_name,
    //       last_name: last_name,
    //       email:email,
    //       password:password,
    //     age: age,
    //       weight:weight
    // }
    if (first_name === "" || email === "" || password === "")
      setMessage("Form incomplete")
    else {
      fetch("/users/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          age: age,
          weight: weight
        }),
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          if (res.message === 'User already exists')
            setMessage("User already registered!")
          else {
            setMessage("User registered!")
            //  history.push("/login")
          }
          setEmail("");
          setPassword("");
          setFName("");
          setLName("");
          setAge("");
          setPassword("");
        })
        .catch(err => console.log(err));
    }
  }

  return (
      <div className={classes.root}>
  <Container component="main" maxWidth="xs" className={classes.cont}>
        <CssBaseline />
          <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up With Us
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
                     <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="first_name"
            label="First Name"
            name="first_name"
            autoComplete="last_name"
            autoFocus
        value={first_name} onChange={(e)=>(setFName(e.target.value))}
          />
                     <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="last_name"
            label="Last Name"
            name="last_name"
            autoComplete="last_name"
            autoFocus
        value={last_name} onChange={(e)=>(setLName(e.target.value))}
          />
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
                 <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="age"
            label="Age"
            type="number"
            id="age"
            autoComplete="current-password"
         value={age} onChange={(e)=>(setAge(e.target.value))}
            />
                 <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Weight(in kg)"
            label="Weight"
            type="number"
            id="weight"
            autoComplete="current-password"
         value={weight} onChange={(e)=>(setWeight(e.target.value))}
            />
              <h4 style={{ textAlign: "left",margin:0,"font-weight":"bold"}}>{message}</h4>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              Sign Up
          </Button>
          </form>
           <Link color="inherit" href="/login" style={{fontSize:"20px"}}>
        Login Here!
      </Link>
     </div>
      <Box mt={8}>
        <Copyright />
      </Box>
        </Container>
      </div>
        )
    }

export default Register