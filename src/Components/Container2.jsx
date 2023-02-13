import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import "../Components/charAnim.css"
import Splitting from "splitting";

import king from '../images/black king.png'






const Container2 = () => {



  useEffect(() => {

    Splitting({
      target: "[data-splitting]",
      by: "chars",
    });
  
  


    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({repeat:-1})

    tl.to('.container-2-right img',{y:'+=60',duration:2,ease:'Power1.easeInOut'});
    
    tl.to('.container-2-right img',{y:'-=60',duration:2,ease:'Power1.easeInOut'});

    gsap.to('.container-2-title ', {
      scrollTrigger: {
        trigger: '.container-2-title',
        start: "top 65%",
        scrub: false,
        markers: false

      },
      y: 0,
      duration: 1,
      ease: 'ease.Out',


    })

    gsap.to('.container-2-text', {
      scrollTrigger: {
        trigger: '.container-2-text',
        start: "top 65%",
        scrub: false,
        markers: false

      },
      y: 0,
      stagger:0.1,
      duration: 1,
      ease: 'ease.out',


    })

    gsap.to('.container-2-right img',{
      scrollTrigger: {
      trigger: '.container-2-right img',
      start: "top 65%",
      scrub: false,
      markers: false

    },x:0,opacity:1,ease:'Power1.easeIn',duration:0.6})




  },[])


  return (
    <>



      <div className="container-2">


<div className="container-2-left">

<span className='under'><span className='container-2-title'>work</span></span>

<span className='under'><span  data-cursor="-opaque -lg" className='container-2-text' >Helping brands to stand out in the digital era.</span></span>
<span className='under'><span  data-cursor="-opaque -lg" className='container-2-text' >Together we will set the new status quo.No</span></span>
<span className='under'><span  data-cursor="-opaque -lg" className='container-2-text' >nonsense,always on the cutting edge.</span></span>



<span className='container-2-text-area'>The combination of my passion  <br/>for design, code & interaction <br/>positions me in a unique place in<br/> the web design world.</span>


</div>

<div className="container-2-right">

  <img src={king} alt="" />
</div>


      </div>





    </>
  )
}

export default Container2