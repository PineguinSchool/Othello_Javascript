import React from 'react';
import { drop } from '../gameplay/drop';

const Piece = (r) => {
  console.log('peice called')
  return (
    <div className="Piece" id={"p" + r.r + r.p}>
      <button onClick={drop}/>
    </div>
  )
}

export default Piece
