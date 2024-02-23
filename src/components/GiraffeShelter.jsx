import React from 'react';
import GiraffeCard from './GiraffeCard';
import { v4 as uuidv4 } from 'uuid';
import {useSelector, useDispatch} from 'react-redux';



const GiraffeShelter = ({ giraffesHealth }) => {
  return (
    <div className='rounded-md py-2 flex flex-row justify-evenly'>
      {
        giraffesHealth.map((eachGiraffeHealth, index) => <GiraffeCard health = {eachGiraffeHealth}
        index = {index}
        key={uuidv4()}/>)
      }
    </div>
  )
}

export default GiraffeShelter;