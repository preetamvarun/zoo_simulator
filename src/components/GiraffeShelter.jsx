import React from 'react';
import GiraffeCard from './GiraffeCard';
import { v4 as uuidv4 } from 'uuid';

/* This Giraffe Shelter Component renders 5 different monkeys */
const GiraffeShelter = ({ giraffesHealth }) => {
  return (
    <div className='rounded-md py-2 flex flex-row justify-evenly'>
      {
        /* Make sure each giraffe gets an unique key */
        giraffesHealth.map((eachGiraffeHealth, index) => <GiraffeCard health = {eachGiraffeHealth}
        index = {index}
        key={uuidv4()}/>)
      }
    </div>
  )
}

export default GiraffeShelter;