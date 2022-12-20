import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion-3d'
import { useGLTF } from '@react-three/drei'

export function Factory(props) {
  const { nodes } = useGLTF('/factory.glb')
  const [activeWorkshop, setActiveWorkshop] = useState(0)

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Walls"
        castShadow
        receiveShadow
        geometry={nodes.Walls.geometry}
        position={[0, 10.5, 0]}
        scale={[0.75, 0.7, 0.5]}
      >
        <meshStandardMaterial />
      </mesh>

      <motion.mesh
        name="Roof_1"
        castShadow
        receiveShadow
        geometry={nodes.Roof_1.geometry}
        position={[-9.58, 20.87, -35.46]}
        scale={[0.75, 0.7, 0.5]}
        animate={activeWorkshop == 1 ? 'open' : 'rest'}
        variants={{ open: { y: 40 } }}
      >
        <motion.meshStandardMaterial
          initial={{ color: 'white' }}
          variants={{ open: { color: 'orange' } }}
        />
      </motion.mesh>
      <motion.mesh
        name="Roof_11"
        castShadow
        receiveShadow
        geometry={nodes.Roof_11.geometry}
        position={[24.62, 7, 83.4]}
        scale={[0.75, 0.7, 0.5]}
        animate={activeWorkshop == 1 ? 'open' : 'rest'}
        variants={{ open: { y: 30 } }}
      >
        <motion.meshStandardMaterial
          initial={{ color: 'white' }}
          variants={{ open: { color: 'orange' } }}
        />
      </motion.mesh>
      <motion.mesh
        name="Roof_12"
        castShadow
        receiveShadow
        geometry={nodes.Roof_12.geometry}
        position={[6.18, 20.87, 6.15]}
        scale={[0.75, 0.7, 0.5]}
        animate={activeWorkshop == 1 ? 'open' : 'rest'}
        variants={{ open: { y: 40 } }}
      >
        <motion.meshStandardMaterial
          initial={{ color: 'white' }}
          variants={{ open: { color: 'orange' } }}
        />
      </motion.mesh>
      <motion.mesh
        name="Roof_13"
        castShadow
        receiveShadow
        geometry={nodes.Roof_13.geometry}
        position={[-5.44, 15.23, 81.9]}
        scale={[0.75, 0.7, 0.5]}
        animate={activeWorkshop == 1 ? 'open' : 'rest'}
        variants={{ open: { y: 35 } }}
      >
        <motion.meshStandardMaterial
          initial={{ color: 'white' }}
          variants={{ open: { color: 'orange' } }}
        />
      </motion.mesh>

      <motion.mesh
        name="Roof_2"
        castShadow
        receiveShadow
        geometry={nodes.Roof_2.geometry}
        position={[15.34, 20.87, -98.61]}
        scale={[0.75, 0.7, 0.5]}
        animate={activeWorkshop == 2 ? 'open' : 'rest'}
        variants={{ open: { y: 40 } }}
      >
        <motion.meshStandardMaterial
          initial={{ color: 'white' }}
          variants={{ open: { color: 'orange' } }}
        />
      </motion.mesh>

      <motion.mesh
        name="Roof_3"
        castShadow
        receiveShadow
        geometry={nodes.Roof_3.geometry}
        position={[-37.01, 11.23, 54.03]}
        scale={[0.75, 0.7, 0.5]}
        animate={activeWorkshop == 3 ? 'open' : 'rest'}
        variants={{ open: { y: 30 } }}
      >
        <motion.meshStandardMaterial
          initial={{ color: 'white' }}
          variants={{ open: { color: 'orange' } }}
        />
      </motion.mesh>
      <motion.mesh
        name="Roof_31"
        castShadow
        receiveShadow
        geometry={nodes.Roof_31.geometry}
        position={[-39.66, 20.87, 6.15]}
        scale={[0.75, 0.7, 0.5]}
        animate={activeWorkshop == 3 ? 'open' : 'rest'}
        variants={{ open: { y: 40 } }}
      >
        <motion.meshStandardMaterial
          initial={{ color: 'white' }}
          variants={{ open: { color: 'orange' } }}
        />
      </motion.mesh>

      <motion.mesh
        name="Roof_4"
        castShadow
        receiveShadow
        geometry={nodes.Roof_4.geometry}
        position={[-30.5, 16.8, -98.61]}
        scale={[0.75, 0.7, 0.5]}
        animate={activeWorkshop == 4 ? 'open' : 'rest'}
        variants={{ open: { y: 35 } }}
      >
        <motion.meshStandardMaterial
          initial={{ color: 'white' }}
          variants={{ open: { color: 'orange' } }}
        />
      </motion.mesh>

      <mesh
        name="Workshop_1"
        geometry={nodes.Workshop_1.geometry}
        position={[-9.58, 10.49, 40.78]}
        onPointerOver={(e) => {
          e.stopPropagation()
          setActiveWorkshop(1)
        }}
        onPointerOut={() => setActiveWorkshop(0)}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
      <mesh
        name="Workshop_2"
        geometry={nodes.Workshop_2.geometry}
        position={[15.84, 10.71, -98.13]}
        onPointerOver={(e) => {
          e.stopPropagation()
          setActiveWorkshop(2)
        }}
        onPointerOut={() => setActiveWorkshop(0)}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
      <mesh
        name="Workshop_3"
        geometry={nodes.Workshop_3.geometry}
        position={[-39.14, 10.52, 33.78]}
        onPointerOver={(e) => {
          e.stopPropagation()
          setActiveWorkshop(3)
        }}
        onPointerOut={() => setActiveWorkshop(0)}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
      <mesh
        name="Workshop_4"
        geometry={nodes.Workshop_4.geometry}
        position={[-30, 10.73, -98.13]}
        onPointerOver={(e) => {
          e.stopPropagation()
          setActiveWorkshop(4)
        }}
        onPointerOut={() => setActiveWorkshop(0)}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/factory.glb')
