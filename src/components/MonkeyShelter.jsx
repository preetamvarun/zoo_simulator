import React from 'react'
import MonkeyCard from './MonkeyCard';
import { v4 as uuidv4 } from 'uuid';


/* This Monkey Shelter Component renders 5 different monkey card components in horizontal direction.
The monkey shelter component is displayed as flex in row direction. */

/* Getting the Monkeys 1D health array as prop */
const MonkeyShelter = ({ monkeysHealth }) => {
  return (
    <div className='rounded-md py-2 sm:flex sm:flex-row sm:justify-evenly flex'>
      {
        /* Make sure each monkey gets an unique key.*/
        monkeysHealth.map((eachMonkeyHealth, index) => <MonkeyCard health = {eachMonkeyHealth}
        key={uuidv4()} index = {index}/>)
      }
    </div>
  )
}

export default MonkeyShelter;