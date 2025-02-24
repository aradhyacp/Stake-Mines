import React, { useState } from 'react'
import './Square.css'
import gemsound from '/gemSound.mp3'
import minesound from '/bombSound.mp3'
import GemImage from '/gem.png'
import MineImage from '/mine.png'

const Square = ({Mineprop,onClick, BetPlaced}) => {
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
        if(onClick){
            onClick();
        }
    }
  return (
    <button className='square' onClick={HandleClick} disabled={!BetPlaced}>
        {Image && <img src={Image}/>}
    </button>
  )
}

export default Square