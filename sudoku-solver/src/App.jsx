import { useContext, useState } from 'react'
import Header from './components/Header.jsx'
import Board from './components/Board.jsx'
import Tiles from './components/Tiles.jsx'
import SudokuContext from './SudokuContext.jsx'
import './App.css'

function App() {
  const { puzzle ,selected, setSelected, board, boardActions } = useContext(SudokuContext)

  return (
    <div className='d-flex flex-wrap justify-content-center'>
      <Header boardActions={boardActions} puzzle={puzzle}></Header>
      <Tiles boardActions={boardActions} selected={selected} setSelected={setSelected}></Tiles>
      <Board board={board}></Board>
    </div>
  )
}

export default App
