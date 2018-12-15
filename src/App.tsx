import React, { Component } from 'react';
import './App.css';
import { Alert, Card, CardBody, CardFooter, CardHeader } from './components';

class App extends Component {
  public render() {
    return (
      <>
        <Alert type="info">Info Alert</Alert>
        <Alert type="success">Success Alert</Alert>
        <Alert type="warning">Warning Alert</Alert>
        <Alert type="error">Error Alert</Alert>
        <Card>
          <CardHeader>Card Header</CardHeader>
          <CardBody>Card Body</CardBody>
          <CardFooter>Card Footer</CardFooter>
        </Card>
      </>
    );
  }
}

export default App;
