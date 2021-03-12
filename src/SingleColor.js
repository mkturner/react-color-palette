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

  // set 3s timer to clear 'copied to clipboard' notification
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bgColor})` }}
      onClick={() => {
        // when clicking a color, copy hex value to clipboard and notify user
        navigator.clipboard.writeText(hexValue);
        setAlert(true);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>

      {
        // if alert is true, will return <p>
        alert && <p className='alert'>Copied to Clipboard</p>
      }
    </article>
  );
};

export default SingleColor;
