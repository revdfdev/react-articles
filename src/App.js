import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null,
    todos: []
  };

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  };

  getJsonPlaceHolderData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(responseData => { 
        this.setState({
          todos: responseData
        })
      }).catch(err => {
        console.log(err);
      })
  };

  componentDidMount() {
    document.title = `You have clicked ${this.state.count} times`;
    window.addEventListener("mousemove", this.handleMouseMove);
    this.getJsonPlaceHolderData();
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    });
  };

  comp;

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      document.title = `You have clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div className="container">
        <button className="my-button" onClick={this.handleClick}>
          I was clicked {this.state.count} time
        </button>
        <h2>Toggle Light</h2>
        <div className={this.state.isOn ? 'color-state-changed' : 'color-state'}
          onClick={this.toggleLight}
        />
        <h2>Mouse position</h2>
        <p>X position: {this.state.x}</p>
        <p>Y position: {this.state.y}</p>
        <div>
          {this.state.todos.map(todo => {
            return <h3 className="list-items">{todo.title}</h3>
          })}
        </div>
      </div>
    );
  }
}

export default App;