import Header from './App/Header'
import React from 'react'
import View3d from './App/Factory3d/View3d'

function App() {
  return (
    <div className="App">
      <Header />
      <View3d debug={true} />
    </div>
  )
}

export default App
