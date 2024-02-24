import React from 'react';
// import giraffeHealthy from '../Images/giraffeHealthy.jpg';
import GiraffeHealthy from '../Images/GiraffeHealthyNew.svg';
import {useSelector, useDispatch} from 'react-redux';
import { setGiraffeStatus } from '../utils/giraffeStatusSlice';
import { useEffect } from 'react';


/* Get the health of the current giraffe and keep track of current giraffe with the help of index */
const GiraffeCard = ({health, index}) => {

  /* subscribe to the giraffe status slice from the store. */
  const giraffeStatusSlice = useSelector((store) => store.giraffeStatus)

  const dispatch = useDispatch();

  /* Update the status of the current giraffe when the health has changed */
  useEffect(() => {
    dispatch(setGiraffeStatus({health, index}))
  }, [health])

  /* Get the current status of the giraffe from the store */
  const currentGiraffeStatus = giraffeStatusSlice.giraffesStatus[index].status;


  return (
    <div className='font-mono text-sm w-56 shadow-md'>

        {/* Giraffe Image Goes In Here */}
      <div className='overflow-hidden opacity-95 hover:opacity-100 hover:cursor-pointer duration-200 flex flex-row items-center justify-center'>
        <img src={GiraffeHealthy} className = 'scale-150 hover:scale-[170%] duration-200 max-w-full max-h-full w-full h-auto' alt='healthy-giraffe'/> 
      </div>

      {/* Contents Of The Card */}
      <div className='text-white font-bold'>
        {currentGiraffeStatus !== "Dead" && <p> Health : {health}%</p>}
        <p> Status : {currentGiraffeStatus}</p>
      </div>

    </div>
  )
}

export default GiraffeCard