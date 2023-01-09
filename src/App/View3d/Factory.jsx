import { Plane, Text3D, useGLTF } from '@react-three/drei'
import React, { useEffect, useState } from 'react'

import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { MotionConfig } from 'framer-motion'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { extend } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { useLoader } from '@react-three/fiber'

extend({ TextGeometry })

export function Factory({ props, activeWorkshop, setActiveWorkshop }) {
  const { nodes } = useGLTF('/factory.glb')
  const font = useLoader(FontLoader, '/Inter_Bold.json')
  const [selectionAnimation, setSelectionAnimation] = useState('none')

  return (
    <>
      <Plane
        args={[150, 150]}
        position={[0, -0.1, 0]}
        rotation={[-3.14 / 2, 0, 0]}
        visible={false}
        receiveShadow
        onClick={(e) => {
          e.stopPropagation()
          setActiveWorkshop('general')
        }}
      />
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

        <MotionConfig
          transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
        >
          <motion.mesh
            name="Roof_1"
            castShadow
            receiveShadow
            geometry={nodes.Roof_1.geometry}
            position={[-9.58, 20.87, -35.46]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_1_selected: { y: 25 },
              workshop_1: { y: 200 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: '#ffffff' }}
              variants={{ workshop_1_selected: { color: '#ffa500' } }}
            />
          </motion.mesh>
          <motion.mesh
            name="Roof_11"
            castShadow
            receiveShadow
            geometry={nodes.Roof_11.geometry}
            position={[24.62, 7, 83.4]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_1_selected: { y: 11 },
              workshop_1: { y: 200 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: '#ffffff' }}
              variants={{ workshop_1_selected: { color: '#ffa500' } }}
            />
          </motion.mesh>
          <motion.mesh
            name="Roof_12"
            castShadow
            receiveShadow
            geometry={nodes.Roof_12.geometry}
            position={[6.18, 20.87, 6.15]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_1_selected: { y: 25 },
              workshop_1: { y: 200 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: '#ffffff' }}
              variants={{ workshop_1_selected: { color: '#ffa500' } }}
            />
          </motion.mesh>
          <motion.mesh
            name="Roof_13"
            castShadow
            receiveShadow
            geometry={nodes.Roof_13.geometry}
            position={[-5.44, 15.23, 81.9]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_1_selected: { y: 19 },
              workshop_1: { y: 200 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: '#ffffff' }}
              variants={{ workshop_1_selected: { color: '#ffa500' } }}
            />
          </motion.mesh>
          <motion.mesh
            position={[15, 24, 90]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_1_selected: { y: 28 },
              workshop_1: { y: 200 },
            }}
          >
            <textGeometry args={['Цех №1', { font, size: 14, height: 0.1 }]} />
            <motion.meshStandardMaterial
              initial={{ color: '#aaaaaa' }}
              variants={{ workshop_1_selected: { color: '#000000' } }}
            />
          </motion.mesh>

          <motion.mesh
            name="Roof_2"
            castShadow
            receiveShadow
            geometry={nodes.Roof_2.geometry}
            position={[15.34, 20.87, -98.61]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_2_selected: { y: 25 },
              workshop_2: { y: 200 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: '#ffffff' }}
              variants={{ workshop_2_selected: { color: '#ffa500' } }}
            />
          </motion.mesh>
          <motion.mesh
            position={[20, 24, -70]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_2_selected: { y: 28 },
              workshop_2: { y: 200 },
            }}
          >
            <textGeometry args={['Цех №2', { font, size: 10, height: 0.1 }]} />
            <motion.meshStandardMaterial
              initial={{ color: '#aaaaaa' }}
              variants={{ workshop_2_selected: { color: '#000000' } }}
            />
          </motion.mesh>

          <motion.mesh
            name="Roof_3"
            castShadow
            receiveShadow
            geometry={nodes.Roof_3.geometry}
            position={[-37.01, 11.23, 54.03]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_3_selected: { y: 15 },
              workshop_3: { y: 200 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: '#ffffff' }}
              variants={{ workshop_3_selected: { color: '#ffa500' } }}
            />
          </motion.mesh>
          <motion.mesh
            name="Roof_31"
            castShadow
            receiveShadow
            geometry={nodes.Roof_31.geometry}
            position={[-39.66, 20.87, 6.15]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_3_selected: { y: 25 },
              workshop_3: { y: 200 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: '#ffffff' }}
              variants={{ workshop_3_selected: { color: '#ffa500' } }}
            />
          </motion.mesh>
          <motion.mesh
            position={[-30, 24, 62]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_3_selected: { y: 28 },
              workshop_3: { y: 200 },
            }}
          >
            <textGeometry args={['Цех №3', { font, size: 8, height: 0.1 }]} />
            <motion.meshStandardMaterial
              initial={{ color: '#aaaaaa' }}
              variants={{ workshop_3_selected: { color: '#000000' } }}
            />
          </motion.mesh>

          <motion.mesh
            name="Roof_4"
            castShadow
            receiveShadow
            geometry={nodes.Roof_4.geometry}
            position={[-30.5, 16.8, -98.61]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_4_selected: { y: 20 },
              workshop_4: { y: 200 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: '#ffffff' }}
              variants={{ workshop_4_selected: { color: '#ffa500' } }}
            />
          </motion.mesh>
          <motion.mesh
            position={[-18, 24, -75]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_4_selected: { y: 28 },
              workshop_4: { y: 200 },
            }}
          >
            <textGeometry args={['Цех №4', { font, size: 8, height: 0.1 }]} />
            <motion.meshStandardMaterial
              initial={{ color: '#aaaaaa' }}
              variants={{ workshop_4_selected: { color: '#000000' } }}
            />
          </motion.mesh>

          <mesh
            name="Workshop_1"
            geometry={nodes.Workshop_1.geometry}
            position={[-9.58, 10.49, 40.78]}
            visible={false}
            onPointerOver={(e) => {
              e.stopPropagation()
              setSelectionAnimation('workshop_1_selected')
            }}
            onPointerOut={() => setSelectionAnimation('none')}
            onClick={(e) => {
              e.stopPropagation()
              setActiveWorkshop('workshop_1')
            }}
          />
          <mesh
            name="Workshop_2"
            geometry={nodes.Workshop_2.geometry}
            position={[15.84, 10.71, -98.13]}
            visible={false}
            onPointerOver={(e) => {
              e.stopPropagation()
              setSelectionAnimation('workshop_2_selected')
            }}
            onPointerOut={() => setSelectionAnimation('none')}
            onClick={(e) => {
              e.stopPropagation()
              setActiveWorkshop('workshop_2')
            }}
          />
          <mesh
            name="Workshop_3"
            geometry={nodes.Workshop_3.geometry}
            position={[-39.14, 10.52, 33.78]}
            visible={false}
            onPointerOver={(e) => {
              e.stopPropagation()
              setSelectionAnimation('workshop_3_selected')
            }}
            onPointerOut={() => setSelectionAnimation('none')}
            onClick={(e) => {
              e.stopPropagation()
              setActiveWorkshop('workshop_3')
            }}
          />
          <mesh
            name="Workshop_4"
            geometry={nodes.Workshop_4.geometry}
            position={[-30, 10.73, -98.13]}
            visible={false}
            onPointerOver={(e) => {
              e.stopPropagation()
              setSelectionAnimation('workshop_4_selected')
            }}
            onPointerOut={() => setSelectionAnimation('none')}
            onClick={(e) => {
              e.stopPropagation()
              setActiveWorkshop('workshop_4')
            }}
          />
        </MotionConfig>
      </group>
    </>
  )
}

useGLTF.preload('/factory.glb')
