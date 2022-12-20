import Header from './App/Header'
import React from 'react'
import Web3dEngine from './App/Web3d/Web3dEngine'

function App() {
  return (
    <div className="App">
      <Header />
      <Web3dEngine debug />
    </div>
  )
}

export default App
