import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import CheckIcon from '@material-ui/icons/Check';


import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
//import SyntaxHighlighter from 'react-syntax-highlighter';
//import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


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
import ViewListIcon from '@material-ui/icons/ViewList';
import BugReportIcon from '@material-ui/icons/BugReport';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';







import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';


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
import RefreshIcon from '@material-ui/icons/Refresh';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import CommentIcon from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';






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
            result: [],
            result2: [],
            region: '',
            but_push: false,
            loaded: false,
            loaded2: false,
            tooltip: false,
            windows: 'vitrina',
            debug: false


        };
       
        this.setwindows2_filters = this.setwindows2_filters.bind(this);
        this.setwindows2_vitrina = this.setwindows2_vitrina.bind(this);
        this.setdebug= this.setdebug.bind(this);
}
   setwindows2_filters() {
        
        this.setState({windows: 'filters'});
       
    
  }; 
   setwindows2_vitrina() {
        
        this.setState({windows: 'vitrina'});
       
    
  }; 
  setdebug() {
        if  (this.state.debug) {
        this.setState({debug: false});
       } else {
              this.setState({debug: true});
        }
       
    
  }; 
   
 componentDidMount() {
    fetch("api/vitrina?vitrina_id=1")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(result => {
        this.setState(() => {
          return {
            result,
            loaded: true
          };
        });
      });

fetch("api/vitrina/field?vitrina_id=1")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(result => {
        this.setState(() => {
          return {
            result,
            loaded: true
          };
        });
      });

}
    render() {
        let code=`select 'all_v' as inf, count(DOC_IP.IP_EXEC_PRIST_NAME) as f_col  
		from doc_ip join doc_ip_doc on doc_ip_doc.id=doc_ip.id  
					join document on document.id=doc_ip.id 
		where doc_ip.ip_risedate>=current_date <
		union all         `
       let code_ed=
        <SyntaxHighlighter language="sql" >
         {code}

          </SyntaxHighlighter>;
       let content = <div/>;
       let debug_info=<div/>;
       
        if (this.state.debug) {
         debug_info=JSON.stringify (this.state) 
        }
    
       if (this.state.windows=='filters') {
          document.title = "Добавление фильров | ФССП Витрина"
          content=
          <List>
          
          
          
               <ListItem  dense button >
            <ListItemIcon>
              <Checkbox
                
                
              />
            </ListItemIcon>
            <ListItemText  primary="TEST" />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
              <PlaylistAddIcon />

              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          
          <ListItem button>
           <ListItemIcon>
            <CheckIcon />
           </ListItemIcon>
             </ListItem>
          
          </List>
          
          
            
} 
       if (this.state.windows=='vitrina') {
           document.title = "Витрины| ФССП Витрина"
         if (this.state.loaded) {
             if (this.state.result.rez) {
                if (this.state.loaded2) {
             if (this.state.result2.rez) {
     content=
     <TableContainer>
      <Table >
          {this.state.result2.rez.map(item => ( 
        <TableHead key={item.id}>
          <TableRow>
           <TableCell>
            {item.id}
          </TableCell>
          <TableCell>
            {item.col1}
          </TableCell>
           <TableCell>
            {item.col2}
          </TableCell>
          
          </TableRow>
   
          </TableHead>
          ))}
          
               {this.state.result.rez.map(item => ( 
             <TableBody  key={item.id} > 
            <TableRow>
           <TableCell>
            {item.id}
          </TableCell>
          <TableCell>
            {item.col1}
          </TableCell>
           <TableCell>
            {item.col2}
          </TableCell>
          
          </TableRow>
          </TableBody>
         ))}
        </Table >
   </TableContainer>
  }
} 
 
} 
}
}



         //const navbar = {backgroundColor: '#BBBBBB'};
        return (
         <Container  maxWidth="false">
            <AppBar position="static">
                <Toolbar >
                  <img src="/static/head_left.gif" alt="logo"  />

                    
                       
                         <Button color="inherit">ОИП</Button>
                            <Button color="inherit">Депозит</Button>
                               <Button color="inherit">Login</Button>
                         


                          
                             <IconButton onClick={this.setwindows2_filters } aria-label="delete">
                             <FilterListIcon />
                             </IconButton>
                             
                              <IconButton   onClick={this.setwindows2_vitrina} aria-label="delete">
                             <ViewListIcon />
                             </IconButton>
                             
                              <IconButton   onClick={this.setdebug} aria-label="delete">
                             <BugReportIcon />
                             </IconButton>
                            
                                <IconButton    aria-label="delete">
                            <SettingsIcon />
                             </IconButton>


                             
                             
                           
                   
                 </Toolbar>
                      </AppBar>
                      {debug_info}
                      {code_ed}
                    
          {content}
     
   </Container>
      
);

        
    }
}

export default App;
