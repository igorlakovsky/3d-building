import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  PerspectiveCamera,
  Stats,
} from '@react-three/drei'
import { Leva, button, folder, useControls } from 'leva'
import React, { useRef } from 'react'

import Building from './Building'
import { Canvas } from '@react-three/fiber'
import PointLightX from './PointLightX'

function App() {
  const cameraRef = useRef()

  const { gizmo, grid, stats, light } = useControls({
    debug: folder({
      gizmo: true,
      grid: true,
      stats: true,
      light: true,
    }),
    reset_camera_position: button(() => {
      cameraRef.current.position.set(-60, 80, -60)
    }),
  })

  return (
    <div className="App">
      <Leva titleBar={{ drag: false, filter: false }} hideCopyButton />
      <Canvas>
        <PerspectiveCamera
          ref={cameraRef}
          position={[-60, 80, -60]}
          makeDefault
        />
        <OrbitControls enableZoom={true} />

        {gizmo ? (
          <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
            <GizmoViewport
              axisColors={['red', 'green', 'blue']}
              labelColor="black"
              axisHeadScale={0.7}
            />
          </GizmoHelper>
        ) : null}

        {grid ? (
          <>
            <gridHelper args={[80, 40]} />
            <axesHelper args={[5]} />
          </>
        ) : null}

        {stats ? <Stats className="three_stats" /> : null}

        {/* <ambientLight intensity={0.2} /> */}
        <PointLightX props={{ position: [30, 50, 30] }} helper={light} />
        <PointLightX props={{ position: [-40, 10, -40] }} helper={light} />

        <Building position={[-14, 0, 4]} />
      </Canvas>
    </div>
  )
}

export default App
