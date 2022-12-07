import React, { useState } from 'react'

import { motion } from 'framer-motion-3d'
import { useGLTF } from '@react-three/drei'

export default function Building(props) {
  const { nodes } = useGLTF('/building.glb')

  const [isActiveBig, setIsActiveBig] = useState(false)
  const [isActiveSmall, setIsActiveSmall] = useState(false)

  return (
    <group {...props} dispose={null}>
      {/* BIG ROOM */}
      <motion.mesh
        geometry={nodes.FloorBig.geometry}
        position={[12, -0.11, 0.5]}
        onPointerOver={() => setIsActiveBig(true)}
        onPointerOut={() => setIsActiveBig(false)}
        animate={isActiveBig ? 'open' : 'rest'}
      >
        <motion.meshStandardMaterial
          initial={{ color: 'white' }}
          variants={{ open: { color: 'orange' } }}
        />
      </motion.mesh>
      <motion.mesh
        geometry={nodes.WallsBig.geometry}
        animate={isActiveBig ? 'open' : 'rest'}
      >
        <motion.meshStandardMaterial
          initial={{ color: 'white' }}
          variants={{ open: { color: 'orange' } }}
        />
      </motion.mesh>
      <motion.mesh
        geometry={nodes.RoofBig.geometry}
        position={[12, 9.35, 0.5]}
        animate={isActiveBig ? 'open' : 'rest'}
        variants={{ open: { y: 25 } }}
      >
        <motion.meshStandardMaterial
          initial={{ color: 'white' }}
          variants={{ open: { color: 'orange' } }}
        />
      </motion.mesh>

      {/* SMALL ROOM */}
      <motion.mesh
        geometry={nodes.FloorSmall.geometry}
        position={[18, 0.39, -7.38]}
        onPointerOver={() => setIsActiveSmall(true)}
        onPointerOut={() => setIsActiveSmall(false)}
        animate={isActiveSmall ? 'open' : 'rest'}
      >
        <motion.meshStandardMaterial
          initial={{ color: 'white' }}
          variants={{ open: { color: 'orange' } }}
        />
      </motion.mesh>
      <motion.mesh
        geometry={nodes.WallsSmall.geometry}
        animate={isActiveSmall ? 'open' : 'rest'}
      >
        <motion.meshStandardMaterial
          initial={{ color: 'white' }}
          variants={{ open: { color: 'orange' } }}
        />
      </motion.mesh>
      <motion.mesh
        geometry={nodes.RoofSmall.geometry}
        position={[18, 9.85, -7.38]}
        animate={isActiveSmall ? 'open' : 'rest'}
        variants={{ open: { y: 25 } }}
      >
        <motion.meshStandardMaterial
          initial={{ color: 'white' }}
          variants={{ open: { color: 'orange' } }}
        />
      </motion.mesh>
    </group>
  )
}
