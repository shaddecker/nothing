import React from 'react';
import {Link} from 'react-router-dom'
import './Component.css';
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';

const Header = () => {
  const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
  return (
    <div className="navContainer">
      <nav className="nav">
        <div className="navSmall">The website about</div>
        <div className="navTitle"><Link to='/'><Bounce>NOTHING</Bounce></Link></div>
        <div className="nav1"></div>
        <div className="nav2"><Link to='/chuck'>Chuck</Link></div>
        <div className="nav3"><Link to='/advice'>Advice</Link></div>
        <div className="nav4"><Link to='/trivia'>Trivia</Link></div>
        <div className="nav5"><Link to='/jokes'>Jokes</Link></div>
        <div className="nav6"><Link to='/catdogfacts'>Cat|Dog Facts</Link></div>
        <div className="nav7"><Link to='/ipfind'>Find my IP</Link></div>
        <div className="nav8">Random 8</div>
        <div className="nav9">Random 9</div>
        <div className="nav10">Random 10</div>
      </nav>
    </div>
  )
}

export default Header;