import React from 'react';
import GiraffeHealthy from '../Images/GiraffeHealthyNew.svg';
import {useSelector, useDispatch} from 'react-redux';
import { setGiraffeStatus } from '../utils/giraffeStatusSlice';
import { useEffect } from 'react';
import Food from '../Images/Food.svg';
import '../styles/AnimateFood.css';
import TreeTrunk from '../Images/Status.svg';


/* Get the health of the current giraffe and keep track of current giraffe with the help of index */
const GiraffeCard = ({health, index}) => {

  /* subscribe to the giraffe status slice from the store. */
  const giraffeStatusSlice = useSelector((store) => store.giraffeStatus)

  const animalsFeedStatus = useSelector((store) => store.animalsHealth).areAnimalsFed

  /* Get the dispatched function to make changes to a particular slices in the store */
  const dispatch = useDispatch();

  /* Update the status of the current giraffe when the health has changed */
  useEffect(() => {
    dispatch(setGiraffeStatus({health, index}))
  }, [health])

  /* Get the current status of the giraffe from the store */
  const currentGiraffeStatus = giraffeStatusSlice.giraffesStatus[index].status;

  /* If animals are fed then animate the food */
  return (
    <div className='relative overflow-hidden text-center m-1 lg:w-46 border-2 border-green-500 border-solid'>

        {/* Giraffe Image Goes In Here */}
      <div className='overflow-hidden '>
        <img src={GiraffeHealthy} className = 'scale-150 max-w-full max-h-full w-full h-auto' alt='healthy-giraffe'/> 
      </div>

      {/* Contents Of The Card */}
      <div className='text-white rounded-xl text-[8px] mt-2 sm:text-[10px] sm:tracking-wide md:text-sm sm:mt-1 sm:font-semibold text-left px-5 py-1 overflow-hidden' style={{
        backgroundImage : `url(${TreeTrunk})`,
        backgroundPosition : 'center'
      }}>
        {/* Display health percentage only if the giraffe is alive */}
        {currentGiraffeStatus !== "DEAD" && <p> HEALTH : {health}%</p>}
        <p> STATUS : {currentGiraffeStatus}</p>
      </div>

      {/* Animate the food image when user clicks the feed button. Only Feed if that particular 
      giraffe is alive */}
      <img src= {Food} className={`absolute top-0 left-[1/2] w-10/12 translate-y-1/2 -translate-x-2/3
      ${animalsFeedStatus && currentGiraffeStatus !== "DEAD" && 'animate-feed'}`}/>


    </div>


  )
}

export default GiraffeCard