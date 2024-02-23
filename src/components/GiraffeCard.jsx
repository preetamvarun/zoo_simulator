import React from 'react';
import giraffeHealthy from '../Images/giraffeHealthy.jpg';
import {useSelector, useDispatch} from 'react-redux';
import { setGiraffeStatus } from '../utils/giraffeStatusSlice';
import { useEffect } from 'react';


const GiraffeCard = ({health, index}) => {

  const giraffeStatusSlice = useSelector((store) => store.giraffeStatus)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGiraffeStatus({health, index}))
  }, [health])



  return (
    <div className='shadow-lg w-[200px]'>

        {/* Giraffe Image Goes In Here */}
      <div className='border-2 border-solid border-yellow-400 m-1 h-[170px] flex flex-row items-center justify-center'>
        <img src={giraffeHealthy} className = 'max-w-full max-h-full w-full h-auto' alt='healthy-giraffe'/> 
      </div>

      {/* Contents Of The Card */}
      <div className='border-2 border-solid border-violet-400 m-1'>
        <p> Health : {health}%</p>
        <p> Status : {giraffeStatusSlice.giraffesStatus[index].status}</p>
      </div>

    </div>
  )
}

export default GiraffeCard