import React, { useEffect } from 'react';
import monkeyHealthy from '../Images/monkeyHealthy.jpg';
import {useSelector, useDispatch} from 'react-redux';
import { setMonkeyStatus } from '../utils/monkeyStatusSlice';

/* Get the health of the current monkey and keep track of current monkey with the help of index */
const MonkeyCard = ({health, index}) => {

  /* subscribe to the monkey status slice from the store */
  const monkeyStatusSlice = useSelector((store) => store.monkeyStatus)

  const dispatch = useDispatch();

  /* Update the status of the current monkey when the health has changed */
  useEffect(() => {
    dispatch(setMonkeyStatus({health, index}))
  }, [health])

  /* Get the current status of the monkey */
  const currentMonkeyStatus = monkeyStatusSlice.monkeysStatus[index].status;

  return (
    <div className='shadow-lg w-[200px]'>

      {/* This div contains the monkey image */}
      <div className='border-2 border-solid border-yellow-400 m-1 h-[170px] flex flex-row items-center justify-center'>
        <img src={monkeyHealthy} className = 'max-w-full max-h-full w-full h-auto' alt='healthy-monkey'/> 
      </div>

      {/* contents of the card */}
      <div className='border-2 border-solid border-violet-400 m-1'>
        {/* Display health percentage only if the monkey is alive */}
        {currentMonkeyStatus !== "Dead" && <p> Health : {health}%</p> }
        <p> Status : {currentMonkeyStatus}</p>
      </div>

    </div>
  )
}

export default MonkeyCard;