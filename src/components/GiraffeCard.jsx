import React from 'react';
// import giraffeHealthy from '../Images/giraffeHealthy.jpg';
import GiraffeHealthy from '../Images/GiraffeHealthyNew.svg';
import {useSelector, useDispatch} from 'react-redux';
import { setGiraffeStatus } from '../utils/giraffeStatusSlice';
import { useEffect } from 'react';
import Food from '../Images/Food.svg';
import '../styles/AnimateFood.css';


/* Get the health of the current giraffe and keep track of current giraffe with the help of index */
const GiraffeCard = ({health, index}) => {

  /* subscribe to the giraffe status slice from the store. */
  const giraffeStatusSlice = useSelector((store) => store.giraffeStatus)

  const animalsFeedStatus = useSelector((store) => store.animalsHealth).areAnimalsFed

  const dispatch = useDispatch();

  /* Update the status of the current giraffe when the health has changed */
  useEffect(() => {
    dispatch(setGiraffeStatus({health, index}))
  }, [health])

  /* Get the current status of the giraffe from the store */
  const currentGiraffeStatus = giraffeStatusSlice.giraffesStatus[index].status;

  /* If animals are fed then animate the food */



  return (
    <div className='relative w-56 overflow-hidden text-center'>

        {/* Giraffe Image Goes In Here */}
      <div className='overflow-hidden opacity-95 hover:opacity-100 hover:cursor-pointer duration-200'>
        <img src={GiraffeHealthy} className = 'scale-150 hover:scale-[170%] duration-200 max-w-full max-h-full w-full h-auto' alt='healthy-giraffe'/> 
      </div>

      {/* Contents Of The Card */}
      <div className='text-white font-bold'>
        {currentGiraffeStatus !== "DEAD" && <p> Health : {health}%</p>}
        <p> Status : {currentGiraffeStatus}</p>
      </div>

      <img src= {Food} className={`absolute top-0 left-[1/2] w-10/12 translate-y-1/2 -translate-x-2/3
      ${animalsFeedStatus && currentGiraffeStatus !== "DEAD" && 'animate-feed'}`}/>


    </div>


  )
}

export default GiraffeCard