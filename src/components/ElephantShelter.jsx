import React from 'react'
import ElephantCard from './ElephantCard';
import { v4 as uuidv4 } from 'uuid';


const ElephantShelter = ({ elephantsHealth }) => {
  return (
    <div className='border-2 border-solid border-purple-600 m-2 flex flex-row justify-evenly'>
      {
        elephantsHealth.map((eachElephantHealth) => <ElephantCard health = {eachElephantHealth} key={uuidv4()}/>)
      }
    </div>
  )
}

export default ElephantShelter;