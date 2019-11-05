import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Welcome} />
        </Switch>
      </div>
    )
  }
}

export default App;
