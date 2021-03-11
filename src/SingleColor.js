import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

// capture props from parent
const SingleColor = ({ rgb, weight, index, hex }) => {
  // state flag for clipboard copy
  const [alert, setAlert] = useState(false);

  // join array values into string,  separator: ,
  const bgColor = rgb.join(',');
  console.log(bgColor);

  // compute hex value
  // const hexCode = rgbToHex(...rgb);
  const hexValue = `#${hex}`;

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bgColor})` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
    </article>
  );
};

export default SingleColor;
