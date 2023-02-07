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
      <div className={styles['Mobile']}>
        <div className={styles['mobile-msg']}>
          
          <div>
            <h2> SmartMinter is not available on mobile devices</h2>
          </div>
          <p>SmartMinter is a web application that allows you to create your own NFTs. Please use a desktop or laptop to access the application.</p> 
          <div className={styles['images']}>
            <a href='https://twitter.com/CabalLabs' target="_blank" rel="noopener noreferrer" ><img  className={styles["twitter"]} src="/Assets/twitter.png" alt="mobile"/></a>
           <a href='https://discord.gg/qJ3FBSQQ8T' target="_blank" rel="noopener noreferrer" ><img className={styles["dicord"]} src="/Assets/discord.png" alt="mobile"/></a>
           <a href='https://www.youtube.com/channel/UC0KhSOQYRqnp0Bo8Ew0Kd3g' target="_blank" rel="noopener noreferrer" ><img className={styles['youtube']} src="/Assets/youtube.png" alt="mobile"/></a>
            <a href='https://www.tiktok.com/@caballabs' target="_blank" rel="noopener noreferrer"><img className={styles["tiktok"]} src="/Assets/tik-tok.png" alt="mobile"/></a>
          </div>
        </div>
        <div className={styles['mobile-footer']} >
        Powered by <a href="https://caballabs.com/" target="_blank" rel="noopener noreferrer" >{" Cabal Labs "}</a>
      </div>
      </div>
    )
    }
    return (
      <div className={styles['smart-minter1']}>
        <div className={styles['main-frame']}>
          <NavBar/>
          <div className={styles['body']}>
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
