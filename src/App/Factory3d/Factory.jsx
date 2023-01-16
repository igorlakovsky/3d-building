import { Plane, useGLTF } from '@react-three/drei'
import React, { useState } from 'react'

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
          geometry={nodes.Walls.geometry}
          position={[-66.12, 15, 32.42]}
          scale={[0.75, 0.7, 0.5]}
        >
          <meshStandardMaterial color={'#b9b9b9'} />
        </mesh>

        <MotionConfig
          transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
        >
          <motion.mesh
            name="Roof_1"
            geometry={nodes.Roof_1.geometry}
            position={[-9.58, 14.57, 37.79]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_1_selected: { y: 20 },
              workshop_1: { y: 25 },
            }}
          >
            <motion.meshStandardMaterial
              transparent
              initial={{ color: '#ffffff' }}
              variants={{
                workshop_1_selected: { color: '#ffa500' },
                workshop_1: { opacity: 0 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Roof_2"
            geometry={nodes.Roof_2.geometry}
            position={[8.47, 19.47, -106.61]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_2_selected: { y: 25 },
              workshop_2: { y: 25 },
            }}
          >
            <motion.meshStandardMaterial
              transparent
              initial={{ color: '#ffffff' }}
              variants={{
                workshop_2_selected: { color: '#ffa500' },
                workshop_2: { opacity: 0 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Roof_3"
            geometry={nodes.Roof_3.geometry}
            position={[-109.94, 15.8, 82.58]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_3_selected: { y: 20 },
              workshop_3: { y: 20 },
            }}
          >
            <motion.meshStandardMaterial
              transparent
              initial={{ color: '#ffffff' }}
              variants={{
                workshop_3_selected: { color: '#ffa500' },
                workshop_3: { opacity: 0 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Roof_4"
            geometry={nodes.Roof_4.geometry}
            position={[-21.34, 17.2, -24.13]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_4_selected: { y: 23 },
              workshop_4: { y: 23 },
            }}
          >
            <motion.meshStandardMaterial
              transparent
              initial={{ color: '#ffffff' }}
              variants={{
                workshop_4_selected: { color: '#ffa500' },
                workshop_4: { opacity: 0 },
              }}
            />
          </motion.mesh>

          <motion.mesh
            name="Label_1"
            position={[6, 28, 81]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_1_selected: { y: 36 },
              workshop_1: { y: 36 },
            }}
          >
            <textGeometry args={['Цех №1', { font, size: 16, height: 0.1 }]} />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: '#4d4d4d' }}
              variants={{
                workshop_1_selected: { color: '#000000' },
                workshop_1: { opacity: 0 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_2"
            position={[20, 32, -62]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_2_selected: { y: 39 },
              workshop_2: { y: 39 },
            }}
          >
            <textGeometry args={['Цех №2', { font, size: 10, height: 0.1 }]} />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: '#4d4d4d' }}
              variants={{
                workshop_2_selected: { color: '#000000' },
                workshop_2: { opacity: 0 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_3"
            position={[-142, 24, 118]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2 - 0.75]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_3_selected: { y: 30 },
              workshop_3: { y: 30 },
            }}
          >
            <textGeometry args={['Цех №3', { font, size: 10, height: 0.1 }]} />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: '#4d4d4d' }}
              variants={{
                workshop_3_selected: { color: '#000000' },
                workshop_3: { opacity: 0 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_4"
            position={[-16, 32, -62]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectionAnimation, activeWorkshop]}
            variants={{
              workshop_4_selected: { y: 40 },
              workshop_4: { y: 40 },
            }}
          >
            <textGeometry args={['Цех №4', { font, size: 8, height: 0.1 }]} />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: '#4d4d4d' }}
              variants={{
                workshop_4_selected: { color: '#000000' },
                workshop_4: { opacity: 0 },
              }}
            />
          </motion.mesh>

          <mesh
            name="Floor_11"
            geometry={nodes.Floor_11.geometry}
            position={[-9.58, -0.25, 3.15]}
            rotation={[Math.PI, 0, 0]}
            visible={false}
          >
            <meshStandardMaterial />
          </mesh>
          <mesh
            name="Floor_12"
            geometry={nodes.Floor_12.geometry}
            position={[-13.08, -0.25, 50.03]}
            rotation={[Math.PI, 0, 0]}
            visible={false}
          >
            <meshStandardMaterial />
          </mesh>
          <mesh
            name="Floor_13"
            geometry={nodes.Floor_13.geometry}
            position={[3.83, -0.25, 82.4]}
            rotation={[Math.PI, 0, 0]}
            visible={false}
          >
            <meshStandardMaterial />
          </mesh>
          <mesh
            name="Floor_14"
            geometry={nodes.Floor_14.geometry}
            position={[-1.76, -0.25, -17.96]}
            rotation={[Math.PI, 0, 0]}
            visible={false}
          >
            <meshStandardMaterial />
          </mesh>
          <mesh
            name="Floor_2"
            geometry={nodes.Floor_2.geometry}
            position={[8.47, -0.25, -106.61]}
            rotation={[Math.PI, 0, 0]}
            visible={false}
          >
            <meshStandardMaterial />
          </mesh>
          <mesh
            name="Floor_31"
            geometry={nodes.Floor_31.geometry}
            position={[-155.03, -0.25, 109.67]}
            rotation={[Math.PI, Math.PI / 4, 0]}
            visible={false}
          >
            <meshStandardMaterial />
          </mesh>
          <mesh
            name="Floor_32"
            geometry={nodes.Floor_32.geometry}
            position={[-97.98, -0.25, 51.74]}
            rotation={[Math.PI, Math.PI / 4, 0]}
            visible={false}
          >
            <meshStandardMaterial />
          </mesh>
          <mesh
            name="Floor_33"
            geometry={nodes.Floor_33.geometry}
            position={[-42.01, -0.25, 64.78]}
            rotation={[Math.PI, 0, 0]}
            visible={false}
          >
            <meshStandardMaterial />
          </mesh>
          <mesh
            name="Floor_41"
            geometry={nodes.Floor_41.geometry}
            position={[-21.34, -0.25, -24.12]}
            rotation={[Math.PI, 0, 0]}
            visible={false}
          >
            <meshStandardMaterial />
          </mesh>

          <mesh
            name="Workshop_1"
            geometry={nodes.Workshop_1.geometry}
            position={[-9.58, 9.8, 37.79]}
            rotation={[-Math.PI, 0, 0]}
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
          >
            <meshStandardMaterial />
          </mesh>
          <mesh
            name="Workshop_2"
            geometry={nodes.Workshop_2.geometry}
            position={[8.47, 9.8, -106.61]}
            rotation={[-Math.PI, 0, 0]}
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
          >
            <meshStandardMaterial />
          </mesh>
          <mesh
            name="Workshop_3"
            geometry={nodes.Workshop_3.geometry}
            position={[-107.81, 8.5, 73.44]}
            rotation={[Math.PI, 0, 0]}
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
          >
            <meshStandardMaterial />
          </mesh>
          <mesh
            name="Workshop_4"
            geometry={nodes.Workshop_4.geometry}
            position={[-21.34, 9.8, -24.13]}
            rotation={[Math.PI, 0, 0]}
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
          >
            <meshStandardMaterial />
          </mesh>
        </MotionConfig>
      </group>
    </>
  )
}

useGLTF.preload('/factory.glb')
