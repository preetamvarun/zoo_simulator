import React, { useEffect } from 'react';
import MonkeyHealthy from '../Images/MonkeyHealthy.svg';
import {useSelector, useDispatch} from 'react-redux';
import { setMonkeyStatus } from '../utils/monkeyStatusSlice';
import '../styles/AnimateFood.css';
import Food from '../../src/Images/Food.svg';
import stick from '../Images/stick-1.svg';
import TreeTrunk from '../Images/Status.svg';

/* Get the health of the current monkey and keep track of current monkey with the help of index */
const MonkeyCard = ({health, index}) => {

  /* subscribe to the monkey status slice from the store */
  const monkeyStatusSlice = useSelector((store) => store.monkeyStatus)

  const animalsFeedStatus = useSelector((store) => store.animalsHealth).areAnimalsFed

  const dispatch = useDispatch();

  /* Update the status of the current monkey when the health has changed */
  useEffect(() => {
    dispatch(setMonkeyStatus({health, index}))
  }, [health])

  /* Get the current status of the monkey */
  const currentMonkeyStatus = monkeyStatusSlice.monkeysStatus[index].status;

  return (
    <div className='relative overflow-hidden w-54 m-1'>

      <img src= {stick} className='absolute z-50 -top-[50px] '/> 


      {/* This div contains the monkey image */}
      <div className='overflow-hidden relative'>
        <img src={MonkeyHealthy} className = 'scale-110 max-w-full max-h-full w-full h-auto' alt='healthy-monkey'/> 
      </div>

      {/* contents of the card */}
      <div className='text-[#FFD700] tracking-widest text-sm mt-1 font-semibold text-center overflow-hidden' 
      style={{
        backgroundImage : `url(${TreeTrunk})`,
        backgroundPosition : 'center'
      }}>
        {/* Display health percentage only if the monkey is alive */}
        {currentMonkeyStatus !== "DEAD" && <p> HEALTH : {health}%</p> }
        <p> STATUS : {currentMonkeyStatus}</p>
      </div>

      <img src= {Food} className={`absolute top-0 left-[1/2] w-10/12 translate-y-1/2 -translate-x-2/3
      ${animalsFeedStatus && currentMonkeyStatus !== "DEAD" && 'animate-feed'}`}/>

    </div>
  )
}

export default MonkeyCard;