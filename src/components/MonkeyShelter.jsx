import React from 'react'
import MonkeyCard from './MonkeyCard';
import { v4 as uuidv4 } from 'uuid';


const MonkeyShelter = ({ monkeysHealth }) => {
  return (
    <div className='border-2 border-solid border-blue-600 m-2 flex flex-row justify-evenly'>
      {
        monkeysHealth.map((eachMonkeyHealth) => <MonkeyCard health = {eachMonkeyHealth}
        key={uuidv4()}/>)
      }
    </div>
  )
}

export default MonkeyShelter;