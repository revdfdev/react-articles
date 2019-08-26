import React from "react";
import Form from './Form';

const Form = (props) => {
  const { email, password, styles, submitFunction, onChangeFunction } = props;
  return (
    <form style={styles.container} onSubmit={submitFunction}>
      <img src={logo} alt="logo" />
      <TextField textFieldName="email" textFieldType="email" style={{

      }} value={email} changeFunction={onChangeFunction} />
      <TextField textFieldName="password" textFieldType="password" style={{

      }} value={password} changeFunction={onChangeFunction} />
      <TextField textFieldType="submit" value="submit" />
    </form>
  );
}

export default Form;
