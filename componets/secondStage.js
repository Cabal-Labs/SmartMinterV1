import React, {useState, useEffect, use} from "react";
import styles from './../styles/smart-minter2.module.css'
import {ethers} from "ethers"
import { NFTStorage, File } from "nft.storage";
import ImagesC from "./imagesC";


export default function SecondStage({ mintPercent, setMintPercent,setLoading,abi, contractAdd, setStageNumber, stageNumber ,setContractDeployed, setLastStage, setAlreadySet,alreadySet,counter, setCounter,setMainImages,mainImages,handleImages,nft,setNft,images, setImages, setInfoNFT, infoNFT, setReadyForInfo}) {
  
  const [allSet, setAllSet] = useState(false)
  useEffect(()=>{
    if(!alreadySet) {
      let a = [];
      for (let i = 0; i < images.length; i++ ){
        a[i] = {
          name:"",
          description:"",
          image:images[i],
          attributes: [],
          filled: false,
          id:i
        }
      }
      setNft(a)
      setAlreadySet(true)
    }
  },[])

  useEffect(()=>{
    for(let i = 0; i < nft.length; i++){
      if(!nft[i].filled) return;
    }
    setAllSet(true)
  },[])

  function increasePer(len,b) {
    let sum = 100/len
    let c = b + sum
    setMintPercent(c)
    return c;
  }

  async function genMetadata() {  

    let uris = []
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    setLoading(true)
    const client = new NFTStorage({
      token: process.env.NFTSTORAGE,
    });
    let a = (100/nft.length)
    let b = 0
    for(let i = 0; i < nft.length; i++){   

        await client
        .store({
          image: new File([nft[i].image], `${nft[i].name}.jpg`, { type: 'image/jpg' }),
          name: nft[i].name,
          description: nft[i].description,
          attributes: nft[i].attributes
        })
        .then(async (metadata) => {
          let metadataArray = metadata.url.split("/");
          console.log(`https://${metadataArray[2]}.ipfs.w3s.link/${metadataArray[3]}`)
          uris.push(`https://${metadataArray[2]}.ipfs.w3s.link/${metadataArray[3]}`)
        });
        b = increasePer(nft.length, b)
      }

      try{
        let _contract = new ethers.Contract(
          contractAdd,
          abi,
          signer
        );  
        const mint = await _contract.safeMint(uris);
        
        console.log("metadata saved: ", mint.hash);
      }catch(e){
        console.log(e)
        setLoading(false)
      }

  }

  async function end() {
    
    await genMetadata();
    setLoading(false)
    if(allSet ){
      setContractDeployed(false)
      setLastStage(true)
      setStageNumber(3)
    }
  }
 
    
    return(
        <>
          <div className={styles['middle']}>
            <div className={styles['images-sq']}>
              <ImagesC 
                mainImages={mainImages} 
                handleImages={handleImages}
                counter={counter} 
                setCounter={setCounter} 
                setMainImages={setMainImages} 
                setReadyForInfo={setReadyForInfo} 
                infoNFT={infoNFT} 
                setInfoNFT={setInfoNFT} 
                images={images} 
                setImages={setImages} 
                nft={nft} 
                setNft={setNft}
                setStageNumber={setStageNumber}
                stageNumber={stageNumber}
              />
            </div>
          </div>
        <div className={styles['minter-buttom']}>
              <div onClick={ () => {end()}}  className={(allSet) ? styles['buttom'] : styles['buttom-disabled'] }>
                <span className={(allSet) ? styles['text12'] : styles['text12-disabled']}>
                  <span>Continue</span>
                </span>
              </div>
        </div>
        </>
    )
}