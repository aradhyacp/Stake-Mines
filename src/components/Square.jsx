import React, { useState } from 'react'
import './Square.css'
import gemsound from '/gemSound.mp3'
import minesound from '/bombSound.mp3'
import GemImage from '/gem.png'
import MineImage from '/mine.png'

const Square = ({Mineprop}) => {
    const [Image,setImage] = useState(null);
    const HandleClick = () =>{
        if(Mineprop){
            setImage(MineImage);
            const sound = new Audio(minesound);
            sound.play();
        }else{
            const sound = new Audio(gemsound);
            sound.play();
            setImage(GemImage);
        }
    }
  return (
    <div className='square' onClick={HandleClick}>
        {Image && <img src={Image}/>}
    </div>
  )
}

export default Square