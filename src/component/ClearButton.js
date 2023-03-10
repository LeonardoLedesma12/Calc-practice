import React from "react";
import '../stylesheets/ClearButton.css'

const ClearButton = (props) => (
  <div className='clearBtn'
    onClick={props.manageClear}>
    Clear
  </div>
);

export default ClearButton;