import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SudokuProvider, NotesProvier } from './SudokuContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotesProvier>
      <SudokuProvider>
        <App />
      </SudokuProvider>
    </NotesProvier>
  </React.StrictMode>,
)
