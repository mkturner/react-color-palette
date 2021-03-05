import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  // set up state hooks to use later
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  // handleSubmit function
  const handleSubmit = (e) => {
    // prevent default page refresh
    e.preventDefault();
    // check contents
    console.log(e);
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
            placeholder='#0000ff'
          />
          <button className='btn' type='submit'>
            Button
          </button>
        </form>
      </section>
      <section className='colors'>
        <h3>List goes here.</h3>
      </section>
    </>
  );
}

export default App;
