import React from 'react';
import Chart from "react-apexcharts";
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
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
//import { Chart } from 'react-charts';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import {startOfYear, endOfYear ,endOfMonth,  subYears, subMonths, startOfWeek ,startOfMonth ,getMonth,getDay,format, formatDistance, subDays,addDays } from 'date-fns';
//import useChartConfig from 'hooks/useChartConfig';



import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';












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
import Fade from '@material-ui/core/Fade';









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
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


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
import Radio from '@material-ui/core/Radio';
//import {  useAuth } from "./context/auth";

// End Import  ==========================================================================


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            lastname:'',
            result: [],
            result2: [],
            result3: [],
            result4: [],
            result5: [],
            diagram: [],
            range: 1,
            
            selectedDate1: format(new Date(), 'yyyy-MM-dd' ),
            selectedDate2:  format(new Date() ,'yyyy-MM-dd'),
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
    this.setwindows2_diagram = this.setwindows2_diagram.bind(this);
  //  this.setDiagram = this.setDiagram.bind(this);
    
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
    this.handleRangeChange=this.handleRangeChange.bind(this); 
      this.handleDate1Change=this.handleDate1Change.bind(this); 
        this.handleDate2Change=this.handleDate2Change.bind(this); 
     
    
    
    
    
    
     
   
    
    

    }


    setwindows2_filters() {
      this.setState({windows: 'filters'});
      this.toggleDrawerClose()
         //this.render()
    };
/* setDiagram () {
	 if (this.state.loaded) {
	 let arr=[];
	 let arr2=[];
	 let item=[];
	 let a=0;
	 for (a = 0; a < 2; a++)      {
      item =this.state.result[a] 
	  arr2={label: item.osp,data: [['47-1-1', item.col3], ['47-1-12', item.col4], ['47-1-3', item.col5], ['47-1-4', item.col6]] } ;
	  arr.push(arr2);
     };
      this.setState({diagram: arr})  
      };
 };
 */
 /* label: 'ЧГО2',
        data: [['47-1-1', 100], ['47-1-12', 110], ['47-1-3', 120], ['47-1-4', 120], ['47-1-5', 220]] */

    setwindows2_scheduller() {
        this.setState({windows: 'scheduller'});
    };


    setwindows2_vitrina() {
      this.setState({windows: 'vitrina'});
    };
   
   setwindows2_diagram() {
      this.setState({windows: 'diagram'});
    }; 
     handleDate1Change (e) {
		//  this.setState({selectedDate1: new Date(e.target.value),
		  this.setState({selectedDate1: e.target.value }); 
		    this.setState({range: 0 }); 
	 };
	  handleDate2Change (e) {
		//  this.setState({selectedDate2: new Date (e.target.value )}); 
		  this.setState({selectedDate2:e.target.value });
		   this.setState({range: 0 }); 
	 };
	 
   handleRangeChange (e) {
	  
	  //let date2= Date.now();
	 // let dist=subDays(new Date(), 7);
	  let date1=format(new Date() , "yyyy-MM-dd" )  ;
	   let dist=format(new Date() , "yyyy-MM-dd" )  ;
	 let wd= getDay(new Date(date1) );
	 let mm=getMonth(new Date(date1)  );
	  
	  this.setState({range: e.target.value}); 
		if (e.target.value  ==3 ) {
		    dist=format(subDays(new Date(), 7), "yyyy-MM-dd" )  ;
		  
		} 
		else if  (e.target.value  ==2 ) {
		     dist=format(subDays(new Date(), 1), "yyyy-MM-dd" )  ;
		} 
		else if  (e.target.value  ==4 ) {
		     dist=format( addDays (  startOfWeek(new Date()),1  ), "yyyy-MM-dd" )  ;  
			 	    
		}
		else if  (e.target.value  ==5 ) {
		     dist=format( subDays (  startOfWeek(new Date()),6  ), "yyyy-MM-dd" )  ;  
			 date1=	format( addDays ( subDays (  startOfWeek(new Date()),6  ) ,6  ), "yyyy-MM-dd" )  ;   
		}
		else if  (e.target.value  ==6 ) {
		     dist=format(subDays(new Date(), 30), "yyyy-MM-dd" )  ;  
			 	    
		}
		else if  (e.target.value  ==7 ) {
		     dist= format (startOfMonth ( new Date()) , "yyyy-MM-dd" )  ;  
			 	    
		}
		else if  (e.target.value  ==8 ) {
		     dist= format ( subMonths(  startOfMonth ( new Date()) ,1) , "yyyy-MM-dd" )  ;
		     date1= format (endOfMonth (subMonths(  startOfMonth ( new Date()) ,1))  , "yyyy-MM-dd" )  ;   
			 	    
		}
		else if  (e.target.value  ==9 ) {
		     dist= format (  startOfYear ( new Date() ) , "yyyy-MM-dd" )  ;
		    // date1= format (endOfMonth (subMonths(  startOfMonth ( new Date()) ,1))  , "yyyy-MM-dd" )  ;   
			 	    
		}
		else if  (e.target.value  ==10 ) {
		     dist= format ( subYears( startOfYear ( new Date() ),1) , "yyyy-MM-dd" )  ;
		     date1= format (endOfYear(subYears( startOfYear ( new Date() ),1) )  , "yyyy-MM-dd" )  ;   
			 	    
		}
		else if  (e.target.value  ==11 ) {
		     dist= "2018-01-01"  ;
		     date1=  "2018-12-31"   ;   
			 	    
		}
		else if  (e.target.value  ==12 ) {
		     dist= "2017-01-01"  ;
		     date1=  "2017-12-31"   ;   
			 	    
		}
	   
		
		this.setState({selectedDate1: dist,
			              selectedDate2: date1,
			              result5: mm +1
			   });
	 
	 // window.location.reload(false);
     
    //getDay(date)
   }
    
    


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
			               spi_id: text2,
			               loaded: false.
			               result:[]});
			               
	  //this.renderTable;
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

