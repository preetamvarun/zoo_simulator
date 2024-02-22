import React from 'react'


const MonkeyCard = ({health}) => {
  return (
    <div className='border-2 border-solid border-yellow-500'>

      {/* This div contains the monkey image */}
      <div>

      </div>

      {/* contents of the card */}
      <div>
        <p> Type : Monkey </p>
        <p> Health Percentage : {health}%</p>
        <p> Status : </p>
        
      </div>

    </div>
  )
}

export default MonkeyCard;