import React, { Component }  from "react";


//Use when not exported as a const
// export default App;


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
};


const Form = (props) => {
  const { email, password, styles, submitFunction, onChangeFunction } = props;
  return (
    <form style={styles.container} onSubmit={submitFunction}>
      <TextField textFieldName="email" textFieldType="email" style={{

      }} value={email} changeFunction={onChangeFunction} />
      <TextField textFieldName="password" textFieldType="password" style={{

      }} value={password} changeFunction={onChangeFunction} />
      <TextField textFieldType="submit" value="submit" />
    </form>
  );
}

const TextField = (props) => {
  const { textFieldName, textFieldType, value, style, changeFunction } = props;
  return (
    <input name={textFieldName} value={value} type={textFieldType} style={style} onChange={changeFunction} />
  );
}

export default class App extends Component {


  state = {
    email: '',
    password: ''
  };

  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {

  }

  handleInputChange = e => {
    const { name, value } = e.target;
    console.log("Name ", name);
    console.log("Value ", value);
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Values", JSON.stringify(this.state, null, 3));
  }

  render() {
    const { id, sentence } = this.props;
    const { email, password } = this.state;
    return (
      <Form email={this.state.email} password={this.state.password} styles={styles} submitFunction={this.handleSubmit} onChangeFunction={this.handleInputChange} />
    );
  }
}

