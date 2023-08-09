import React from 'react'
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Ratings = ({value,size}) => {
  return (
    <div style={{width:`${size}rem`,height:`${size}rem`}} className='ratingCircle'>
        <CircularProgressbar
        maxValue={10}
        value={value}
        text={Number(value).toFixed(1)}
        background='white'
        styles={buildStyles({
            textColor:'white',
            pathColor:'aqua',
            backgroundColor : 'black',
            textSize:'30px'
        })}
        />
    </div>
  )
}

export default Ratings
