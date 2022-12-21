import { Leva, button, folder, useControls } from 'leva'
import React, { useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { Factory } from './Factory'
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
    camera_workshop_2: button(() => {
      setActiveWorkshop('workshop_2')
    }),
    camera_workshop_3: button(() => {
      setActiveWorkshop('workshop_3')
    }),
    camera_workshop_4: button(() => {
      setActiveWorkshop('workshop_4')
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
              x: -40,
              y: 53,
              z: -56,
              rotateX: -2.32,
              rotateY: -0.54,
              rotateZ: -2.63,
            },
            workshop_1: {
              x: 1,
              y: 45,
              z: -10,
              rotateX: -Math.PI / 2,
              rotateY: 0,
              rotateZ: -Math.PI / 2,
            },
            workshop_2: {
              x: -4,
              y: 30,
              z: 24,
              rotateX: -Math.PI / 2,
              rotateY: 0,
              rotateZ: -Math.PI / 2,
            },
            workshop_3: {
              x: 8,
              y: 30,
              z: -7,
              rotateX: -Math.PI / 2,
              rotateY: 0,
              rotateZ: -Math.PI / 2,
            },
            workshop_4: {
              x: 6,
              y: 30,
              z: 24,
              rotateX: -Math.PI / 2,
              rotateY: 0,
              rotateZ: -Math.PI / 2,
            },
          }}
          transition={{ duration: 0.3 }}
        >
          <Web3dPointLight
            props={{ position: [0, 0, 0], intensity: 1 }}
            helper={false}
          />
        </Web3dMotionCamera>
        {/* <OrbitControls enableZoom={true} ref={cameraControlRef} /> */}

        {/* <ambientLight intensity={0.0} /> */}

        <Factory
          props={{ scale: [0.25, 0.25, 0.25], rotation: [0, 3.14, 0] }}
          activeWorkshop={activeWorkshop}
          setActiveWorkshop={setActiveWorkshop}
        />
      </Canvas>
    </div>
  )
}

Web3dEngine.propTypes = {
  debug: PropTypes.bool,
}

export default Web3dEngine
