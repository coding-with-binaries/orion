import React, { Component } from 'react';
import './App.css';
import { Alert } from './components/alert';

class App extends Component {
  public render() {
    return (
      <>
        <Alert type="info">Info Alert</Alert>
        <Alert type="success">Success Alert</Alert>
        <Alert type="warning">Warning Alert</Alert>
        <Alert type="error">Error Alert</Alert>
      </>
    );
  }
}

export default App;
