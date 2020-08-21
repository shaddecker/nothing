import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Component.css';

const Header = () => {
  return (
    <div className="navContainer">
      <nav className="nav">
        <Link to='/'>
          <div className="navSmall">The website about</div>
          <div className="navTitle">NOTHING</div>
        </Link>
        <Link to='/chuck'>
          <div className="nav1">Chuck</div>
        </Link>
        <Link to='/advice'>
          <div className="nav2">Advice</div>
        </Link>
        <Link to='/jokes' >
          <div className="nav3">Jokes</div>
        </Link>
          <div className="nav4">Random</div>
          <div className="nav5">Random</div>
          <div className="nav6">Random</div>
      </nav>
    </div>
  )
}

export default Header;
