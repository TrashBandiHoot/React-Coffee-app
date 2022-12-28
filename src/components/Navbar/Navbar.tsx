import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Barista from '../../assets/images/barista.svg';
import { AuthCheck } from 'reactfire';


const useStyles = makeStyles({
    logo: {
        content: `url(${Barista})`,
        maxWidth: '10%',
        height: 'auto',
    },
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: '#8A5845',
        zIndex: 1,
        borderBottom: '1px solid grey',
    },
    navbarItem: {
        color: 'white',
        textDecoration: 'none',
    },
    p5: {
        padding: '5px',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '60%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
})



export const Navbar = () => {

    const classes = useStyles();

    return (
        <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceBetween}`}>
            <div className={`${classes.navlogo}`}>
                <Link to='/' className={`${classes.logo} ${classes.p5}`} />
            </div>
            <div className={`${classes.width60} ${classes.alignCenter}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides}`}>
                    <Suspense fallback={'loading...'}>
                        <AuthCheck fallback={
                            <li>
                            <Button>
                                <Link to='/SignIn' className={`${classes.navbarItem} ${classes.psides}`}>Sign In</Link>
                            </Button>
                            </li>
                        }>
                            <li>
                                <Button>
                                    <Link to='/Phonebook' className={`${classes.navbarItem} ${classes.psides}`}>My Coffee List</Link>
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Link to='/ContactUs' className={`${classes.navbarItem} ${classes.psides}`}>Contact us</Link>
                                </Button>
                            </li>
                            <li>
                            <Button>
                                <Link to='/SignIn' className={`${classes.navbarItem} ${classes.psides}`}>Sign out</Link>
                            </Button>
                            </li>
                            <li>
                                <Button>
                                    <Link to='https://github.com/TrashBandiHoot' className={`${classes.navbarItem} ${classes.psides}`}>Visit my GitHub!</Link>
                                </Button>
                            </li>
                            
                        </AuthCheck>
                    </Suspense>
                </ul>
            </div>
        </div>
  )
}
