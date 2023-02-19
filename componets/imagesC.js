import React, {useEffect, useState} from "react";

import styles from './../styles/smart-minter2.module.css'
export default function ImagesC({setStageNumber, stageNumber, setImages, images, mainImages, handleImages,counter, setCounter,nft,setNft,infoNFT,setInfoNFT, setIndex, setReadyForInfo}) {
    
    
    useEffect(() => {
        handleImages();
    },[counter, nft])
    useEffect(() => {
        handleImages();
    },[])

    function deleteImage(index) {
        if (index >=0 && nft.length > 1) {
          setNft((nft) => nft.filter((_, _index) => _index !== index));
          setImages((images) => images.filter((_, _index) => _index !== index))
          handleImages();
        }else{
            console.log("no se puede")
        }
    }
 
    function goToInformation(index) {
        setInfoNFT({nft:nft[index], index: index})
        setReadyForInfo(true)
        setStageNumber(stageNumber + 1)
    }


    if(!mainImages) return null
    return(
        <div className={styles['inner-sq']}>
            <div className={styles['parent-images']}>
                <img
                    src="/Assets/left-arrow.png"
                    className={styles['leftarrow2']}
                    onClick={() => {counter == 0 ? null : setCounter(counter - 1)}}
                />
                <div className={styles['images']}>
                    {
                    mainImages.map((_nft,index)=> (
                        <div key={index} className={styles['frame282']}>
                            <div className={styles['imageBox']} >
                                <div onClick={() => {deleteImage(_nft.id)}} className={styles['deleteImage']}><p className={styles['xButton']}>x</p></div>
                                <img
                                alt="IMAGE312253"
                                src={URL.createObjectURL(_nft.image)}
                                key={index}
                                className={styles['i-m-a-g-e31']}
                                onClick={()=>{ goToInformation(_nft.id);}}
                                />
                            </div>
                            {( _nft.filled) ? 
                            <div className={styles['imageState']}> 
                            <img
                                src="/Assets/check.png"
                                alt="check12084"
                                className={styles['check-icon']}
                            />
                            </div>
                            :
                            <div className={styles['imageStateNo']} />
                            }
                        </div>    
                    ))
                    }
                </div>
                <img
                    src="/Assets/rigth-arrow.png"
                    className={styles['rightarrow1']}
                    onClick={() => {nft.length - 3 == counter ? null : setCounter(counter+1)}}
                  />
            </div>
        </div>
    );
}