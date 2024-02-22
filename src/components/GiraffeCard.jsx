import React from 'react'

const GiraffeCard = ({health}) => {
  return (
    <div className='border-2 border-solid border-red-500'>

      {/* Giraffe Image Goes In Here */}
      <div>

      </div>

      {/* Contents Of The Card */}
      <div>
        <p> Type : Giraffe </p>
        <p> Health Percentage : {health}%</p>
        <p> Status : </p>
      </div>

    </div>
  )
}

export default GiraffeCard