import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListPage from './components/ListPage';
import DetailPage from './components/DetailPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ListPage} />
          <Route exact path='/info/:id' component={DetailPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
