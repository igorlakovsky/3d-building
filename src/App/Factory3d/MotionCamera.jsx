import React, { useEffect, useRef } from 'react'

import { motion } from 'framer-motion-3d'
import { useThree } from '@react-three/fiber'

function MotionCamera(props) {
  const cameraRef = useRef()
  const set = useThree((state) => state.set)
  const size = useThree((state) => state.size)

  useEffect(() => {
    set({ camera: cameraRef.current })
  }, [])

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.aspect = size.width / size.height
      cameraRef.current.updateProjectionMatrix()
    }
  }, [])

  return <motion.perspectiveCamera ref={cameraRef} {...props} />
}

export default MotionCamera
