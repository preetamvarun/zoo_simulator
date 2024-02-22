import React from 'react'
import ElephantCard from './ElephantCard';
import { v4 as uuidv4 } from 'uuid';


const ElephantShelter = ({ elephantsHealth }) => {
  return (
    <div className='rounded-md py-2 flex flex-row justify-evenly'>
      {
        elephantsHealth.map((eachElephantHealth, index) => <ElephantCard health = {eachElephantHealth} key={uuidv4()} 
        index = {index}/>)
      }
    </div>
  )
}

export default ElephantShelter;