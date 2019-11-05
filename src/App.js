import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Resume from './components/Resume';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/resume' render={() => <Resume/>} />
        </Switch>
      </div>
    )
  }
}

export default App;
