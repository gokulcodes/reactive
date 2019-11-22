import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from './TabPanel';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Paper, Tabs, Tab }  from "@material-ui/core";
import LoginHandler from './LoginHandler';


function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
        flexGrow: 2
    },
  }));
  
  export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = index => {
      setValue(index);
    };
  
    return (
      <div >
        <Paper className={classes.root} square>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            aria-label="full width tabs example"
          >
            <Tab label="Login" {...a11yProps(0)} />
            <Tab label="Register" {...a11yProps(1)} />
          </Tabs>
          </Paper>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
                <LoginHandler head='Login' />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
                <LoginHandler head='Register'/>
          </TabPanel>
        </SwipeableViews>
      </div>
    );
  }