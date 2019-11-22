import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { FormControl, InputLabel, Select, MenuItem, Menu, Box } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import grey from '@material-ui/core/colors/grey';
import LoginHandler from './LoginHandler';
import Switcher from './Switcher';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  palette: {
    primary: grey[50],
  },
  paper: {
    padding: theme.spacing(8),
    color: theme.palette.text.light,
    borderRadius: 0, 
    boxShadow: 'none', 
    background: 'linear-gradient(to right bottom,#00f2fe,#4facfe)',
    textColor: theme.palette.primary,
    maxWidth: 1200
  },
  heading: {
    marginRight: theme.spacing(1),
  },
  responsive: {
        
        [theme.breakpoints.down('sm')]: {
            maxWidth: 250,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            maxWidth: 420,
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 490,
        },
        [theme.breakpoints.between('md', 'lg')]: {
            maxWidth: 1235,
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 1300,
        }
  },
 
  images: {
    backgroundImage: `url("https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656_960_720.jpg")`
  },
  images0: {
    backgroundImage: `url("https://cdn.pixabay.com/photo/2016/11/08/19/01/sunrise-1809178_960_720.jpg")`
  },
  images1: {
    backgroundImage: `url("https://images.unsplash.com/photo-1474140214938-f0295cf3d18e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")`
  },
  images2: {
    backgroundImage: `url("https://cdn.pixabay.com/photo/2014/04/08/19/38/sky-319546_960_720.png")`
  },
  images3: {
    backgroundImage: `url("https://cdn.pixabay.com/photo/2013/08/09/05/54/layer-170971_960_720.jpg")`
  },
  intro: {
    fontFamily: theme.typography.fontFamily['Roboto'],
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      transform: 'translateY(280%)',
      textColor: theme.palette.secondary,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      textAlign: 'center',
      transform: 'translateY(-280%)',
      textColor: theme.palette.secondary,
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      transform: 'translateY(-250%)',
      textColor: theme.palette.secondary,
      fontSize: 40
    },
    [theme.breakpoints.between('md', 'lg')]: {
      textAlign: 'center',
      transform: 'translateY(-800%)',
      textColor: theme.palette.secondary,
      fontSize: 60
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'center',
      transform: 'translateY(-280%)',
      textColor: theme.palette.secondary,
    }
  },
  cards: {
    maxWidth: 300,
    padding: theme.spacing(2),
    marginLeft: 10,
    borderRadius: 0,
  },large: {
    height: 100,
  },
  positions: {
    padding: theme.spacing(2)
  },
  align: {
    display: 'flex',
    alignContent: 'center',
    marginLeft: 70
  },
  login: {
    maxWidth: 300,
    padding: theme.spacing(3),
    alignItems: 'center'
  }, centry: {
    display: 'flex',
    justifyItems: 'space-around',
    padding: theme.spacing(3),
  }, rounder: {
    background: 'linear-gradient(to right bottom, #0055FF, #0097FF)',
    padding: theme.spacing(6),
    fontSize: 10,
    textColor: theme.palette.secondary,
    borderRadius: 0
  }, app: {
    color: theme.palette.third,
    background: theme.palette.secondary.main,
  }
}));
const defaultProps = {
  borderColor: 'text.primary',
  border: 1, 
  alignItems: 'center',
  margin: 'auto'
};


export default function Context() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <div className={classes.root}>
    <AppBar position="fixed" style={{  boxShadow: 'none'}} className={classes.app}>
            <Toolbar className={classes.root}>
                <Grid justify="space-between" container spacing={24}>
                <Grid item>
                    <Typography variant="h6" color='primary'>Helvetica</Typography>
                </Grid>
                <Grid item>
                <Button aria-controls="simple-menu" aria-haspopup="true" color='third' onClick={handleClick}>menu</Button>
                    <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Grid>
                </Grid>
            </Toolbar>
    </AppBar>
    
      <Grid container>
            <Grid item lg={12}>
              <img className={classes.responsive} src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='error' />
              <Typography variant="h2" color="secondary" className={classes.intro}>Welcome to the World of React.</Typography>
            </Grid>
      </Grid>
        <Grid container spacing={3} className={classes.positions}>
            <Grid item xs={6} sm={4} >
                  <Card className={classes.cards}  elevation={10} >
                      <CardMedia className={classes.large} image='https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='components' />
                        <CardContent>
                          <Typography variant='h5' component='h2'>
                            MyCard
                          </Typography>
                          <Typography variant='body2' color='textSecondary' component='p'>React is a widespread group of squamate reptiles, with over 6,000 species,</Typography>
                        </CardContent>
                    <Button size='small' >Share!</Button>
                    <Button size='small'>Learn More!</Button>
                  </Card>
            </Grid>
            <Grid item xs={6} sm={4} >
                <Card className={classes.cards} elevation={10} >
                      <CardMedia className={classes.large} image='https://images.pexels.com/photos/669228/pexels-photo-669228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='components' />
                        <CardContent>
                          <Typography variant='h5' component='h2'>
                            MyCard
                          </Typography>
                          <Typography variant='body2' color='textSecondary' component='p'>React is a widespread group of squamate reptiles, with over 6,000 species,</Typography>
                        </CardContent>
                    <Button size='small' >Share!</Button>
                    <Button size='small'>Learn More!</Button>
                  </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card className={classes.cards} elevation={10}>
                      <CardMedia className={classes.large} image='https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='components' />
                        <CardContent>
                          <Typography variant='h5' component='h2'>
                            MyCard
                          </Typography>
                          <Typography variant='body2' color='textSecondary' component='p'>React is a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica</Typography>
                        </CardContent>
                    <Button size='small' >Share!</Button>
                    <Button size='small'>Learn More!</Button>
                  </Card>
            </Grid>
        </Grid>
        <Grid container >
          <Grid item lg>
              <Paper className={classes.paper} component='p'><Typography  color='secondary'>The dialog box is a graphical control element in the form of a small window that communicates information to the user and prompts them for a response. Dialog boxes are classified as "modal" or "modeless", depending on whether they block interaction with the software that initiated the dialog. A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose </Typography></Paper>
          </Grid>
        </Grid>
        <Grid container className={classes.centry} >
        <Grid item xs={12} >
            <Box borderRadius={16} className={classes.login} {...defaultProps}>
            <LoginHandler />
            </Box>
        </Grid>
        </Grid>
        <Paper className={classes.rounder}><Typography color='secondary' style={{fontSize: 20}}>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.</Typography> </Paper>
         <Grid container>
         <Grid item lg style={{margin: 'auto'}}>
            <Switcher />
         </Grid>
         </Grid>
    </div>
  
  );
}