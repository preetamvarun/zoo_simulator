import React, { useEffect } from 'react';
import elephantHealthy from '../Images/elephantHealthy.jpg';

import {useDispatch, useSelector} from 'react-redux';

import { setElephantStatus } from '../utils/elephantStatusSlice';

const ElephantCard = ({health, index}) => {

  const elephantStatusSlice = useSelector((store) => store.elephantStatus)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setElephantStatus({health, index}))
  }, [health])

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
        <p> Status : {elephantStatusSlice.elephantsStatus[index].status}</p>
      </div>

    </div>
  )
}

export default ElephantCard;