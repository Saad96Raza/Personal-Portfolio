import React, { useEffect ,useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import hand from '../images/hand.png'

const Footer = () => {

gsap.registerPlugin(ScrollTrigger);


const [mousePos, setMousePos] = useState({});

console.log(mousePos)

useEffect(()=>{



    gsap.to('.footer-inner h1 ', {
      scrollTrigger: {
        trigger: '.footer-inner h1',
        start: "top 65%",
        scrub: false,
        markers: false

      },
      y: 0,
      duration: 1,
      ease: 'ease.Out',


    })

    

    const handleMouseMove = (event) => {
        setMousePos({ x: (event.clientX * -3/50),y: (event.clientY * -3/50) });
        // console.log(mousePos.x)

      };

      window.addEventListener('mousemove', handleMouseMove);

       
      return () => {
        window.removeEventListener(
          'mousemove',
          handleMouseMove
        );
      };


},[])


gsap.to('.footer-inner img',{x:mousePos.x,y:mousePos.y,duration:0.3,ease:"Power0.ease.out"});





    return (
        <>
            <div className="container-3">

                <h1 className='container-3-title' >contact</h1>


                <div className="footer-inner">

                <span className='under'><h1><b>lets</b> get in touch</h1></span>    

            <form action="">

            <input data-cursor="-opaque -lg" type="text"  placeholder='Name'/>
            <input data-cursor="-opaque -lg" type="email"  placeholder='Email'/>
            <input data-cursor="-opaque -lg" type="text"  placeholder='Message'/>
             <button>message</button>

             </form>

             <img src={hand} alt="" />
    
                </div>
            </div>



        </>
    )
}

export default Footer