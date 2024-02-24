import React, { useEffect } from 'react';
// import monkeyHealthy from '../Images/monkeyHealthy.jpg';
import MonkeyHealthy from '../Images/MonkeyHealthy.svg';
import {useSelector, useDispatch} from 'react-redux';
import { setMonkeyStatus } from '../utils/monkeyStatusSlice';
import '../styles/AnimateFood.css';
import Food from '../../src/Images/Food.svg';

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
    <div className='relative overflow-hidden font-mono text-sm w-56 border-t-4 border-green-700 border-solid'>

      {/* This div contains the monkey image */}
      <div className='overflow-hidden opacity-95 hover:opacity-100 hover:cursor-pointer duration-200  flex flex-row items-center justify-center'>
        <img src={MonkeyHealthy} className = 'scale-125 hover:scale-150 duration-200 max-w-full max-h-full w-full h-auto' alt='healthy-monkey'/> 
      </div>

      {/* contents of the card */}
      <div className='text-white font-bold'>
        {/* Display health percentage only if the monkey is alive */}
        {currentMonkeyStatus !== "Dead" && <p> Health : {health}%</p> }
        <p> Status : {currentMonkeyStatus}</p>
      </div>

      <img src= {Food} className={`absolute top-0 left-[1/2] w-10/12 translate-y-1/2 -translate-x-2/3
      ${animalsFeedStatus && currentMonkeyStatus !== "Dead" && 'animate-feed'}`}/>

    </div>
  )
}

export default MonkeyCard;