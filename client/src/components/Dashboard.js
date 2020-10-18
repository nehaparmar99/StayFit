// import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import NavBar from "./NavBar";
// import Home from "./Home";
// import TodoList from './TodoList'
// import "../App.css"
// import Album from "./Album"
// const Dashboard = () => {

//   return (
//     <div className="App">
//       <NavBar></NavBar>
//       <Home></Home>
//     {/* <Album></Album> */}
//     <TodoList></TodoList>
//     </div>
   
//   );
// };

// export default Dashboard
// // import React from 'react';
// // import clsx from 'clsx';
// // import { makeStyles } from '@material-ui/core/styles';
// // import CssBaseline from '@material-ui/core/CssBaseline';
// // import Drawer from '@material-ui/core/Drawer';
// // import Box from '@material-ui/core/Box';
// // import AppBar from '@material-ui/core/AppBar';
// // import Toolbar from '@material-ui/core/Toolbar';
// // import List from '@material-ui/core/List';
// // import Typography from '@material-ui/core/Typography';
// // import Divider from '@material-ui/core/Divider';
// // import IconButton from '@material-ui/core/IconButton';
// // import Badge from '@material-ui/core/Badge';
// // import Container from '@material-ui/core/Container';
// // import Grid from '@material-ui/core/Grid';
// // import Paper from '@material-ui/core/Paper';
// // import Link from '@material-ui/core/Link';
// // import MenuIcon from '@material-ui/icons/Menu';
// // import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// // import NotificationsIcon from '@material-ui/icons/Notifications';
// // import { mainListItems, secondaryListItems } from './listItems';
// // import Chart from './Chart';
// // import Deposits from './Deposits';
// // import Orders from './Orders';
// // import TodoList from './TodoList'
// // function Copyright() {
// //   return (
// //     <Typography variant="body2" color="textSecondary" align="center">
// //       {'Copyright © '}
// //       <Link color="inherit" href="https://material-ui.com/">
// //         Your Website
// //       </Link>{' '}
// //       {new Date().getFullYear()}
// //       {'.'}
// //     </Typography>
// //   );
// // }

// // const drawerWidth = 240;

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     display:'flex' ,
// //   },
// //   toolbar: {
// //     paddingRight: 24, // keep right padding when drawer closed
// //   },
// //   toolbarIcon: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'flex-end',
// //     padding: '0 8px',
// //     ...theme.mixins.toolbar,
// //   },
// //   appBar: {
// //     zIndex: theme.zIndex.drawer + 1,
// //     transition: theme.transitions.create(['width', 'margin'], {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.leavingScreen,
// //     }),
// //   },
// //   appBarShift: {
// //     marginLeft: drawerWidth,
// //     width: `calc(100% - ${drawerWidth}px)`,
// //     transition: theme.transitions.create(['width', 'margin'], {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.enteringScreen,
// //     }),
// //   },
// //   menuButton: {
// //     marginRight: 36,
// //   },
// //   menuButtonHidden: {
// //     display: 'none',
// //   },
// //   title: {
// //     flexGrow: 1,
// //   },
// //   drawerPaper: {
// //     position: 'relative',
// //     whiteSpace: 'nowrap',
// //     width: drawerWidth,
// //     transition: theme.transitions.create('width', {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.enteringScreen,
// //     }),
// //   },
// //   drawerPaperClose: {
// //     overflowX: 'hidden',
// //     transition: theme.transitions.create('width', {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.leavingScreen,
// //     }),
// //     width: theme.spacing(7),
// //     [theme.breakpoints.up('sm')]: {
// //       width: theme.spacing(9),
// //     },
// //   },
// //   appBarSpacer: theme.mixins.toolbar,
// //   content: {
// //     flexGrow: 1,
// //     height: '100vh',
// //     overflow: 'auto',
// //   },
// //   container: {
// //     paddingTop: theme.spacing(4),
// //     paddingBottom: theme.spacing(4),
// //   },
// //   paper: {
// //     padding: theme.spacing(2),
// //     display: 'flex',
// //     overflow: 'auto',
// //     flexDirection: 'column',
// //   },
// //   fixedHeight: {
// //     height: 240,
// //   },
// // }));

