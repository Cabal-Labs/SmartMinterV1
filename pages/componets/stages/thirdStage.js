import React, {useEffect, useState} from "react";

import styles from './../../../styles/thirdStage.module.css'

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
                  <img
                    src="/Assets/untitledartwork22946-zjwo-200w.png"
                    alt="UntitledArtwork22946"
                    className={styles['untitled-artwork2']}
                  />
                  <img
                    src="/Assets/image9255429opensealogoicon12944-may-200w.png"
                    alt="IMAGE9255429opensealogoicon12944"
                    className={styles['i-m-a-g-e9255429opensealogoicon1']}
                  />
                </div>
                <div className={styles['share1']}>
                  <span className={styles['text5']}>
                    <span>Share with your friends!</span>
                  </span>
                </div>
                <div className={styles['share-links']}>
                  <img
                    src="/Assets/facebook12945-82km-200w.png"
                    alt="facebook12945"
                    className={styles['facebook1']}
                  />
                  <img
                    src="/Assets/twitter22945-crm-200w.png"
                    alt="twitter22945"
                    className={styles['twitter2']}
                  />
                  <img
                    src="/Assets/instagram12945-tlm-200w.png"
                    alt="instagram12945"
                    className={styles['instagram1']}
                  />
                </div>
              </div>
            </div>
          </div>

      
    );
}