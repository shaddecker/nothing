import React, {useState} from 'react';
import './Component.css';
import styled, {keyframes} from 'styled-components';
import {fadeIn,zoomIn} from 'react-animations';


function Home (){
  const FadeIn1 = styled.div`animation: 10s ${keyframes`${fadeIn}`}` ;  
  const FadeIn2 = styled.div`animation: 20s ${keyframes`${fadeIn}`}` ;
  const FadeIn3 = styled.div`animation: 30s ${keyframes`${fadeIn}`}` ;
  const ZoomIn = styled.div`animation: 50s ${keyframes`${zoomIn}`}` ;

  return (
    <div className="container">      
      <div className="content">
        <FadeIn1>This is the web site about nothing in particular.</FadeIn1>
        <FadeIn2>We have just accumulated a bunch of jokes, trivia and other random stuff for your entertainment.</FadeIn2>
        <FadeIn3>Feel free to use the nav links at the top of this page to have a look around.</FadeIn3>
        <ZoomIn><div className="contentXL">ENJOY!</div></ZoomIn>
      </div>      
      
    </div>
  )
}

export default Home;
