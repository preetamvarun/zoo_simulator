import React from 'react';
import monkeyHealthy from '../Images/monkeyHealthy.jpg';

const MonkeyCard = ({health}) => {
  return (
    <div className='border-2 border-solid border-yellow-500 w-[200px]'>

      {/* This div contains the monkey image */}
      <div className='border-2 border-solid border-yellow-400 m-1 h-[170px] flex flex-row items-center justify-center'>
        <img src={monkeyHealthy} className = 'max-w-full max-h-full w-full h-auto' alt='healthy-monkey'/> 
      </div>

      {/* contents of the card */}
      <div className='border-2 border-solid border-violet-400 m-1'>
        <p> Type : Monkey </p>
        <p> Health Percentage : {health}%</p>
        <p> Status : </p>
        
      </div>

    </div>
  )
}

export default MonkeyCard;