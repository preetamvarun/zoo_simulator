import React from 'react'
import ElephantCard from './ElephantCard';
import { v4 as uuidv4 } from 'uuid';


const ElephantShelter = ({ elephantsHealth }) => {
  return (
    <div className='rounded-md py-2 flex flex-row justify-evenly'>
      {
        elephantsHealth.map((eachElephantHealth) => <ElephantCard health = {eachElephantHealth} key={uuidv4()}/>)
      }
    </div>
  )
}

export default ElephantShelter;