import React, { useEffect } from 'react';
import elephantHealthy from '../Images/elephantHealthy.jpg';

import { useState } from 'react';

const ElephantCard = ({health}) => {

  const [critical, setCritical] = useState(false);
  const [status, setStatus]  = useState('healthy');

  useEffect(() => {
    if(health === 100) {
      setStatus("healthy");
    }
    else if(health < 70 && !critical){
      setStatus("can't walk!");
      setCritical(true);
    }
    else if(health < 70 && critical){
      setStatus("dead");
    }
    else if(health > 70 && critical){
      setStatus("healthy");
      setCritical(false);
    }
  },[health, critical]);


  return (
    <div className='shadow-lg w-[200px]'>

      {/* Elephant Image Goes In Here */}
      <div className='border-2 border-solid border-yellow-400 m-1 h-[170px] flex flex-row items-center justify-center'>
        <img src={elephantHealthy} className = 'max-w-full max-h-full w-full h-auto' alt='healthy-elephant'/> 
      </div>

      {/* Contents Of The Card */}
      <div className='border-2 border-solid border-violet-400 m-1'>
        <p> Type : Elephant </p>
        <p> Health Percentage : {health}%</p>
        <p> Status : {status} </p>
      </div>

    </div>
  )
}

export default ElephantCard;