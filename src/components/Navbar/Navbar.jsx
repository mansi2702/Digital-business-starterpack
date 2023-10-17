"use client"


import React,{useState} from 'react'
import {RxCross2} from 'react-icons/rx'
import './Navbar.css'
import {BiMenuAltRight} from 'react-icons/bi'
import { WrappedBuildError } from 'next/dist/server/base-server'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
import { Link }  from 'react-scroll'

const Navbar = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
    const[navStyle, setNavStyle] = useState("");
    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.2) {
            setNavStyle("sticky");
        }
        else {
            setNavStyle("");
        }
    });
  return (
    <div className={`n-wrapper ${navStyle}`}>

        {/* desktop version */}
        <div className='container'>
            <div className='n-container'>
                {/* left side */}
                <div className='n-logo'>
                       <span>MANSIKEEPCODE</span>
                </div>


                {/* right side */}
                <div className='n-right'>
                    <div className='n-menu'>
                        <Link to='wwd-wrapper' spy={true} smooth={true}>
                        <span>What we do</span>
                        </Link>
                        <Link to='hiw-wrapper' spy smooth offset={100}>
                        <span>How It Works</span>
                        </Link>
                        <Link to='wwi-wrapper' spy smooth>
                        <span>Who we Invest</span>
                        </Link>
                        

                    </div>
                    <div className='fund-button'>
                       Get funded
                    </div>
                </div>
            </div>
        </div>


        {/*  mobile/tab version */}
        <div 
        className='nm-container'>
           {/*  logo */}
           <span>MANSIKEEPCODE</span>


           {/* Menu Icon */}
           {
            !mobileMenuOpened ? (
           <BiMenuAltRight size={30} onClick={()=>setMobileMenuOpened(true)}/> 
            ) : (
           <RxCross2 size={30} onClick={()=> setMobileMenuOpened(false)} />
           )}

          

           {/* mobile menu */}
           <div  className='nm-menu'
           style={{transform: mobileMenuOpened && "translateX(0%)"}}
           >
            <Link 
            onClick={() => setMobileMenuOpened(false)}
            to='wwd-wrapper'
            spy={true}
            smooth={true}
            >
               <span>What we do</span>
            </Link>
            <Link 
            onClick={() => setMobileMenuOpened(false)}
            to='hiw-wrapper'
            spy
            smooth
            offset={100}
            >
               <span>How it works</span>
            </Link>
            <Link 
            onClick={() => setMobileMenuOpened(false)}
            to='wwi-wrapper'
            spy
            smooth
            >
                 <span>Who we Invest</span>
            </Link>
          
           
            <div className='m-funded-button'>Get Funded</div>
           </div>
        </div>
    </div>
  )
}

export default Navbar