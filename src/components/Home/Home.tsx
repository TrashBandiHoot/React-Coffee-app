import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom';
import Coffee from '../../assets/images/coffee-background1.jpg';

interface Props {
    title: string;
}

const useStyles = makeStyles({
  background: {
      backgroundImage: `url(${Coffee})`,
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      position: 'absolute',
      zIndex: -1,
  },
  main_text: {
      textAlign: 'center',
      position: 'relative',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
  },
  button_text: {
      color: 'white',
      textDecoration: 'none',
  },
  
});

export const Home = ( props: Props ) => {

  const classes = useStyles();

  return (
    <>
    <Navbar />
    <div className={classes.background}>
      <div className={classes.main_text}>
        <div>
        <h1>{props.title}</h1>
        <Button>
          <Link to='/phonebook' className={classes.button_text}>Take me to my coffee list</Link>
        </Button>
        </div>
      </div>
    </div>
    </>
  )
}
