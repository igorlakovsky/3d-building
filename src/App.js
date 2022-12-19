import Header from './App/Header'
import React from 'react'
import W3Engine from './App/W3Engine'

function App() {
  return (
    <div className="App">
      <Header />
      <W3Engine debug={false} />
    </div>
  )
}

export default App
