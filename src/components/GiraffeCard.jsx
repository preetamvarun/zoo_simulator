import React from 'react';
import giraffeHealthy from '../Images/giraffeHealthy.jpg';



const GiraffeCard = ({health}) => {
  return (
    <div className='border-2 border-solid border-red-500 w-[200px]'>

        {/* Giraffe Image Goes In Here */}
      <div className='border-2 border-solid border-yellow-400 m-1 h-[170px] flex flex-row items-center justify-center'>
        <img src={giraffeHealthy} className = 'max-w-full max-h-full w-full h-auto' alt='healthy-giraffe'/> 
      </div>

      {/* Contents Of The Card */}
      <div className='border-2 border-solid border-violet-400 m-1'>
        <p> Type : Giraffe </p>
        <p> Health Percentage : {health}%</p>
        <p> Status : </p>
      </div>

    </div>
  )
}

export default GiraffeCard