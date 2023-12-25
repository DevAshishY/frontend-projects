import React from 'react';
import "./Header.css";

const header = () => {
  return (
    <header>
        <div className='justify_between'>
        <a href="index">My App</a>
        <ul className='flex'>
            <li>Expenance App</li>
        </ul>
        </div>
    </header>
  )
}

export default header