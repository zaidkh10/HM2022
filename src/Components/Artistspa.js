import React from 'react';

const LogPage = ({ setAuth }) => {
  const logIn = () => {
    setAuth(true);
  };
  return (
    <div className='logDiv'>
      <h1 className='text'>Log in</h1>
      <form>
        <label className='text'> Name:</label>
        <input type='text' placeholder='username' id='username' />
        <label className='text'>Password:</label>
        <input type='password' placeholder='password' id='password' />
      </form>
      <button onClick={logIn} className='btn'>
        <span>log in</span>
      </button>
    </div>
  );
};

export default LogPage;