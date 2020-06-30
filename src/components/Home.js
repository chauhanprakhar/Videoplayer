import React from 'react';
import {Link} from 'react-router-dom'

function Home(props) {
    console.log(props)
  return (
    <div>
        <Link to="/reactjs">
        <h1>BBC</h1>
        </Link>
        <Link to="/nodejs">
        <h1>Bukake</h1>
        </Link>
    </div>
      
  );
}

export default Home;
