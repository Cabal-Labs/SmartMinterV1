import React, {useState, useEffect} from 'react'
import styles from '../styles/smart-minter1.module.css'
import NavBar from '../componets/navBar'
import Minter from '../componets/minter'
import Counter from '../componets/counter'
import Head from 'next/head'



export default function Home() {
  
  return (
    <div>
      <Head>
        <title>SmartMinter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['smart-minter1']}>
        <div className={styles['main-frame']}>
          <NavBar/>
          <div className={styles['body']}>
            <Counter/>
            <Minter/> 
          </div>
        </div>
      </div>
    </div>
  )
}
