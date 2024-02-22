import React from 'react'

const ElephantCard = ({health}) => {
  return (
    <div className='border-2 border-solid border-orange-500'>

      {/* Elephant Image Goes In Here */}
      <div>

      </div>

      {/* Contents Of The Card */}
      <div>
        <p> Type : Elephant </p>
        <p> Health Percentage : {health}%</p>
        <p> Status : </p>
      </div>

    </div>
  )
}

export default ElephantCard;