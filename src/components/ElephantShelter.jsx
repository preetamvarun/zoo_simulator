import React from 'react'
import ElephantCard from './ElephantCard';
import { v4 as uuidv4 } from 'uuid';

/* This Elephant Shelter Component renders 5 different elephant card components. */

/* Getting the elephants 1D health array as prop */
const ElephantShelter = ({ elephantsHealth }) => {
  return (
    <div className='rounded-md py-2 flex flex-row justify-evenly'>
      {
        /* Make sure each elephant gets an unique key */
        elephantsHealth.map((eachElephantHealth, index) => <ElephantCard health = {eachElephantHealth} key={uuidv4()} 
        index = {index}/>)
      }
    </div>
  )
}

export default ElephantShelter;