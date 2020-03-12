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
import MenuItem from '@material-ui/core/MenuItem';




class App extends React.Component {
    constructor() {
        super();

       // this.loadModel();

        this.state = {
            
            lastname:'',
            result: [],
            result2: [],
            result3: [],
            result4: [],
            result5: [],
            spi_id:'0',
            spi_checked: false,
            sidebar: false,
            SQLtext:'',
            code: '',
            category: 1,
            counter_id:1,
            new_category: '',
            region: '',
            but_push: false,
            loaded: false,
            loaded2: false,
            loaded3: false,
            loaded5: false,
            tooltip: false,
            windows: 'vitrina',
            debug: false


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
        //renderTable
        
        // CounterChange
        // handleClickCount(e) {
        //this.DrawFilter=this.DrawFilter.bind(this);
        
        
          
          
         
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
   handleChange_spi_checked(e) {
	   let text = e.target.checked;
	   
	   let text2 = '0';
	   
	   if (text) {
		   text2=1
	   };
	   
       this.setState({spi_checked: text,
			          spi_id: text2});
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
        const  opts = {
           //name: this.state.new_category,
         //  result: 'rez' 
         //  csrfmiddlewaretoken: {cookie.load("csrftoken")}
        };  
        //this.setState({new_category: ''});
       axios.defaults.xsrfCookieName = "csrftoken";
       axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

       //your_client.setHeaders({"X-CSRFTOKEN": cookie.load("csrftoken")});
       
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
       
  //     axios.post(url,opts)
//      .then(response => { 
//      console.log('response')
//       console.log(response);
//        
 //      this.setState({
 //           Loaded4: true,
 //           result4: response.data
 //       });
 //     })
//      .catch(error => {
//      console.log(error);
//      this.setState({Loaded4: false })
//      })
        
        //this.calculate(text);
    }    
   handleClickNewCat(e) {
       
       
        let url='/api/filter/category_add' ;
        const  opts = {
           name: this.state.new_category,
           result: 'rez'
          // csrfmiddlewaretoken: {cookie.load("csrftoken")}
        };  
        this.setState({new_category: ''});
       axios.defaults.xsrfCookieName = "csrftoken";
       axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

       //your_client.setHeaders({"X-CSRFTOKEN": cookie.load("csrftoken")});
       
       axios.post(url,opts, {
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFTOKEN': cookie.load("csrftoken") 
    }
    
})      
.then((response) => {
       this.setState({
            Loaded4: true,
            result4: response.data
        });
  
})
.catch((error) => {
    
})
       
  //     axios.post(url,opts)
//      .then(response => { 
//      console.log('response')
//       console.log(response);
//        
 //      this.setState({
 //           Loaded4: true,
 //           result4: response.data
 //       });
 //     })
//      .catch(error => {
//      console.log(error);
//      this.setState({Loaded4: false })
//      })
        
        //this.calculate(text);
    }
    NewCatChange (e)       {
        let text = e.target.value;
        this.setState({new_category: text});
        //this.calculate(text);
    }
  
  CounterChange(e) {
        let text = e.target.value;
        this.setState({counter_id: text});
       //  this.setState({loaded: false,
		//	            result: []});
	        
	       //this.calculate(text);
    }  
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
        
        //this.calculate(text);
    }  
   SQLChange(e) {
        let text = e.target.value;
        this.setState({SQLtext: text});
        this.setState({code: text});
        //this.calculate(text);
    }
  //    const handleChange = event => {
  //  setCurrency(event.target.value);
  //};
  setdebug() {
        if  (this.state.debug) {
        this.setState({debug: false});
       } else {
              this.setState({debug: true});
        }
       
    
  }; 


 componentDidMount() {
fetch("api/filter/category")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(result3 => {
        this.setState(() => {
          return {
            result3,
            loaded3: true
          };
        });
      });
    fetch("api/vitrina?vitrina_id=1&counter_id=1&spi_id=1")
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
      
       fetch("api/vitrina/counter?vitrina_id=1")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(result5 => {
        this.setState(() => {
          return {
            result5,
            loaded5: true
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
      .then(result2 => {
        this.setState(() => {
          return {
            result2,
            loaded2: true
          };
        });
      });

}
    render() {
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
             if (this.state.result.rez) {
                if (this.state.loaded2) {
             if (this.state.result2.rez) {
				if (this.state.loaded5) {
			    if (this.state.result5.rez) {
//DrawView
content=
<div>
<p></p>
    <form  noValidate autoComplete="off">
       <TextField
          id="filter_category"
          select
          label="Категория"
          value={this.state.counter_id}
          onChange={this.CounterChange}
          helperText="Выбор категории фильтра"
        >  
          {this.state.result5.rez.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField> 
        <FormControl>
        <FormControlLabel
        control={
          <Checkbox checked={this.state.spi_checked} onChange={this.handleChange_spi_checked} value="checkedA" />
        }
        label="Разбивка по СПИ"
      /> 
         </FormControl>
        </form  >
 <TableContainer>
      <Table border={1}  borderBottom={1} borderColor="text.primary">
          {this.state.result2.rez.map(item => ( 
        <TableHead   key={item.id}>
          <TableRow borderBottom={1} borderColor="text.primary">
           <StyledTableCell  align="center" >
            {item.id}
          </StyledTableCell >
          <StyledTableCell align="center">
            {item.col1}
          </StyledTableCell >
           <StyledTableCell align="center">
            {item.col2}
          </StyledTableCell  >
          
          </TableRow>
   
          </TableHead>
          ))}
          
               {this.state.result.rez.map(item2 => ( 
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
          
          </TableRow>
          </TableBody>
         ))}
        </Table >
   </TableContainer>
   </div>
 }
}   
  }
} 
 
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
 //DrawFilter
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



         //const navbar = {backgroundColor: '#BBBBBB'};
       

        return (
         <Container  maxWidth="false">
           
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

                    
                       
                         <Button color="inherit">ОИП</Button>
                            <Button color="inherit">Депозит</Button>
                               <Button color="inherit">Login</Button>
                         


                          

                             
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
                                <IconButton  onClick={this.toggleDrawerOpen}  aria-label="delete">
                            <SettingsIcon />
                             </IconButton>
                             //




                             
                             
                           
                   
                 </Toolbar>
                      </AppBar>
                      {debug_info}
                     
                   
          {content}
     
 
   </Container>
      
);

        
    }
}

export default App;
