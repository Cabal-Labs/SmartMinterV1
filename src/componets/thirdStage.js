import React, {useEffect, useState} from "react";
import { useNetwork } from 'wagmi'
import styles from './../styles/thirdStage.module.css'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from "react-share";

export default function ThirdState({contractAdd, cName}) {

  
  return(
  <div>
          <div className={styles['basic-info']}>
            <div className={styles['name']}>
              <span className={styles['text2']}>Your Collection: {cName}</span>
            </div>
            <div className={styles['address']}>
              <span className={styles['text3']}>
                <span>
                  Collection Address: {contractAdd}
                </span>
              </span>
            </div>
          </div>
          <div className={styles['share']}>
            <div className={styles['frame12']}>
              <div className={styles['eth-links']}>
                <a
                href={`https://etherscan.io/address/${contractAdd}`}
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <img
                    src="/Assets/untitledartwork22946-zjwo-200w.png"
                    alt="UntitledArtwork22946"
                    className={styles['untitled-artwork2']} 
                    
                  />
                </a>
                <a 
                href={`https://opensea.io/collection/${cName}`}
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <img
                    src="/Assets/image9255429opensealogoicon12944-may-200w.png"
                    alt="IMAGE9255429opensealogoicon12944"
                    className={styles['i-m-a-g-e9255429opensealogoicon1']}
                    
                  />
                </a>
              </div>
              <div className={styles['share1']}>
                <span className={styles['text5']}>
                  <span>Share with your friends!</span>
                </span>
              </div>
              <div className={styles['share-links']}>
                <FacebookShareButton
                url={`https://opensea.io/collection/${cName}`}
                quote={cName + "Powered by Cabal Labs"}
                >
                  <img
                    src="/Assets/facebook.png"
                    alt="facebook12945"
                    className={styles['facebook1']}
                  />
                </FacebookShareButton>
                <TwitterShareButton
                  url={`https://opensea.io/collection/${cName}`}
                  quote={cName + "Powered by Cabal Labs"}
                >
                  <img
                    src="/Assets/twitter.png"
                    alt="twitter22945"
                    className={styles['twitter2']}
                  />
                </TwitterShareButton>
                <LinkedinShareButton
                  url={`https://opensea.io/collection/${cName}`}
                  summary={cName + "Powered by Cabal Labs"}
                >
                  <img
                    src="/Assets/linkedin.png"
                    alt="instagram12945"
                    className={styles['instagram1']}
                  />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>

      
    );
}