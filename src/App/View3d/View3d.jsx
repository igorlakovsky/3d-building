import { ContactShadows, PivotControls } from '@react-three/drei'
import { Leva, button, folder, useControls } from 'leva'
import React, { useEffect, useRef, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import Debug from './Debug'
import { Factory } from './Factory'
import MotionCamera from './MotionCamera'
import PropTypes from 'prop-types'
import { cameraPosition } from './const/cameraPosition'

function View3d({ debug = false }) {
  const [activeWorkshop, setActiveWorkshop] = useState('general')
  const lightRef = useRef()

  const [{ grid, stats, light, camera_control, rotX, rotY, rotZ }, setDebug] =
    useControls(() => ({
      camera_position: folder({
        general: button(() => {
          setActiveWorkshop('general')
        }),
        workshop_1: button(() => {
          setActiveWorkshop('workshop_1')
        }),
        workshop_2: button(() => {
          setActiveWorkshop('workshop_2')
        }),
        workshop_3: button(() => {
          setActiveWorkshop('workshop_3')
        }),
        workshop_4: button(() => {
          setActiveWorkshop('workshop_4')
        }),
      }),
      debug: folder({
        grid: debug,
        light: debug,
        stats: debug,
        camera_control: false,
      }),
      rotX: {
        value: 0,
        min: -Math.PI,
        max: Math.PI,
        step: 0.01,
      },
      rotY: {
        value: 0,
        min: -Math.PI,
        max: Math.PI,
        step: 0.01,
      },
      rotZ: {
        value: 0,
        min: -Math.PI,
        max: Math.PI,
        step: 0.01,
      },
    }))

  useEffect(() => {
    setDebug({ grid: debug, light: debug, stats: debug })
  }, [debug])

  return (
    <div className="view3d">
      <Leva
        titleBar={{ drag: false, filter: false }}
        hideCopyButton
        hidden={!debug}
      />
      <Canvas>
        <Debug
          grid={grid}
          light={light}
          lightRef={lightRef}
          stats={stats}
          camera_control={camera_control}
        />

        <MotionCamera
          initial="general"
          animate={activeWorkshop}
          variants={cameraPosition}
          transition={{ duration: 0.3 }}
        >
          <pointLight position={[0, 0, 0]} intensity={0.3} distance={600} />
        </MotionCamera>

        <directionalLight ref={lightRef} position={[-15, 40, -55]} />

        <ContactShadows
          width={8}
          height={8}
          opacity={1.2}
          far={5}
          // frames={24}
        />

        <Factory
          props={{ scale: [0.25, 0.25, 0.25], rotation: [0, Math.PI, 0] }}
          activeWorkshop={activeWorkshop}
          setActiveWorkshop={setActiveWorkshop}
        />
      </Canvas>
    </div>
  )
}

View3d.propTypes = {
  debug: PropTypes.bool,
}

export default View3d
