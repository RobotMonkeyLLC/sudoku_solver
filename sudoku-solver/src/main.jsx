import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SudokuProvider, NotesProvier, CheckContext, CheckProvider } from './SudokuContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CheckProvider>
      <NotesProvier>
        <SudokuProvider>
          <App />
        </SudokuProvider>
      </NotesProvier>
    </CheckProvider>
  </React.StrictMode>,
)
