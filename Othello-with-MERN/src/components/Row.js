import React from 'react'
import Piece from './piece'

const Row = () => {
  console.log('row called')
  let peiceNum = ["1", "2", "3", "4", "5", "6", "7", "8"];
  let rowNum = ["1", "2", "3", "4", "5", "6", "7", "8"]
  let rtx = rowNum.map((e1) => (
    <div className="Row">
      {peiceNum.map((e2) => (
        <Piece r={e1} p={e2}/>
      ))}
    </div>
  ))

  return rtx;
}

export default Row