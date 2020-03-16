import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import CheckIcon from '@material-ui/icons/Check';
import { borders } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import DescriptionIcon from '@material-ui/icons/Description';
import Tooltip from '@material-ui/core/Tooltip';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import Drawer from '@material-ui/core/Drawer';
import cookie from "react-cookies";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import DoneIcon from '@material-ui/icons/Done';
import ScheduleIcon from '@material-ui/icons/Schedule';










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
import AddIcon from '@material-ui/icons/Add';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'









import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';


import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle'

import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
//import {  useAuth } from "./context/auth";

// End Import  ==========================================================================


class App extends React.Component {
  constructor() {
    super();
    this.state = {
            lastname:'',
            result: [],
            result2: [],
            result3: [],
            result4: [],
            result5: [],
            anchor_el: null,
            spi_id:'0',
            is_auth: false,
            spi_checked: false,
            sidebar: false,
            SQLtext:'',
            code: '',
            category: 1,
            counter_id:1,
            vitrina_id:'1',
            new_category: '',
            region: '',
            but_push: false,
            loaded: false,
            loaded2: false,
            loaded3: false,
            loaded5: false,
            menu_open: false,
            login_form: false,
            tooltip: false,
            windows: 'vitrina',
            debug: false,
            login_name:'',
            passw: ''
    };

    this.setwindows2_filters = this.setwindows2_filters.bind(this);
    this.setwindows2_vitrina = this.setwindows2_vitrina.bind(this);
    this.setdebug= this.setdebug.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.SQLChange=this.SQLChange.bind(this);
    this.handleClickNewCat=this.handleClickNewCat.bind(this);
    this.NewCatChange=this.NewCatChange.bind(this);
    this.toggleDrawerOpen=this.toggleDrawerOpen.bind(this);
    this.toggleDrawerClose=this.toggleDrawerClose.bind(this);
    this.setwindows2_scheduller=this.setwindows2_scheduller.bind(this);
    this.handleClickCount=this.handleClickCount.bind(this);
    this.CounterChange=this.CounterChange.bind(this);
    this.renderTable=this.renderTable.bind(this);
    this.handleChange_spi_checked=this.handleChange_spi_checked.bind(this);
    this.handleClickOpen=this.handleClickOpen.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
    this.handleLoginChange=this.handleLoginChange.bind(this);
    this.handlePasswChange=this.handlePasswChange.bind(this); 
    this.handleMenuClose=this.handleMenuClose.bind(this); 
    this.handleMenuClick=this.handleMenuClick.bind(this); 
    
    
    
     
   
    
    

    }


    setwindows2_filters() {
      this.setState({windows: 'filters'});
      this.toggleDrawerClose()
         //this.render()
    };


    setwindows2_scheduller() {
        this.setState({windows: 'scheduller'});
    };


    setwindows2_vitrina() {
      this.setState({windows: 'vitrina'});
    };


    handleChange(e) {
      let text = e.target.value;
      this.setState({category: text});
        //this.calculate(text);
    };
    
