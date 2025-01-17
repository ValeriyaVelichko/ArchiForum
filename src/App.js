import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (

    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <div className="app-wrapper-content">
        <Header />
          <Route path="/dialogs" render={() => <Dialogs store={props.store}/>} />
          <Route path="/profile" render={() => <Profile state={props.state.profilePage}
            dispatch={props.dispatch}
          />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
