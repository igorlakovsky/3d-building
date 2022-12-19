import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Stats,
} from '@react-three/drei'
import { Leva, button, folder, useControls } from 'leva'
import React, { useEffect, useRef } from 'react'

// eslint-disable-next-line no-unused-vars
import Building from './Building'
import { Canvas } from '@react-three/fiber'
// eslint-disable-next-line no-unused-vars
import { Factory } from './Factory'
import PointLightW3E from './PointLightW3E'
import PropTypes from 'prop-types'

function W3Engine({ debug = false }) {
  const cameraControlRef = useRef()

  const [{ gizmo, grid, stats, light }, setDebug] = useControls(() => ({
    debug: folder({
      gizmo: debug,
      grid: debug,
      stats: debug,
      light: debug,
    }),
    reset_camera_position: button(() => {
      cameraControlRef.current.reset()
    }),
  }))

  useEffect(() => {
    setDebug({ gizmo: debug, grid: debug, stats: debug, light: debug })
  }, [debug])

  return (
    <div className="w3-engine">
      <Leva
        titleBar={{ drag: false, filter: false }}
        hideCopyButton
        hidden={!debug}
      />

      <Canvas shadows>
        <PerspectiveCamera position={[-50, 50, -50]} makeDefault />
        <OrbitControls enableZoom={true} ref={cameraControlRef} />

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
        {/* <PointLightW3E
          props={{ position: [0, 50, 0], intensity: 1 }}
          helper={light}
        /> */}
        <PointLightW3E
          props={{ position: [-30, 40, -40], intensity: 1 }}
          helper={light}
        />

        {/* <Building position={[-20, 0, 5]} /> */}
        <Plane
          args={[40, 80]}
          position={[0, -0.1, 0]}
          rotation={[-3.14 / 2, 0, 0]}
          receiveShadow
        >
          <meshStandardMaterial color={'white'} />
        </Plane>
        <Factory scale={[0.25, 0.25, 0.25]} rotation={[0, 3.14, 0]} />
      </Canvas>
    </div>
  )
}

W3Engine.propTypes = {
  debug: PropTypes.bool,
}

export default W3Engine
