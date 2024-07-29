import { useState } from 'react'
import Header from './components/Header.jsx'
import Board from './components/Board.jsx'
import Tiles from './components/Tiles.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='d-flex flex-wrap justify-content-center'>
      <Header></Header>
      <Tiles></Tiles>
      <Board></Board>
    </div>
  )
}

export default App