    handleLoginChange(e) {
      let text = e.target.value;
      this.setState({login_name: text});
        //this.calculate(text);
    };
      handlePasswChange(e) {
      let text = e.target.value;
      this.setState({passw: text});
        //this.calculate(text);
    }
    handleLogin() {
		
		let url='/api/auth/index.php' ;
    const  opts = { login: this.state.login_name,  password: this.state.passw        };
    //this.setState({new_category: ''});
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.post(url,opts, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFTOKEN': cookie.load("csrftoken")
      }

      })
      .then((response) => {
        this.setState({
            Loaded5: true,
            result5: response.data
        });

      })
      .catch((error) => {

      })
      
      //let login = this.refs.login;
      //this.setState({category: login});
      
       // console.log(this.refs.password);
       // console.log(this.refs.password.getValue());
     // this.refs.dialog.dismiss();
      
     this.setState({ login_form: false ,passw: '', login_name: ''}) ; 
     if (this.state.Loaded5)  {
		  if (this.state.result5.auth=='yes') {
		localStorage.setItem('Token', this.state.result5.token);
		 this.setState({is_auth: true});
	      }
	}
      // this.setState({ is_auth: true }) ; 
        //this.calculate(text);
    };
    handleClickOpen  ()      {
      this.setState({ login_form: true }) ;
	  };
	  
	  handleClose  ()      {
		  this.setState({ login_form: false }) ; 
	  }

    handleChange_spi_checked(e) {
	    let text2 = '0';
	    if (e.target.checked) {
		    text2='1';
	    };

      this.setState({spi_checked: e.target.checked,
			               spi_id: text2});
			               
	  this.renderTable;
    }


    toggleDrawerOpen () {
      this.setState({ sidebar: true }) ;
	  }


	 toggleDrawerClose () {
     this.setState({ sidebar: false }) ;
   };

   //vitrana/calc
    handleClickCount(e) {
    let url='/api/vitrina/calc' ;
    const  opts = {         };
    //this.setState({new_category: ''});
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.post(url,opts, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFTOKEN': cookie.load("csrftoken")
      }

      })
      .then((response) => {
        this.setState({
            Loaded5: true,
            result5: response.data
        });

      })
      .catch((error) => {

      })
      
       
    }
   
    

    handleClickNewCat(e) {
    
    }


    NewCatChange (e)       {
        let text = e.target.value;
        this.setState({new_category: text});
        //this.calculate(text);
    }

  CounterChange(e) {
        let text = e.target.value;
        this.setState({counter_id: text});


    }
  handleMenuClick (e) {
	  this.setState({ anchor_el: event.currentTarget, menu_open: true}) ; 
    
  };

   handleMenuClose (e) {
    this.setState({ menu_open: false,vitrina_id: e.target.value, anchor_el: null}) ;
    this.setState({ menu_open: false,vitrina_id: e.target.value, anchor_el: null}) ;
  };  
  renderTable() {

	  this.setState({loaded: false,
		            result: []});

    fetch(`api/vitrina?vitrina_id=1&counter_id=${this.state.counter_id}&spi_id=${this.state.spi_id}`)
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
   SQLChange(e) {
        let text = e.target.value;
        this.setState({SQLtext: text});
        this.setState({code: text});
        //this.calculate(text);
    }



  setdebug() {
        if  (this.state.debug) {
        this.setState({debug: false});
       } else {
              this.setState({debug: true});
        }


  };


 componentDidMount() {
    //?vitrina_id=1&counter_id=1&spi_id=0   
    fetch(`api/vitrina?vitrina_id=1&counter_id=${this.state.counter_id}&spi_id=${this.state.spi_id}`)
    //fetch("api/vitrina?")
    //fetch("api")
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
//const isAuthenticated = useAuth();
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

       let code_ed=
         <SyntaxHighlighter       language="sql"         >
         {this.state.code}

          </SyntaxHighlighter>

       let content = <div/>;
       let debug_info=<div/>;

        if (this.state.debug) {
         debug_info=JSON.stringify (this.state)
        }
     if (this.state.windows==='vitrina') {
           document.title = "Витрины| ФССП Витрина";
         if (this.state.loaded) {
             if (this.state.result) {
            //    if (this.state.loaded2) {
             //if (this.state.result2.rez) {
			//	if (this.state.loaded5) {
			//    if (this.state.result5.rez) {
//DrawView
content=
<div>
<p></p>
 
  <TableContainer>
    <Table border={1}  borderBottom={1} borderColor="text.primary">
     
      <TableHead   >
        <TableRow borderBottom={1} borderColor="text.primary">
          <StyledTableCell  align="center" >
            Наименование ОСП
          </StyledTableCell >
          <StyledTableCell align="center">
           ФИО судебного пристава
          </StyledTableCell >
          <StyledTableCell align="center">
           Количество ИП
          </StyledTableCell  >
            
          
            <StyledTableCell align="center">
           47 1 1
           </StyledTableCell >
           
			 <StyledTableCell align="center">	  
				  47 1 2
				</StyledTableCell >  
			 <StyledTableCell align="center">	  
				  47 1 8
				  </StyledTableCell >
			 <StyledTableCell align="center">	
				 47 1 9
			 </StyledTableCell >
				  <StyledTableCell align="center"> 
				  46 1 1
			 </StyledTableCell >
				   <StyledTableCell align="center">
				  
				  46 1 3
				  </StyledTableCell >
				
				   <StyledTableCell align="center">
				  46 1 4
				  </StyledTableCell >
				   <StyledTableCell align="center">
				  43 1 1
				  </StyledTableCell >
				   <StyledTableCell align="center">
				  103 1 1
				  </StyledTableCell >
				   <StyledTableCell align="center">
				  31 1 2
				  </StyledTableCell >
          
        </TableRow>
      </TableHead>
      
     {this.state.result.map(item2 => (
     <TableBody  key={item2.id} >
       <TableRow borderBottom={1} borderColor="text.primary" >
         <TableCell align="center">
            {item2.osp}
          </TableCell>
          <TableCell align="center">
            {item2.col1}
          </TableCell >
           <TableCell align="center">
            {item2.col2}
          </TableCell>
              <TableCell align="center">
            {item2.col3}
          </TableCell>
              <TableCell align="center">
            {item2.col4}
          </TableCell>
          
              <TableCell align="center">
            {item2.col5}
          </TableCell>
            
              <TableCell align="center">
            {item2.col6}
          </TableCell>
           
              <TableCell align="center">
            {item2.col7}
          </TableCell>
          
            
              <TableCell align="center">
            {item2.col8}
          </TableCell>
            
            
              <TableCell align="center">
            {item2.col9}
          </TableCell>
           
              <TableCell align="center">
            {item2.col10}
          </TableCell>
          
              <TableCell align="center">
            {item2.col11}
          </TableCell>
          
              <TableCell align="center">
            {item2.col12}
          </TableCell>
          
          </TableRow>
          </TableBody>
         ))}
    </Table >
</TableContainer>
</div>
// }
//}
//  }
//}

}
}
}
 if (this.state.windows==='scheduller') {
      content=
  <div>Sheduller</div>
}
       if (this.state.windows==='filters') {
          if (this.state.loaded3) {
             if (this.state.result3.rez) {
          document.title = "Добавление фильров | ФССП Витрина"


content=
  <div>
          <form  noValidate autoComplete="off">
          <FormControl >
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type='text'
            value={this.state.category_new}
            onChange={this.NewCatChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleClickNewCat}

                >
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>

            <TextField id="standard-basic" label="Standard" >
                       <IconButton    aria-label="delete">
                            <SettingsIcon />
                             </IconButton>
            </TextField>

                    <TextField
          id="filter_category"
          select
          label="Категория"
          value={this.state.category}
          onChange={this.handleChange}
          helperText="Выбор категории фильтра"
        >
          {this.state.result3.rez.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
          <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="20"
          defaultValue="Default Value"
          variant="outlined"
          fullWidth="true"
          onChange={this.SQLChange}
          />

          </form>

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
          </div>

	  }}


}


        return (
         <Container  maxWidth={false}>

      <Drawer anchor="left" open={this.state.sidebar} onClose={this.toggleDrawerClose} >


             <ListItem button onClick={this.setwindows2_filters } >
               <ListItemIcon>             <FilterListIcon /> </ListItemIcon>
                <ListItemText primary='Фильтры' />
             </ListItem>

            <ListItem button  onClick={ this.setwindows2_scheduller}>
            <ListItemIcon><FormatListBulletedIcon /></ListItemIcon>
            <ListItemText primary='Планировщик' />
          </ListItem>

      </Drawer>

            <AppBar position="static">
                <Toolbar >
                  <img src="/static/head_left.gif" alt="logo"  />



                         <Button   onClick= {this.handleMenuClick } color="inherit">ОИП</Button>
                         <Menu
  id="simple-menu"
  anchorEl={this.state.anchor_el}
  keepMounted
  open={this.state.menu_open}
  onClose={this.handleMenuClose}
>
  <MenuItem value='1' onClick={this.handleMenuClose}>Окончание</MenuItem>
  <MenuItem value='2' onClick={this.handleMenuClose}>Постановления</MenuItem>
  <MenuItem value='3' onClick={this.handleMenuClose}>Депозит</MenuItem>
</Menu>
                            <Button color="inherit">Депозит</Button>
                               <Button onClick={this.handleClickOpen} color="inherit">Login</Button>






                              <IconButton   onClick={this.setwindows2_vitrina} aria-label="delete">
                             <ViewListIcon />
                             </IconButton>
                             <Tooltip title="Включить DEBUG строку" aria-label="add">
                              <IconButton   onClick={this.setdebug} aria-label="delete">
                             <BugReportIcon />
                             </IconButton>
                             </Tooltip>
                              <Tooltip title="Нарисовать" aria-label="add">
                              <IconButton   onClick= {this.renderTable  } aria-label="delete">
                            <DescriptionIcon />
                             </IconButton>
 </Tooltip>
                          <IconButton  onClick={this.handleClickCount}  aria-label="delete">
                            <ScheduleIcon />
                             </IconButton>
                                <IconButton   disabled={!this.state.is_auth} onClick={this.toggleDrawerOpen}  aria-label="delete">
                            <SettingsIcon />
                             </IconButton>
                          








                 </Toolbar>
                      </AppBar>
    <div>
    
      
       <form  noValidate autoComplete="off">
    
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox checked={this.state.spi_checked} onChange={this.handleChange_spi_checked}   value="checkedA" />
        }
        label="Разбивка по СПИ"
       />
    </FormControl>
  </form>  
      
      
      <Dialog  open={this.state.login_form} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Войти</DialogTitle>
        <DialogContent>
    
          <TextField
            autoFocus
            margin="dense"
            id="login"
            label="login"
            type="text"
            fullWidth
             onChange={this.handleLoginChange}
          />
           <TextField
           
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
             onChange={this.handlePasswChange}/>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div> 
                      {debug_info}


          {content}


   </Container>

);


    }
}

export default App;
