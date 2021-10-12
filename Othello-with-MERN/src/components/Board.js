import React from 'react';
import Row from './row';
import { drop } from '../gameplay/drop';

const Board = (id) => {
  console.log('board called')
  return (
    <div className="Board">
      <Row />
    </div>
  )
}

export default Board