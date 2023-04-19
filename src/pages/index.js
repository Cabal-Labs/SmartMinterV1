import React, {useState, useEffect} from 'react'
import styles from '../styles/smart-minter1.module.css'
import NavBar from '../componets/navBar'
import Minter from '../componets/minter'
import Counter from '../componets/counter'
import Head from 'next/head'
import {isMobile} from 'react-device-detect';


export default function Home() {
  const [mobile, setMobile] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    if (isMobile) {
      setMobile(true)
    }
    setLoading(false)
  },[])


  const Content = () => {
    if (mobile) {
      return (
      <div className="fixed flex flex-col items-center justify-center w-full h-full bg-b-color-mobile">
        <div className="flex flex-col items-center justify-center p-5 overflow-hidden font-medium border-2 border-solid rounded-lg max-w-mob max-h-mob border-smart-blue">
          
          <div>
            <h2> SmartMinter is not available on mobile devices</h2>
          </div>
          <p>SmartMinter is a web application that allows you to create your own NFTs. Please use a desktop or laptop to access the application.</p> 
          <div className="flex flex-row items-center justify-center mt-2.5 overflow-hidden ">
            <a href='https://twitter.com/CabalLabs' target="_blank" rel="noopener noreferrer" ><img  className="w-auto m-6 overflow-hidden h-[42px]" src="/Assets/twitter.png" alt="mobile"/></a>
           <a href='https://discord.gg/qJ3FBSQQ8T' target="_blank" rel="noopener noreferrer" ><img className="w-auto m-6 overflow-hidden h-[49px] "src="/Assets/discord.png" alt="mobile"/></a>
           <a href='https://www.youtube.com/channel/UC0KhSOQYRqnp0Bo8Ew0Kd3g' target="_blank" rel="noopener noreferrer" ><img className="w-auto m-6 overflow-hidden h-[45px]"src="/Assets/youtube.png" alt="mobile"/></a>
            <a href='https://www.tiktok.com/@caballabs' target="_blank" rel="noopener noreferrer"><img className="w-auto m-6 overflow-hidden h-[37px]" src="/Assets/tik-tok.png" alt="mobile"/></a>
          </div>
        </div>
        <div className="absolute flex flex-row justify-center items-center w-full p-2 mt-5 border-t border-smart-blue-hover bottom-2.5 text-smart-blue-hover" >
         <a href="https://caballabs.com/" target="_blank" rel="noopener noreferrer" >{" Powered by Cabal Labs "}</a>
      </div>
      </div>
    )
    }

    
    return (
      <div className="relative flex flex-col items-start w-full h-auto border-transparent">
        <div className="relative flex flex-col items-start w-full border-transparent ">
          <NavBar/>
          <div className="relative flex flex-col items-start w-full border-transparent">
            <Counter/>
            <Minter/> 
          </div>
        </div>
      </div>
    )
    }
  
  if(loading) {return null;}
  return (
    <div>
      <Head>
        <title>SmartMinter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Content/>
    </div>
  )
}