// // export default function Dashboard() {
// //   const classes = useStyles();
// //   const [open, setOpen] = React.useState(true);
// //   const handleDrawerOpen = () => {
// //     setOpen(true);
// //   };
// //   const handleDrawerClose = () => {
// //     setOpen(false);
// //   };
// //   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

// //   return (
// //     <div>
// //       <CssBaseline />
// //       <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
// //         <Toolbar className={classes.toolbar}>
// //           <IconButton
// //             edge="start"
// //             color="inherit"
// //             aria-label="open drawer"
// //             onClick={handleDrawerOpen}
// //             className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //           <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
// //             Dashboard
// //           </Typography>
// //           <IconButton color="inherit">
// //             <Badge badgeContent={4} color="secondary">
// //               <NotificationsIcon />
// //             </Badge>
// //           </IconButton>
// //         </Toolbar>
// //       </AppBar>
// //       <Drawer
// //         variant="permanent"
// //         classes={{
// //           paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
// //         }}
// //         open={open}
// //       >
// //         <div className={classes.toolbarIcon}>
// //           <IconButton onClick={handleDrawerClose}>
// //             <ChevronLeftIcon />
// //           </IconButton>
// //         </div>
// //         <Divider />
// //         <List>{mainListItems}</List>
// //         <Divider />
// //         <List>{secondaryListItems}</List>
// //       </Drawer>
// //       <main className={classes.content}>
// //         <div className={classes.appBarSpacer} />
// //         <Container maxWidth="lg" className={classes.container}>
// //           <Grid container spacing={3}>
// //             {/* Chart */}
// //             <Grid item xs={12} md={8} lg={9}>
// //               <Paper className={fixedHeightPaper}>
// //                 <Chart />
// //               </Paper>
// //             </Grid>
// //             {/* Recent Deposits */}
// //             <Grid item xs={12} md={4} lg={3}>
// //               <Paper className={fixedHeightPaper}>
// //                 <Deposits />
// //               </Paper>
// //             </Grid>
// //             {/* Recent Orders */}
// //             <Grid item xs={12}>
// //               <Paper className={classes.paper}>
// //                 <Orders />
// //               </Paper>
// //             </Grid>
// //           </Grid>
// //           <Box pt={4}>
// //             <Copyright />
// //           </Box>
// //         </Container>
// //           <TodoList></TodoList>
// //       </main>
// //     </div>
// //   );
// // }
import React, { Component } from 'react'
import ChartistGraph from 'react-chartist'
import TodoList from './TodoList'

class Dashboard extends Component {
  render() {
    let dataPie = {
      labels: ["40%", "20%", "40%"],
      series: [40, 20, 40]
    }
    let dataSales = {
      labels: [
        "9:00AM",
        "12:00AM",
        "3:00PM",
        "6:00PM",
        "9:00PM",
        "12:00PM",
        "3:00AM",
        "6:00AM"
      ],
      series: [
        [287, 385, 490, 492, 554, 586, 698, 695],
        [67, 152, 143, 240, 287, 335, 435, 437],
        [23, 113, 67, 108, 190, 239, 307, 308]
      ]
    }
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card ">
                <div className="card-header ">
                  <h4 className="card-title">TODOS</h4>
                  <p className="card-category">Performance</p>
                </div>
                <div className="card-body ">
                  <ChartistGraph data={dataPie} type="Pie" />
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> DONE
                                        <i className="fa fa-circle text-danger"></i> IN PROGRESS
                                        <i className="fa fa-circle text-warning"></i> COMPLETED
                                    </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o"></i> Updated a minute ago
                                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Users Behavior</h4>
                  <p className="card-category">24 Hours performance</p>
                </div>
                <div className="card-body ">
                  <ChartistGraph data={dataSales} type="Line" />
                </div>
                <div className="card-footer ">
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> Open
                    <i className="fa fa-circle text-danger"></i> Click
                    <i className="fa fa-circle text-warning"></i> Click Second Time
                </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history"></i> Updated 3 minutes ago
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <TodoList></TodoList>
      </div>
    )
  }
}

export default Dashboard