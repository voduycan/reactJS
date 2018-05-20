import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Control from './components/Control';
import List from './components/List';
class App extends Component {
  render() {
    return(
        <div className="row">
            <Title />
            <Control />
            <Form />
            <List />
        </div>
    );
  }
}

export default App;
