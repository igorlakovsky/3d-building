import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  PerspectiveCamera,
  Stats,
} from '@react-three/drei'
import { Leva, useControls } from 'leva'

import Building from './Building'
import { Canvas } from '@react-three/fiber'
import React from 'react'

function App() {
  const { debug } = useControls({ debug: true })

  return (
    <div className="App">
      <Leva titleBar={{ drag: false, filter: false }} hideCopyButton />
      <Canvas>
        <PerspectiveCamera position={[30, 30, 30]} makeDefault />
        <OrbitControls enableZoom={true} />

        {debug ? (
          <>
            <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
              <GizmoViewport
                axisColors={['red', 'green', 'blue']}
                labelColor="black"
                axisHeadScale={0.7}
              />
            </GizmoHelper>
            <gridHelper args={[40, 20]} />
            <axesHelper args={[5]} />
            <Stats />
          </>
        ) : null}

        <ambientLight intensity={0.2} />
        <pointLight position={[10, 15, 20]} />
        <pointLight position={[-10, 15, -20]} />

        <Building position={[-14, 0, 4]} />
      </Canvas>
    </div>
  )
}

export default App
