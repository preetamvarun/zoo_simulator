import React from 'react'
import ElephantCard from './ElephantCard';

const ElephantShelter = ({ elephantsHealth }) => {
  console.log(elephantsHealth);
  return (
    <div className='border-2 border-solid border-purple-600 m-2 flex flex-row justify-evenly'>
      {
        elephantsHealth.map((eachElephantHealth) => <ElephantCard health = {eachElephantHealth}/>)
      }
    </div>
  )
}

export default ElephantShelter;