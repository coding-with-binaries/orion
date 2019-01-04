import React, { Component } from 'react';
import './App.css';
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader
} from './components';

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
        <Button size="sm" type="info">
          Info
        </Button>
        <Button size="sm" type="success">
          Success
        </Button>
        <Button size="sm" type="warning">
          Warning
        </Button>
        <Button size="sm" type="error">
          Error
        </Button>
        <br />
        <Button size="md" type="info" family="link">
          Info
        </Button>
        <Button size="md" type="success" family="link">
          Success
        </Button>
        <Button size="md" type="warning" family="link" disabled={true}>
          Warning
        </Button>
        <Button size="md" type="error" family="link">
          Error
        </Button>
        <br />
        <Button size="lg" type="info" family="outline" disabled={true}>
          Info
        </Button>
        <Button size="lg" type="success" family="outline">
          Success
        </Button>
        <Button size="lg" type="warning" family="outline">
          Warning
        </Button>
        <Button size="lg" type="error" family="outline">
          Error
        </Button>
        <br />
        <Button size="sm" disabled={true}>
          Small
        </Button>
        <Button size="md" onClick={this.onClick}>
          Medium
        </Button>
        <Button size="lg">Large</Button>
      </>
    );
  }

  private onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('I was clicked', event); //tslint:disable-line
  }
}

export default App;
