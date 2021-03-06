import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  // set up state hooks to use later
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  // use for default value, and then for entered colors
  const [list, setList] = useState(new Values('#aaffaa').all(10));

  // handleSubmit function
  const handleSubmit = (e) => {
    // prevent default page refresh
    e.preventDefault();
    // validation with values.js
    try {
      let colors = new Values(color).all(10);
      // set list of colors to state
      setList(colors);
    } catch (error) {
      setError(true);
      // display error on console
      console.log(console.error);
    }
  };

  return (
    <>
      <section className='container'>
        <h1>Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='Hex color i.e. #aaffaa'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            Button
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
