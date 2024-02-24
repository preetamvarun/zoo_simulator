import React, { useEffect } from 'react';
// import elephantHealthy from '../Images/elephantHealthy.jpg';
import ElephantHealthy from '../Images/ElephantHealthy.svg';
import {useDispatch, useSelector} from 'react-redux';
import { setElephantStatus } from '../utils/elephantStatusSlice';
import Food from '../Images/Food.svg';
import '../styles/AnimateFood.css';
import TreeTrunk from '../Images/Status.svg';

/* Get the health of the current elephant and keep track of current elephant with the help of index */
const ElephantCard = ({health, index}) => {

  /* subscribe to the elephant status slice from the store. */
  const elephantStatusSlice = useSelector((store) => store.elephantStatus)

  const animalsFeedStatus = useSelector((store) => store.animalsHealth).areAnimalsFed

  const dispatch = useDispatch()

  /* Update the status of the current elephant when the health has changed */
  useEffect(() => {
    dispatch(setElephantStatus({health, index}))
  }, [health])

  /* Get the current status of the elephant from the store */
  const currentElephantStatus = elephantStatusSlice.elephantsStatus[index].status;

  return (
    <div className='relative text-center w-56 overflow-hidden'>

      {/* Elephant Image Goes In Here */}
      <div className='overflow-hidden'>
        <img src={ElephantHealthy} className = 'scale-110 max-w-full max-h-full w-full h-auto' alt='healthy-elephant'/> 
      </div>

      {/* Contents Of The Card */}
      <div className='text-[#FFD700] tracking-wider text-sm mt-1 font-semibold text-center overflow-hidden' 
      style={{
        backgroundImage : `url(${TreeTrunk})`,
        backgroundPosition : 'center'
      }}>
        {currentElephantStatus !== "DEAD" && <p> HEALTH : {health}%</p>}
        <p> STATUS : {currentElephantStatus}</p>
      </div>

      <img src= {Food} className={`absolute top-0 left-[1/2] w-10/12 translate-y-1/2 -translate-x-2/3
      ${animalsFeedStatus && currentElephantStatus !== "DEAD" && 'animate-feed'}`}/>

    </div>
  )
}

export default ElephantCard;