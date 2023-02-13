import React,{useEffect} from 'react'







const Header = () => {


useEffect(()=>{

  

   
})


  return (
    <>

<nav>
        <div className="logo"  data-magnetic  >&copy; code by saad</div>
        <div className="nav-content">
            <ul className="nav-items" >
                <li className="nav-list"   data-magnetic data-cursor="-opaque"><a href='#'>home</a></li>
                <li className="nav-list"   data-magnetic data-cursor="-opaque"><a href='#'>work</a></li>
                <li className="nav-list"   data-magnetic data-cursor="-opaque"><a href='#'>contact</a></li>
            </ul>
            
        </div>

        <div className="empty-space"></div>
    </nav>



    </>
  )
}

export default Header