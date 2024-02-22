import React from 'react'
import MonkeyCard from './MonkeyCard';

const MonkeyShelter = ({ monkeysHealth }) => {
  return (
    <div className='border-2 border-solid border-blue-600 m-2 flex flex-row justify-evenly'>
      {
        monkeysHealth.map((eachMonkeyHealth) => <MonkeyCard health = {eachMonkeyHealth}/>)
      }
    </div>
  )
}

export default MonkeyShelter;