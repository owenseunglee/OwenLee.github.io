import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
        <Link className= "nav-global" to="/">Home</Link>
        <Link className= "nav-global" to="../topics">Topics</Link>
        <Link className= "nav-global" to="../staff">Staff</Link>
        <Link className= "nav-global" to="../contact">Contact</Link>
        <Link className= "nav-global" to="../reviewLog">Review</Link>
    </nav>
  );
}

export default Navigation;
