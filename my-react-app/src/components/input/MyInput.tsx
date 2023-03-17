import React from 'react';
import classes from './MyInput.module.css';

export function MyInput(props) {
  return (
    <div>
      <input className={classes.myInput} {...props} />
    </div>
  );
}
