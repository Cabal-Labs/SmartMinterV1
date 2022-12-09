import React, {useEffect, useState,useRef} from "react";
import styles from './../styles/smart-minter1.module.css'
import {ethers} from "ethers"
import axios from 'axios'
import getInputN from "../Helpers/Compile";
import getInputR from "../Helpers/Compile";


export default function FirstStage({  setLoading,cName, setCName, setStageNumber, images, setImages, contractAdd, setContractAdd, abi, setAbi, setContractDeployed, contractDeployed}) {
    const [royaltiesCheck, setRoyaltiesCheck] = useState(false)
    const [dragActive, setDragActive] = useState(false);
    const [cSymbol, setCSymbol] = useState(null)
    const [cRoyalties, setCRoyalties] = useState(null)
    const [hasName, setHasName] = useState(false)
    const [hasSymbol, setHasSymbol] = useState(false)
    const [hasRoyal, setHasRoyal] = useState(true)
    const [hasFiled, setHasFiled] = useState(false)
    const [deployed, setDeployed] = useState(false)
    const [fileHovering, setFileHovering] = useState(false)
    //const [compContract, setCompContract] = useState(null)
    const inputRef = useRef(null);
    const inputRoyalRef = useRef(null)
  
    
    function handleRoyalties(e) {
        if (e.target.value < 100){
            let d = e.target.value * 100 
            setCRoyalties(d)
            setHasRoyal(true)
        }else if(e.target.value > 100){
            e.target.value = null
            setCRoyalties(0)
        }
    }

    async function handleImagesDrop(im) {
        let a = []
        for(let i = 0; i < im.length; i++){
          a.push(im[i])
        }
        setImages(a)
        setHasFiled(true)
    }
    function deleteImage(index) {
        
        if (index >= 0 && images.length > 1) {
          setImages((images) => images.filter((_, _index) => _index !== index));
          return;
        }
        setHasFiled(false);
        setFileHovering(false)
        setImages([])
        
      }

    async function handleImagesClick(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            let a = []
            for(let i = 0; i < e.target.files.length; i++){
            a.push(e.target.files[i])
            }
            setImages(a)
            setHasFiled(true)
        }     
    }
    const onButtonClick = () => {
        inputRef.current.click();
    };

    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
          setDragActive(true);
        } else if (e.type === "dragleave") {
          setDragActive(false);
        }
    };
    const handleDrop = async function(e) {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        await handleImagesDrop(e.dataTransfer.files)
        
      }
    };

    async function Compile(){  
        let input;
        if(royaltiesCheck){
            input = getInputR(cName,cSymbol, (cRoyalties == null) ? 0 : cRoyalties);
        }else if(!royaltiesCheck){
            input = getInputN(cName, cSymbol);
        }
        try{
        const response = await axios.post('https://sol-compiler-sm.herokuapp.com/', {all: JSON.stringify(input)})
        const contracts = response.data.contracts
        const CompContract = contracts["test.sol"];
        return CompContract;
        }catch(e){
          console.log(e)
          return null
        }
        
    }


    async function Deploy() {
        setLoading(true)
        const CompContract = await Compile();
        console.log(CompContract)
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const factory = new ethers.ContractFactory(CompContract.CabalContract.abi, CompContract.CabalContract.evm.bytecode.object, signer )
        try{
          const contract = await factory.deploy({gasLimit: 5000000})
          const a = await contract.deployTransaction.wait()
          console.log(a)
          console.log(contract)
          console.log(`Deployment successful! Contract Address: ${contract.address}`)
          setLoading(false)
          setAbi(CompContract.CabalContract.abi)
          setContractAdd(contract.address)
          setContractDeployed(true)
          setStageNumber(1)
        } catch(e) {
          setLoading(false)
          console.log(e)
        }
        
    }

    return(
        <div className={(contractDeployed) ? styles['firstStageFade'] : styles['firstStage']}>
            <div className={styles['minter-text']}>
              <div className={styles['input-name']}>
                <span className={styles['text02']}>
                <input maxLength={15} placeholder='Collection Name' className={styles['inputName']} onChange={(e) => { setCName(e.target.value); (e.target.value.length != 0) ? setHasName(true): setHasName(false); }}/>
                </span>
              </div>
              <div className={styles['input-symbol']}>
                  <input maxLength={4} placeholder='Symbol' className={styles['inputSym']} onChange={(e) => {setCSymbol(e.target.value); (e.target.value.length != 0) ? setHasSymbol(true): setHasSymbol(false);}} />
              </div>
            </div>
            <div className={styles['minter-royalties']}>
              {royaltiesCheck ? 
                  <div onClick={()=>{setRoyaltiesCheck(false); setHasRoyal(true); inputRoyalRef.current.value = null;}} className={styles['tick-box']}>
                    <img
                      src="/Assets/check.png"
                      alt="check12084"
                      className={styles['check-icon']}
                    />
                  </div> :
                  <div onClick={()=>{setRoyaltiesCheck(true); setHasRoyal(false);}} className={styles['tick-box2']}/>
                }
              <div className={styles['royalties']}>
                <div className={styles['input-percent']}>
                <input type="number" 
                      onInput={(e) => {
                          e.target.value = e.target.value.slice(0, 3)
                      }} 
                      disabled={!royaltiesCheck} 
                      ref={inputRoyalRef}
                      placeholder='0%' 
                      className={styles['inputPer']} 
                      onChange={handleRoyalties}
                  />
                </div>
                <span className={styles['text08']}>
                  <span>Royalties</span>
                </span>
              </div>
            </div>
            <div className={styles['minter-files']}>
              <div className={dragActive ? styles['drag-files-active'] : styles['drag-files']} onDragEnter={handleDrag} onClick={fileHovering ? null : onButtonClick}>
                <input 
                  onChange={handleImagesClick} 
                  ref={inputRef} 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  className={styles['dragInput']}
                />
                {hasFiled ?
                  <div className={hasFiled ? styles['filesGrid'] : styles['filesGrid-none'] }>
                  {
                    images.map((images, index)=>(
                      <div className={styles['fileSq'] } onMouseEnter={() => setFileHovering(true) } onMouseLeave={() => setFileHovering(false)}>
                          <p className={styles['imageName']}>{images.name}</p>
                          <button onClick={()=>{ deleteImage(index);}}className={styles['xButton']}><span>X</span></button>
                      </div>
                    ))
                  }
                  </div>
                : 
                  <div className={styles['filed-div']}>
                    <img
                      src="/Assets/files.png"
                      alt="document12135"
                      className={styles['docu-icon']}
                    />
                    <span className={styles['text10']}>
                      <span>Browse or Drag files</span>
                    </span>
                  </div>
                }
                { dragActive ? <div className={styles["drag-file-element"]} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> : null}
              </div>
            </div>
            <div className={styles['minter-buttom']}>
              <div onClick={(hasName && hasSymbol && hasRoyal && hasFiled) ? Deploy: null} className={(hasName && hasSymbol && hasRoyal && hasFiled) ? styles['buttom'] : styles['buttom-disabled'] }>
                <span className={(hasName && hasSymbol && hasRoyal && hasFiled) ? styles['text12'] : styles['text12-disabled']}>
                  <span>Continue</span>
                </span>
              </div>
            </div>
        </div>
    );
}