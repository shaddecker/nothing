import React from 'react';
import {Link} from 'react-router-dom'
import './Component.css';

const Header = () => {
  return (
    <div className="navContainer">
      <nav className="nav">
        <div className="navSmall">The website about</div>
        <div className="navTitle"><Link to='/'>NOTHING</Link></div>
        <div className="nav1"></div>
        <div className="nav2"><Link to='/chuck'>Chuck</Link></div>
        <div className="nav3"><Link to='/advice'>Advice</Link></div>
        <div className="nav4"><Link to='/trivia'>Trivia</Link></div>
        <div className="nav5"><Link to='/jokes'>Jokes</Link></div>
        <div className="nav6">Random6</div>
        <div className="nav7">Random7</div>
        <div className="nav8">Random8</div>
        <div className="nav9">Random9</div>
        <div className="nav10">Random10</div>
      </nav>
    </div>
  )
}

export default Header;