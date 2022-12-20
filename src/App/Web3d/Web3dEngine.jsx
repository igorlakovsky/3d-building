import { Leva, button, folder, useControls } from 'leva'
import React, { useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { Factory } from './Factory'
import { Plane } from '@react-three/drei'
import PropTypes from 'prop-types'
import Web3dDebug from './Web3dDebug'
import Web3dMotionCamera from './Web3dMotionCamera'
import Web3dPointLight from './Web3dPointLight'

function Web3dEngine({ debug = false }) {
  const [activeWorkshop, setActiveWorkshop] = useState('general')

  const [{ gizmo, grid, stats, light }, setDebug] = useControls(() => ({
    camera_general: button(() => {
      setActiveWorkshop('general')
    }),
    camera_workshop_1: button(() => {
      setActiveWorkshop('workshop_1')
    }),
    debug: folder({
      gizmo: debug,
      grid: debug,
      stats: debug,
      light: debug,
    }),
  }))

  useEffect(() => {
    setDebug({ gizmo: debug, grid: debug, stats: debug, light: debug })
  }, [debug])

  return (
    <div className="web3d">
      <Leva
        titleBar={{ drag: false, filter: false }}
        hideCopyButton
        hidden={!debug}
      />
      <Canvas shadows>
        <Web3dDebug gizmo={gizmo} grid={grid} stats={stats} />
        <Web3dMotionCamera
          initial="general"
          animate={activeWorkshop}
          variants={{
            general: {
              x: -39.73,
              y: 53.59,
              z: -56.25,
              rotateX: -2.32,
              rotateY: -0.54,
              rotateZ: -2.63,
            },
            workshop_1: {
              x: 1.25,
              y: 45.44,
              z: -9.37,
              rotateX: -1.57,
              rotateY: 0,
              rotateZ: -1.57,
            },
          }}
          transition={{ duration: 0.3 }}
        />
        {/* <OrbitControls enableZoom={true} ref={cameraControlRef} /> */}

        <ambientLight intensity={0.1} />
        <Web3dPointLight
          props={{ position: [-30, 40, -40], intensity: 1 }}
          helper={light}
        />

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

Web3dEngine.propTypes = {
  debug: PropTypes.bool,
}

export default Web3dEngine
