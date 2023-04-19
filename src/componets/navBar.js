import React, {useState, useEffect} from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import Link from 'next/link';


export default function NavBar() {
    return(
        <div className="relative flex items-center justify-between flex-shrink-0 w-full h-16 p-6 mb-px border-b shadow-md border-smart-blue">
            <div className="flex items-center h-full text-smart-blue">
              <img
              src="/logo.png"
              alt="UntitledArtwork12052"
              className="w-auto h-10"
              />
              <Link href="https://caballabs.com/" target="_blank" rel="noopener noreferrer">
                <div className="w-auto h-auto ml-2.5 border-b border-smart-blue" >Cabal Labs</div>
              </Link>
            </div>
            
            <ConnectButton />
    </div>
  );
}