// handleDateChange1 (e) {
   // setSelectedDate(date);
//   let date=e.target.value;
//     this.setState({selectedDate1: date});
//  };
//  handleDateChange2 (e) {
   // setSelectedDate(date);
//   let date=e.target.value;
//     this.setState({selectedDate2: date});
//  };

  CounterChange(e) {
        let text = e.target.value;
        this.setState({counter_id: text});


    }
  handleMenuClick (e) {
	  this.setState({ anchor_el: e.currentTarget, menu_open: true}) ; 
	  //popupState.close;
    
  };

   handleMenuClose (e) {
    this.setState({ menu_open: false,vitrina_id: e.target.value , anchor_el: null });
   // this.setState({ menu_open: false,vitrina_id: e.target.value, anchor_el: null}) ;
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
if (  !(this.state.loaded) ||  !(this.state.result) ) {
	this.renderTable;
};
const range_date= [
  {
    name: 'Свой период',
    id: 0,
  },
  {
    name: 'Сегодня',
    id: 1,
  },
  {
    name: 'Вчера',
     id: 2,
  },
  
  {
    name: 'Последние 7 дней',
    id: 3,
  },
  {
    name: 'На этой неделе',
    id: 4,
  },
  {
    name: 'На прошлой неделе',
    id: 5,
  },
  {
    name: 'Последние 30 дней',
    id: 6,
  },
  {
    name: 'В этом месяце',
    id: 7,
  },
  {
    name: 'В прошлом месяце',
    id: 8,
  },
  {
    name: 'В этом году',
    id: 9,
  },
  {
    name: 'В прошлом году',
    id: 10,
  },
  {
    name: 'В 2018 году',
    id: 11,
  }, 
  {
    name: 'В 2017 году',
    id: 12,
  }
 
];

 
const diagram = {
     
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['47 1 1', '47 1 2','47 1 3']
        }
      };
 const      series =[];
 let a=0;
 let item=[];
 if (this.state.result) {
	   for (a = 0; a < (this.state.result).length ; a++) {
    {
        item=this.state.result[a];
        series.push(
        {
          name: item.osp,
          data: [item.col3,
                 item.col4,
                 item.col5,]
        } );
    };
};
    
}  
 
		const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#03a06c',
    },
  },
});
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
    if (this.state.windows==='diagram') {
content=
 <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={diagram}
              series={series}
              type="bar"
              width="1000"
            />
          </div>
        </div>
      </div>
    
      
    
	};
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
      
      
<ThemeProvider theme={outerTheme}>
            <AppBar  color="primary"  position="static">
              
                <Toolbar >
                  <img src="/static/head_left.gif" alt="logo"  />



                         <Button color="inherit" id="menu-button"   aria-controls="fade-menu" aria-haspopup="true"  onClick= {this.handleMenuClick }   >ОИП</Button>
                         <Menu  color="inherit"
  id="simple-menu"
  
  anchorEl={this.state.anchor_el}
  anchorPosition={ {top: -40, left: 120} }
  keepMounted
  open={this.state.menu_open}
  onClose={this.handleMenuClose}
  TransitionComponent={Fade}
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
                            <RefreshIcon />
                             </IconButton>
 </Tooltip>
                          <IconButton  onClick={this.setwindows2_diagram}  aria-label="delete">
                            <InsertChartIcon />
                             </IconButton>
                      
                                <IconButton   disabled={!this.state.is_auth} onClick={this.toggleDrawerOpen}  aria-label="delete">
                            <SettingsIcon />
                             </IconButton>
                          








                 </Toolbar>
                
                      </AppBar>
                         </ThemeProvider >
 
    
   
       <form  noValidate autoComplete="off">
    
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox checked={this.state.spi_checked} onChange={this.handleChange_spi_checked}   value="checkedA" />
        }
        label="Разбивка по СПИ"
          labelPlacement="top"
       />
    </FormControl>
     <FormControl>
      <FormControlLabel
      control={
      <TextField
        onChange={this.handleDate1Change}
        id="date1"
        //label="Birthday"
        type="date"
        
        value= {this.state.selectedDate1}
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
       }
        label="Дата начала периода"
         labelPlacement="top"
       />
    </FormControl>
    
         <FormControl>
      <FormControlLabel
      control={
      <TextField
        onChange={this.handleDate2Change}
        id="date2"
        //label="Birthday"
        type="date"
       
         value={this.state.selectedDate2}
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
       }
        label="Дата конца периода"
         labelPlacement="top"
       />
    </FormControl>
      <FormControl>
      <FormControlLabel
      control={
     <TextField
          id="standard-select-currency"
          select
          //label="Select"
          value={this.state.range}
          onChange={this.handleRangeChange}
          //helperText="Please select your currency"
          >
            {range_date.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
          
        
        </TextField>
    
      
       }
        label="Диапазон"
         labelPlacement="top"
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
   
                      {debug_info}


          {content}
         

   </Container>

);


    }
}

export default App;
