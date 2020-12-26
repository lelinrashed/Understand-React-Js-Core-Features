import React from 'react'
import Game from './components/game'
import './App.css'

const App = () => {
  return(
    <div className='app'>
      <h1>Tic Tac Toe</h1>
      <Game />
    </div>
  )
}

export default App