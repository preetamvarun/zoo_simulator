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

  const animalsFeedStatus = useSelector((store) => store.animalsHealth)?.areAnimalsFed

  /* Get the dispatched function to make changes to a particular slices in the store */
  const dispatch = useDispatch();

  /* Update the status of the current monkey when the health has changed */
  useEffect(() => {
    dispatch(setMonkeyStatus({health, index}))
  }, [health])

  /* Get the current status of the monkey */
  const currentMonkeyStatus = monkeyStatusSlice?.monkeysStatus[index]?.status;

  return (

    /* If there are any overflows to this div just make sure it is hidden */
    <div className='relative overflow-hidden m-1 md:w-46 lg:w-52'>

      {/* Displaying the stick image to which monkey hangs */}
      <img src= {stick} className='absolute -top-4 z-50 sm:-top-6 lg:-top-[50px] md:-top-[36px]'/> 


      {/* This div contains the monkey image */}
      <div className='overflow-hidden relative'>
        <img src={MonkeyHealthy} className = 'scale-125 max-w-full max-h-full w-full h-auto' alt='healthy-monkey'/> 
      </div>

      {/* contents of the card */}
      <div className='text-white rounded-xl text-[8px] mt-2 sm:text-[10px] sm:tracking-wide md:text-sm sm:mt-1 sm:font-semibold text-left px-5 py-1 overflow-hidden' 
      style={{
        backgroundImage : `url(${TreeTrunk})`,
        backgroundPosition : 'center'
      }}>

        {/* Display health percentage only if the monkey is alive */}
        {currentMonkeyStatus !== "DEAD" && <p> HEALTH : {health}%</p> }
        <p> STATUS : {currentMonkeyStatus}</p>
      </div>

      {/* Animate the food image when user clicks the feed button. Only Feed if that particular 
      monkey is alive */}
      <img src= {Food} className={`absolute top-0 left-[1/2] w-10/12 translate-y-1/2 -translate-x-2/3
      ${animalsFeedStatus && currentMonkeyStatus !== "DEAD" && 'animate-feed'}`}/>

    </div>
  )
}

export default MonkeyCard;