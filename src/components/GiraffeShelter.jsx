import React from 'react';
import GiraffeCard from './GiraffeCard';

const GiraffeShelter = ({ giraffesHealth }) => {
  return (
    <div className='border-2 border-solid border-green-400 m-2 flex flex-row justify-evenly'>
      {
        giraffesHealth.map((eachGiraffeHealth) => <GiraffeCard health = {eachGiraffeHealth}/>)
      }
    </div>
  )
}

export default GiraffeShelter;