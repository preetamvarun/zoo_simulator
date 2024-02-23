import React from 'react'
import MonkeyCard from './MonkeyCard';
import { v4 as uuidv4 } from 'uuid';


/* This Monkey Shelter Component renders 5 different monkeys */
const MonkeyShelter = ({ monkeysHealth }) => {
  return (
    <div className='rounded-md py-2 flex flex-row justify-evenly'>
      {
        /* Make sure each monkey gets an unique key */
        monkeysHealth.map((eachMonkeyHealth, index) => <MonkeyCard health = {eachMonkeyHealth}
        key={uuidv4()} index = {index}/>)
      }
    </div>
  )
}

export default MonkeyShelter;