import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import Header from './components/Header';
import { autoFlip } from './gameplay/autoFlip';
import { changePlayer } from './gameplay/changePlayer';
import { colorSwitch } from './gameplay/colorSwitch';
import { drop } from './gameplay/drop';
import { varialbes } from './gameplay/variables';
import './styles.css';



const jsx = (
  <div>
    <Header />
    <Board />
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'));