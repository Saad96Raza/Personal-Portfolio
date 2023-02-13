import React,{useEffect} from 'react'
import jQuery from 'jquery';
import Cursor from "../cursor-magnetic-demo/src/js/cursor";
import Magnetic  from "../cursor-magnetic-demo/src/js/magnetic";
import "../cursor-magnetic-demo/src/scss/cursor.scss";


const AnimationRender = () => {

useEffect(()=>{


  const cursor = new Cursor({
    container: "body", // container to attach
    speed: 0.7, // default speed
    ease: "expo.out", // default ease (gsap)
    visibleTimeout: 100 // disappear timeout
  });
  
  
  jQuery('[data-magnetic]').each(function () {
  
  new Magnetic(this);
  
  
  });
  


 


})




  return (
    <></>
  )
}

export default AnimationRender