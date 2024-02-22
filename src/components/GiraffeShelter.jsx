import React from 'react';
import GiraffeCard from './GiraffeCard';
import { v4 as uuidv4 } from 'uuid';


const GiraffeShelter = ({ giraffesHealth }) => {
  return (
    <div className='border-2 border-solid border-green-400 m-2 flex flex-row justify-evenly'>
      {
        giraffesHealth.map((eachGiraffeHealth) => <GiraffeCard health = {eachGiraffeHealth}
        key={uuidv4()}/>)
      }
    </div>
  )
}

export default GiraffeShelter;