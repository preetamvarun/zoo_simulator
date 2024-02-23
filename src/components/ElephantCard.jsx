import React, { useEffect } from 'react';
import elephantHealthy from '../Images/elephantHealthy.jpg';
import {useDispatch, useSelector} from 'react-redux';
import { setElephantStatus } from '../utils/elephantStatusSlice';

/* Get the health of the current elephant and keep track of current elephant with the help of index */
const ElephantCard = ({health, index}) => {

  /* subscribe to the elephant status slice from the store. */
  const elephantStatusSlice = useSelector((store) => store.elephantStatus)

  const dispatch = useDispatch()

  /* Update the status of the current elephant when the health has changed */
  useEffect(() => {
    dispatch(setElephantStatus({health, index}))
  }, [health])

  /* Get the current status of the elephant from the store */
  const currentElephantStatus = elephantStatusSlice.elephantsStatus[index].status;

  return (
    <div className='shadow-xl w-[200px] font-mono text-md'>

      {/* Elephant Image Goes In Here */}
      <div className='overflow-hidden opacity-90 hover:opacity-100 hover:cursor-pointer duration-200 border-2 border-solid border-yellow-400 m-1 h-[170px] flex flex-row items-center justify-center'>
        <img src={elephantHealthy} className = 'hover:scale-105 duration-200 max-w-full max-h-full w-full h-auto' alt='healthy-elephant'/> 
      </div>

      {/* Contents Of The Card */}
      <div className='border-2 border-solid border-violet-400 m-1'>
        {currentElephantStatus !== "Dead" && <p> Health : {health}%</p>}
        <p> Status : {currentElephantStatus}</p>
      </div>

    </div>
  )
}

export default ElephantCard;