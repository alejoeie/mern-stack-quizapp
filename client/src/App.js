import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Auth from './components/Auth/Auth'
class App extends React.Component {
  render() {
    return(
      <div className="app">

    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Auth/>}>

          </Route>
          </Routes>
      </Fragment>
      </Router>
        
      </div>
    )
  }
}

export default App;
