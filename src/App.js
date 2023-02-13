import React, { useEffect,useState } from "react";

import gsap from 'gsap';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Container2 from "./Components/Container2";
import AnimationRender from "./Components/AnimationRender";
import LocomotiveScroll from "locomotive-scroll";
import '../node_modules/locomotive-scroll/dist/locomotive-scroll.min.css'
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Components/style1.css";
import "./Components/style2.css";
import "./Components/style3.css";
import Footer from "./Components/Footer";

function App() {



  useEffect(() => {

  




  },[]);

  return (
    <>
      
      <AnimationRender/>
        <Header />
        <Home/>
        <Container2/>
        <Footer/>
      
    </>
  );
}

export default App;
