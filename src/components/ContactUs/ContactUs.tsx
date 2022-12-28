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
      height: '90%',
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
  text_box: {
      height: '125px',
      width: '200px',
  },
  form_items: {
      height: '25px',
      width: '200px',
  }
  
});

export const ContactUs = ( props: Props ) => {

  const classes = useStyles();


  return (
    <>
    <Navbar />
    <div className={`${classes.background}`}>
      <div className={classes.main_text}>
        <h1>{props.title}</h1>
        <div>
          <div>
            <label htmlFor="name">Enter your Name</label><br />
            <input className={classes.form_items} type="text" name='name' placeholder='Name' />
          </div>
          <div>
            <label htmlFor="email">Enter your Email</label><br />
            <input className={classes.form_items} type="email" name='email' placeholder='Name' />
          </div>
          <div>
            <label htmlFor="comment">Write your comment here</label><br />
            <input className={classes.text_box} type="textarea" name='comment' placeholder='Type here...' maxLength={400} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
