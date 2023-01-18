import { ContactShadows, View } from '@react-three/drei'
import { Leva, button, folder, useControls } from 'leva'
import React, { useEffect, useRef, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import Debug from './Debug'
import { Factory } from './Factory'
import MotionCamera from './MotionCamera'
import Panel from './Panel'
import PropTypes from 'prop-types'
import { cameraPosition } from './const/cameraPosition'
import { motion } from 'framer-motion'

function View3d({ debug = false }) {
  const [activeDepartment, setActiveDepartment] = useState('general')
  const [activeSectorId, setActiveSectorId] = useState(undefined)

  const lightRef = useRef()
  const view3dRef = useRef()
  const viewportRef = useRef()

  const [{ grid, stats, light, camera_control }, setDebug] = useControls(
    () => ({
      camera_position: folder({
        general: button(() => {
          setActiveDepartment('general')
        }),
        department_1: button(() => {
          setActiveDepartment('department_1')
        }),
        department_2: button(() => {
          setActiveDepartment('department_2')
        }),
        department_3: button(() => {
          setActiveDepartment('department_3')
        }),
        department_4: button(() => {
          setActiveDepartment('department_4')
        }),
      }),
      debug: folder({
        grid: debug,
        light: debug,
        stats: debug,
        camera_control: false,
      }),
    })
  )

  useEffect(() => {
    setDebug({ grid: debug, light: debug, stats: debug })
  }, [debug])

  return (
    <div ref={view3dRef} className="view3d">
      <div
        className="view3d__title"
        style={activeDepartment != 'general' ? { opacity: 0 } : { opacity: 1 }}
      >
        <div className="view3d__title__name">Схема ООО “ЗМИ”</div>
        <div className="view3d__title__text">
          Выберите интересующий вас участок завода
        </div>
      </div>

      <div className="view3d__viewport" ref={viewportRef} />
      <motion.div
        className="view3d__panel"
        animate={activeSectorId != undefined ? 'open' : 'close'}
        initial={{ width: 0 }}
        variants={{ open: { width: 400 }, close: { width: 0 } }}
        transition={{ duration: 0.3 }}
      >
        <Panel activeSectorId={activeSectorId} />
      </motion.div>

      <Leva
        titleBar={{ drag: false, filter: false, position: { x: 0, y: 0 } }}
        hideCopyButton
        hidden={!debug}
      />

      <Canvas eventSource={view3dRef} className="view3d__canvas">
        <View index={1} track={viewportRef}>
          <Debug
            grid={grid}
            light={light}
            stats={stats}
            cameraControl={camera_control}
            lightRef={lightRef}
            view3dRef={view3dRef}
          />

          <MotionCamera
            initial="general"
            animate={activeDepartment}
            variants={cameraPosition}
            transition={{ duration: 0.3 }}
          >
            <pointLight position={[0, 0, 0]} intensity={0.3} distance={600} />
          </MotionCamera>

          <directionalLight ref={lightRef} position={[-25, 60, -20]} />

          {/* <ContactShadows
            width={12}
            height={12}
            opacity={1.2}
            far={4}
            frames={1}
          /> */}

          <Factory
            props={{
              scale: [0.25, 0.25, 0.25],
              rotation: [0, Math.PI - 0.1, 0],
            }}
            activeDepartment={activeDepartment}
            setActiveDepartment={setActiveDepartment}
            activeSectorId={activeSectorId}
            setActiveSectorId={setActiveSectorId}
          />
        </View>
      </Canvas>
    </div>
  )
}

View3d.propTypes = {
  debug: PropTypes.bool,
}

export default View3d
