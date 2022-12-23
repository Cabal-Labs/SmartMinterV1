import React, {useState, useEffect, useRef} from "react";
import styles from './../styles/smart-minter1.module.css'
import FirstStage from "./firstStage";
import SecondStage from "./secondStage";
import InformationStage from "./informationStage";
import ThirdState from "./thirdStage";
import RingLoader from "react-spinners/RingLoader";
import Footer from "./footer";
import LinearProgress from '@mui/material/LinearProgress';


export default function Minter() {
  const [contractAdd, setContractAdd] = useState(null)
  const [abi, setAbi] = useState(null)
  const [images, setImages] = useState([])
  const [contractDeployed, setcontractDeployed] = useState(false)
  const [infoNFT, setInfoNFT] = useState(null)
  const [readyForInfo, setReadyForInfo] = useState(false)
  const [nft, setNft] = useState([])
  const [mainImages, setMainImages] = useState(null)
  const [counter, setCounter] = useState(0)
  const [alreadySet, setAlreadySet] = useState(false)
  const [lastStage, setLastStage] = useState(false)
  const [stageNumber, setStageNumber] =useState(0)
  const [cName, setCName] = useState(null)
  const [loading,setLoading] = useState(false)
  const [mintPercent, setMintPercent] = useState(0)
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    handleImages();
},[nft])

  async function handleImages() {
    setMainImages([])
    if (nft.length > 3) {
        setMainImages(nft.slice(0 + counter, 3 + counter))
      
    }else{
        setMainImages(nft)
    }
  }

  const Spinner = () => {

    return(
      <div className={styles['spinner']}>
          <RingLoader
            color="#002a32"
            cssOverride={{
              alignSelf: 'center',
              justifySelf:'center'
              
            }}
            loading={loading}
            size={90}
            speedMultiplier={1.5}
          />
          {(stageNumber == 0) ?
          <div className={styles['deploy-msg']}>
             This could take a couple of minutes! {"\n"} We are deploying your collection...
          </div>
          :
          <div className={styles['deploy-msg']}>
          <LinearProgress variant="determinate" value={mintPercent} />
          </div>
          }
      </div>
    
    )
  }

  const Disclaimer = () => {

    return(
    <div className={styles['disclaimer']}>
      <div className={styles['disclaimer-msg']}>
      Welcome to the SmartMinter platform! As a beta platform, there may be some bugs or issues that have not yet been addressed. However, the development team is dedicated to providing the best experience possible and is available to offer support and assistance if you encounter any problems while using the platform.
      We recomend following the official tutorial <a href="https://blog.caballabs.com/your-nft-collection-in-3-simple-steps-final-guide-4ce29580ae3e" target="_blank" rel="noopener noreferrer"> <div style={{marginTop:"10px"}} className={styles['webLink']} >Here</div></a>
      <div className={styles['signature']}>
        <div onClick={() => {setAccepted(true)}} className={styles['disclaimer-button']}>I Understand</div>
      </div>
      </div>
    </div>
    )
  }



    return(
        <div className={styles['parent-minter']}>
        <div className={styles['main-minter']}>
          <div>
            <div className={styles['minter-top']}>
              <span className={styles['text']}>
                <span>SmartMinter</span>
              </span>
              <div className={styles['information-button']}>
                <a
                href="https://blog.caballabs.com/your-nft-collection-in-3-simple-steps-final-guide-4ce29580ae3e"
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <img
                    src="/Assets/information.png"
                    alt="information12482"
                    className={styles['information-bu']}
                  />
                </a>
              </div>
            </div>
            {accepted ? null : <Disclaimer/> }
            {(loading) ? <Spinner/> : null}
            {(stageNumber == 0)? 
              <FirstStage 
              contractAdd={contractAdd} 
              setContractAdd={setContractAdd}
              abi={abi}
              setAbi={setAbi}
              images={images}
              setImages={setImages}
              setContractDeployed={setcontractDeployed}
              contractDeployed={contractDeployed}
              setStageNumber={setStageNumber}
              cName={cName}
              setCName={setCName}
              setLoading={setLoading}
              /> 
            : 
              null
            }
            { (stageNumber == 1 )  ? 
              <SecondStage
              images={images}
              setImages={setImages}
              abi={abi}
              infoNFT={infoNFT} 
              setInfoNFT={setInfoNFT}
              setReadyForInfo={setReadyForInfo}
              nft={nft} 
              setNft={setNft}
              handleImages={handleImages}
              mainImages={mainImages}
              setMainImages={setMainImages}
              counter={counter}
              setCounter={setCounter}
              alreadySet={alreadySet}
              setAlreadySet={setAlreadySet}
              setLastStage={setLastStage}
              lastStage={lastStage}
              setContractDeployed={setcontractDeployed}
              setStageNumber={setStageNumber}
              stageNumber={stageNumber}
              contractAdd={contractAdd} 
              setLoading={setLoading}
              mintPercent={mintPercent}
              setMintPercent={setMintPercent}
              /> 
              : 
              null
            }
            {(stageNumber == 2) ?
             <InformationStage 
              handleImages={handleImages} 
              infoNFT={infoNFT} 
              setInfoNFT={setInfoNFT} 
              setReadyForInfo={setReadyForInfo} 
              nft={nft} 
              setNft={setNft}
              setStageNumber={setStageNumber}
              stageNumber={stageNumber}

              /> 
             :
              null
            }

            {
              (stageNumber == 3 && lastStage) ? 
              <ThirdState
                cName={cName}
                contractAdd={contractAdd} 
              />
              :
              null
            }
            
             
          </div>
        </div>
        <Footer/>
      </div>
    )
}