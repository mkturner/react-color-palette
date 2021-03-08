import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

// capture props from parent
const SingleColor = ({ rgb, weight, index }) => {
  // state flag for clipboard copy
  const [alert, setAlert] = useState(false);

  // join array values into string,  separator: ,
  const bgColor = rgb.join(',');
  console.log(bgColor);

  return (
    <article className={`color`} style={{ backgroundColor: `rgb(${bgColor})` }}>
      {''}
    </article>
  );
};

export default SingleColor;
