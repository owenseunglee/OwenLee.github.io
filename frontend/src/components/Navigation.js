import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">Home</Link>
        <Link to="../topics">Topics</Link>
        <Link to="../staff">Staff</Link>
        <Link to="../reviewLog">Review</Link>
    </nav>
  );
}

export default Navigation;
