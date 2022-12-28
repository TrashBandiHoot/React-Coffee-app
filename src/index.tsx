import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { ContactUs, Home, Phonebook, SignIn } from './components';
import './style.css';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store';

let myTitle = "Coffee App"
let contact = "Contact Us"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>
    <Router>
      <Switch>
      <Route exact path='/'>
        <Home title={myTitle} /> 
      </Route>
      <Route path='/phonebook'>
        <Phonebook></Phonebook>
      </Route>
      <Route path='/signin'>
        <SignIn></SignIn>
      </Route>
      <Route path='/contactus'>
        <ContactUs title={contact} />
      </Route>
      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


