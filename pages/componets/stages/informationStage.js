import React, {useState, useEffect} from "react";
import styles from '../../../styles/informationStage.module.css'

export default function InformationStage({setStageNumber, stageNumber, handleImages,infoNFT, nft, setNft,setReadyForInfo}) {
    const[attributes, setAttributes] = useState([{value:"",type:""}])
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    
    const addAttribute =  () => {
      setAttributes([...attributes,{value:"",type:""}])
    }
    const addType = (e, index) => {
      const tempAtt = [...attributes];
      tempAtt[index].type = e.target.value;
      setAttributes(tempAtt)
    }
    const addValue = (e, index) => {
      const tempAtt = [...attributes];
      tempAtt[index].value = e.target.value;
      setAttributes(tempAtt)
      console.log(attributes)
    }

    const AddInfo =  () => {
      let a = [...nft]
      a[infoNFT.index].name = name;
      a[infoNFT.index].description = description;
      a[infoNFT.index].attributes = ((attributes[0].type != "") ? attributes : []);
      a[infoNFT.index].filled = true;
      console.log(a)
      setNft(a)
      setReadyForInfo(false)
      handleImages();
      setStageNumber(stageNumber - 1)
    }

    return(
            <div className={styles['information-div']}>
              <div className={styles['basic-info-div']}>
                <img
                  alt="IMAGE412921"
                  src={URL.createObjectURL(infoNFT.nft.image)}
                  className={styles['i-m-a-g-e41']}
                />
                <div className={styles['desname-div']}>
                  <div className={styles['name-div']}>
                    <div className={styles['name-input']}>
                      <span className={styles['text01']}>
                        <span>
                        <input maxLength={15} placeholder='Name' onChange={(e)=>{setName(e.target.value)}} className={styles['inputName']} />
                          <br></br>
                          <span></span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <span className={styles['description-title']}>
                    <span>Description</span>
                    <br></br>
                  </span>
                  <div className={styles['description-input']}>
                    <textarea placeholder="cool nft..." onChange={(e)=> {setDescription(e.target.value)}} className={styles['desInput']}/>
                  </div>
                </div>
              </div>
              <div className={styles['attributes-div']}>
                <div className={styles['atributtes-title']}>
                  <span className={styles['text10']}>
                    <span>Atributtes</span>
                  </span>
                  <img
                    onClick={() => {addAttribute();}}
                    alt="plus12922"
                    src="/Assets/addIcon.png"
                    className={styles['plus1']}
                  />
                </div>
                <div className={styles['atributtes-grid']}>

                  {attributes.map((_, index) => (
                    <div key={index} className={styles['atributte']}>
                      <div className={styles['type-input']}>
                      <input placeholder="type" className={styles['attInput']} onChange={(e)=>{addType(e, index);}}/>
                      </div>
                      <div className={styles['value-input']}>
                        <input placeholder="value" className={styles['attInput']} onChange={(e)=> {addValue(e,index)}}/>
                      </div>
                    </div>
                  ))
                  }
                </div>
              </div>
              <div className={styles['done-div']}>
                <div className={(name!="" && description!="")? styles['done-button'] : styles['done-buttonDis']} onClick={() =>{(name!="" && description!="") ? AddInfo() : null }}>
                  <div className={ (name!="" && description!="")? styles['text42'] : styles['text42Dis']}>
                    <span>Done</span>
                  </div>
                </div>
              </div>
            </div>
   
    );
}
