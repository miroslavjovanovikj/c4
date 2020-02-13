import React from 'react';
import Todos from "./Todos";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        email: ""
      }
    }

  }

  FillName = () => {
    this.setState({
      user: {
        ...this.state.user,
        name: "Mario"
      }
    });
  }

  render() {

    console.log(this.state);

    return (
      <div id="app">
        {/* <button onClick={this.FillName}>Fill Name</button> */}
        <Todos />
      </div>
    )
  }
}

export default App;