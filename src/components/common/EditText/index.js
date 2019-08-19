import React from "react";


const EditText = ({ name, value, type, styles, onValueChange }) => (
  <input type={type} name={name} value={value} onChange={onValueChange} />
);



export default EditText;