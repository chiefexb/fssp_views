import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle'

import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

class App extends React.Component {
    constructor() {
        super();

       // this.loadModel();

        this.state = {
            text: '',
            lastname:'',
            data: [],
            region: '',
            but_push: false,
            loaded: false,
            tooltip: false


        };
}
 componentDidMount() {
    fetch("apivitrinavalue")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }


    render() {





         //const navbar = {backgroundColor: '#BBBBBB'};
        return (

         <Container  maxWidth="false">
            <AppBar position="static">
                <Toolbar >
                  <img src="/static/head_left.gif" alt="logo"  />

                    <Typography  >
                        <Link href="#" >
                            Link
                         </Link>


                           <Link href="#" color="inherit">
                                {'Сэндвичи'.toUpperCase()}
                            </Link>
                            <Link href="#" color="inherit">
                                      {'Пиццета'.toUpperCase()}
                            </Link>
                            <Link href="#" variant="body2">
                                {'variant="body2"'}
                             </Link>
                                 <IconButton style ={{marginRight: 2  }}
                                             aria-label="account of current user"
                                             aria-controls="menu-appbar"
                                             aria-haspopup="true"

                                             color="inherit"
                                           >
                                             <AccountCircle />
                                           </IconButton>
                    </Typography>
                 </Toolbar>
                      </AppBar>
  
     <TableContainer>
      <Table >
        <TableHead>
          <TableRow>
           <TableCell>
          2
          </TableCell>
          
          </TableRow>
           
          </TableHead>
          <TableBody>
            <TableRow>
           <TableCell>
          2
          </TableCell>
          
          </TableRow>
          </TableBody>
        </Table >
   </TableContainer>
   </Container>



        );
    }
}

export default App;
