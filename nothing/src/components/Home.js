import React from 'react';
import './Component.css';
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';


function Home (){
  const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
  

  return (
    <div className="container">
      <Bounce><div className="contentTitle">      
        NOTHING
      </div></Bounce>
      <div className="content">This is the web site about nothing in particular. We have just accumulated a bunch of jokes, trivia and other random stuff for your entertainment.  Feel free to use the nav links at the top of this page to have a look around.  Enjoy!
      </div>      
    </div>
  )
}

export default Home;
