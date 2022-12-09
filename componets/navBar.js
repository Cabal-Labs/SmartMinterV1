import React, {useState, useEffect} from 'react'
import styles from './../styles/smart-minter1.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import Link from 'next/link';

export default function NavBar() {
    return(
        <div className={styles['nav-bar']}>
            <div className={styles['img-links']}>
              <img
              src="/logo.png"
              alt="UntitledArtwork12052"
              className={styles['cabal-logo']}
              />
              <Link href="https://caballabs.com/" target="_blank" rel="noopener noreferrer">
                <div className={styles['webLink']} >Cabal Labs</div>
              </Link>
            </div>
            
            <ConnectButton />
    </div>
  );
}