import React from 'react'

const TextField = (props) => {
  const { textFieldName, textFieldType, value, style, changeFunction } = props;
  return (
    <input name={textFieldName} value={value} type={textFieldType} style={style} onChange={changeFunction} />
  );
}
export default TextField;
