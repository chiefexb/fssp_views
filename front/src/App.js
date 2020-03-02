import React from 'react';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
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
            result: [],
            region: '',
            but_push: false,
            isLoaded: false,
            tooltip: false


        };



       }


    render() {

         //const navbar = {backgroundColor: '#BBBBBB'};
        return (

         <Container  maxWidth="false">
            <AppBar position="static">
                <Toolbar >
                  <img src="logo.png" alt="logo"  />

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
  <img style={{width:'100%'}} src="9b88602b-e46c-44d0-8d63-617af069e8eb.jpg" alt="side"  />
     <FormControl component="fieldset" >
         <FormLabel component="legend">Assign responsibility</FormLabel>
         <FormGroup row>
           <FormControlLabel
             control={<Checkbox  value="gilad" />}
             label="Сэндвичи"
              labelPlacement="bottom"
           />
            <FormControlLabel
                        control={<Checkbox  value="gilad" />}
                        label="Сэндвичи"
                         labelPlacement="bottom"

                      />

             <FormControlLabel
             control={<Checkbox  value="gilad" />}
             label="Сэндвичи"
             labelPlacement="bottom"
             />

            <FormControlLabel
            control={<Checkbox  value="gilad" />}
            label="Сэндвичи"
            labelPlacement="bottom"
            />
            <FormControlLabel
            control={<Checkbox  value="gilad" />}
            label="Сэндвичи"
            labelPlacement="bottom"
            />

             <FormControlLabel
             control={<Checkbox  value="gilad" />}
             label="Сэндвичи"
             labelPlacement="bottom"
             />

            <FormControlLabel
            control={<Checkbox  value="gilad" />}
            label="Сэндвичи"
            labelPlacement="bottom"
            />
            <FormControlLabel
            control={<Checkbox  value="gilad" />}
            label="Сэндвичи"
            labelPlacement="bottom"
            />
           </FormGroup>
           </FormControl>
  <div flex>
<Card style={{maxWidth: 345}} >

      <CardHeader

        title="САЛАТ ЦЕЗАРЬ С КУРИЦЕЙ"
        subheader="218.00 руб."
      />
<CardMedia style={{height: 0,
                       paddingTop: '56.25%', }}

        image="pizza.jpg"
        title="Paella dish"
      />
       <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
               Куриное филе бедра,салат Романо.сыр пармезан.томаты черри,яйцо перепелиное,крутоны из белого батона,
               соус цезарь на основе пастеризованного желтка,растительного масла.анчоусов,чеснока,лимонного сока и каперсов
              </Typography>
            </CardContent>

</Card>

<Card style={{maxWidth: 345}} >

      <CardHeader

        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
<CardMedia style={{height: 0,
                       paddingTop: '56.25%', }}

        image="pizza.jpg"
        title="Paella dish"
      />
       <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>

</Card>
</div>


                                                 </Container>



        );
    }
}

export default App;
