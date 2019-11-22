import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel, Select, MenuItem, FormGroup, TextField, Button, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
      },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 15,
    },align: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }, textField: {
        maxWidth: 1000
    }
})
);


export default function LoginHandler(props){

    const classes = useStyles();
    const [Field, setField] = useState(new Date('2014-08-18T21:11:54'));

    const handleChange = Date => {
        setField(Date);
    }
    return(
        <div className={classes.align}>
            <PersonIcon color='primary' style={{ fontSize: 30 }}/>
    <Typography variant="h5" color='primary'>{props.head}</Typography>
            <form className={classes.formGroup}>
                   <FormControl className={classes.formControl}>
                   <TextField id="outlined-basic"
                        className={classes.textField}
                        label="Name"
                        margin="normal"
                        variant="outlined" />
            </FormControl>
            <FormControl className={classes.formControl}>
            <TextField id="outlined-basic"
                        className={classes.textField}
                        label="Email Address"
                        margin="normal"
                        variant="outlined" />
                    
            </FormControl>
            <FormControl className={classes.formControl}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={Field}
                        onChange={handleChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
            </MuiPickersUtilsProvider>
            </FormControl>
            </form> 
                <Button variant='contained' color='primary'>Submit</Button>
            </div>
    );
}