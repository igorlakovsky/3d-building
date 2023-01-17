import { Plane, useGLTF } from '@react-three/drei'
import React, { useState } from 'react'

import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { MotionConfig } from 'framer-motion'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { extend } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { useLoader } from '@react-three/fiber'

extend({ TextGeometry })

export function Factory({
  props,
  activeWorkshop,
  setActiveWorkshop,
  activeFloor,
  setActiveFloor,
}) {
  const { nodes } = useGLTF('/factory.glb')
  const font = useLoader(FontLoader, '/Inter_Bold.json')
  const [selectedWorkshop, setSelectedWorkshop] = useState('none')
  const [selectedFloor, setSelectedFloor] = useState('none')

  const selectColor = '#ffa500'
  const selectedColor = '#ffa500'
  const activeColor = '#ffffff'
  const inactiveColor = '#b9b9b9'

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
          setActiveFloor('none')
        }}
      />
      <group {...props} dispose={null}>
        <mesh
          name="Walls"
          geometry={nodes.Walls.geometry}
          position={[-66.12, 15, 32.42]}
          scale={[0.75, 0.7, 0.5]}
        >
          <meshStandardMaterial color={inactiveColor} />
        </mesh>

        <MotionConfig
          transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
        >
          <motion.mesh
            name="Roof_1"
            geometry={nodes.Roof_1.geometry}
            position={[-9.58, 14.57, 37.79]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectedWorkshop, activeWorkshop]}
            variants={{
              workshop_1_selected: { y: 20 },
              workshop_1: { y: 20 },
            }}
          >
            <motion.meshStandardMaterial
              transparent
              initial={{ color: activeColor }}
              variants={{
                workshop_1_selected: { color: selectedColor },
                workshop_1: { opacity: 0 },
                workshop_2: { color: inactiveColor },
                workshop_3: { color: inactiveColor },
                workshop_4: { color: inactiveColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Roof_2"
            geometry={nodes.Roof_2.geometry}
            position={[8.47, 19.47, -106.61]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectedWorkshop, activeWorkshop]}
            variants={{
              workshop_2_selected: { y: 25 },
              workshop_2: { y: 25 },
            }}
          >
            <motion.meshStandardMaterial
              transparent
              initial={{ color: activeColor }}
              variants={{
                workshop_2_selected: { color: selectedColor },
                workshop_1: { color: inactiveColor },
                workshop_2: { opacity: 0 },
                workshop_3: { color: inactiveColor },
                workshop_4: { color: inactiveColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Roof_3"
            geometry={nodes.Roof_3.geometry}
            position={[-109.94, 15.8, 82.58]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectedWorkshop, activeWorkshop]}
            variants={{
              workshop_3_selected: { y: 20 },
              workshop_3: { y: 20 },
            }}
          >
            <motion.meshStandardMaterial
              transparent
              initial={{ color: activeColor }}
              variants={{
                workshop_3_selected: { color: selectedColor },
                workshop_1: { color: inactiveColor },
                workshop_2: { color: inactiveColor },
                workshop_3: { opacity: 0 },
                workshop_4: { color: inactiveColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Roof_4"
            geometry={nodes.Roof_4.geometry}
            position={[-21.34, 17.2, -24.13]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectedWorkshop, activeWorkshop]}
            variants={{
              workshop_4_selected: { y: 23 },
              workshop_4: { y: 23 },
            }}
          >
            <motion.meshStandardMaterial
              transparent
              initial={{ color: activeColor }}
              variants={{
                workshop_4_selected: { color: selectedColor },
                workshop_1: { color: inactiveColor },
                workshop_2: { color: inactiveColor },
                workshop_3: { color: inactiveColor },
                workshop_4: { opacity: 0 },
              }}
            />
          </motion.mesh>

          <motion.mesh
            name="Label_1"
            position={[6, 28, 81]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectedWorkshop, activeWorkshop]}
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
                workshop_2: { opacity: 0 },
                workshop_3: { opacity: 0 },
                workshop_4: { opacity: 0 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_2"
            position={[20, 32, -62]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectedWorkshop, activeWorkshop]}
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
                workshop_1: { opacity: 0 },
                workshop_2: { opacity: 0 },
                workshop_3: { opacity: 0 },
                workshop_4: { opacity: 0 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_3"
            position={[-138, 24, 116]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2 - 0.75]}
            animate={[selectedWorkshop, activeWorkshop]}
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
                workshop_1: { opacity: 0 },
                workshop_2: { opacity: 0 },
                workshop_3: { opacity: 0 },
                workshop_4: { opacity: 0 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_4"
            position={[-16, 32, -62]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectedWorkshop, activeWorkshop]}
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
                workshop_1: { opacity: 0 },
                workshop_2: { opacity: 0 },
                workshop_3: { opacity: 0 },
                workshop_4: { opacity: 0 },
              }}
            />
          </motion.mesh>
        </MotionConfig>

        <MotionConfig
          transition={{ type: 'tween', duration: 0.1, ease: 'easeOut' }}
        >
          <motion.mesh
            name="Floor_11"
            geometry={nodes.Floor_11.geometry}
            position={[-9.58, -0.25, 3.15]}
            rotation={[Math.PI, 0, 0]}
            visible={activeWorkshop === 'workshop_1'}
            onPointerOver={(e) => {
              if (activeWorkshop === 'workshop_1') {
                e.stopPropagation()
                setSelectedFloor('floor_11')
              }
            }}
            onPointerOut={() => setSelectedFloor('none')}
            onClick={(e) => {
              if (activeWorkshop === 'workshop_1') {
                e.stopPropagation()
                setActiveFloor('floor_11_active')
              }
            }}
            animate={[selectedFloor, activeFloor]}
            variants={{
              floor_11_active: { y: 19 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                floor_11: { color: selectedColor },
                floor_11_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_12"
            geometry={nodes.Floor_12.geometry}
            position={[-13.08, -0.25, 50.03]}
            rotation={[Math.PI, 0, 0]}
            visible={activeWorkshop === 'workshop_1'}
            onPointerOver={(e) => {
              if (activeWorkshop === 'workshop_1') {
                e.stopPropagation()
                setSelectedFloor('floor_12')
              }
            }}
            onPointerOut={() => setSelectedFloor('none')}
            onClick={(e) => {
              if (activeWorkshop === 'workshop_1') {
                e.stopPropagation()
                setActiveFloor('floor_12_active')
              }
            }}
            animate={[selectedFloor, activeFloor]}
            variants={{
              floor_12_active: { y: 12 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                floor_12: { color: selectedColor },
                floor_12_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_13"
            geometry={nodes.Floor_13.geometry}
            position={[3.83, -0.25, 82.4]}
            rotation={[Math.PI, 0, 0]}
            visible={activeWorkshop === 'workshop_1'}
            onPointerOver={(e) => {
              if (activeWorkshop === 'workshop_1') {
                e.stopPropagation()
                setSelectedFloor('floor_13')
              }
            }}
            onPointerOut={() => setSelectedFloor('none')}
            onClick={(e) => {
              if (activeWorkshop === 'workshop_1') {
                e.stopPropagation()
                setActiveFloor('floor_13_active')
              }
            }}
            animate={[selectedFloor, activeFloor]}
            variants={{
              floor_13_active: { y: 12 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                floor_13: { color: selectedColor },
                floor_13_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_14"
            geometry={nodes.Floor_14.geometry}
            position={[-1.76, -0.25, -17.96]}
            rotation={[Math.PI, 0, 0]}
            visible={activeWorkshop === 'workshop_1'}
            onPointerOver={(e) => {
              if (activeWorkshop === 'workshop_1') {
                e.stopPropagation()
                setSelectedFloor('floor_14')
              }
            }}
            onPointerOut={() => setSelectedFloor('none')}
            onClick={(e) => {
              if (activeWorkshop === 'workshop_1') {
                e.stopPropagation()
                setActiveFloor('floor_14_active')
              }
            }}
            animate={[selectedFloor, activeFloor]}
            variants={{
              floor_14_active: { y: 19 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                floor_14: { color: selectedColor },
                floor_14_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_2"
            geometry={nodes.Floor_2.geometry}
            position={[8.47, -0.25, -106.61]}
            rotation={[Math.PI, 0, 0]}
            visible={activeWorkshop === 'workshop_2'}
            onPointerOver={(e) => {
              if (activeWorkshop === 'workshop_2') {
                e.stopPropagation()
                setSelectedFloor('floor_2')
              }
            }}
            onPointerOut={() => setSelectedFloor('none')}
            onClick={(e) => {
              if (activeWorkshop === 'workshop_2') {
                e.stopPropagation()
                setActiveFloor('floor_2_active')
              }
            }}
            animate={[selectedFloor, activeFloor]}
            variants={{
              floor_2_active: { y: 19 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                floor_2: { color: selectedColor },
                floor_2_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_31"
            geometry={nodes.Floor_31.geometry}
            position={[-155.03, -0.25, 109.67]}
            rotation={[Math.PI, Math.PI / 4, 0]}
            visible={activeWorkshop === 'workshop_3'}
            onPointerOver={(e) => {
              if (activeWorkshop === 'workshop_3') {
                e.stopPropagation()
                setSelectedFloor('floor_31')
              }
            }}
            onPointerOut={() => setSelectedFloor('none')}
            onClick={(e) => {
              if (activeWorkshop === 'workshop_3') {
                e.stopPropagation()
                setActiveFloor('floor_31_active')
              }
            }}
            animate={[selectedFloor, activeFloor]}
            variants={{
              floor_31_active: { y: 12 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                floor_31: { color: selectedColor },
                floor_31_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_32"
            geometry={nodes.Floor_32.geometry}
            position={[-97.98, -0.25, 51.74]}
            rotation={[Math.PI, Math.PI / 4, 0]}
            visible={activeWorkshop === 'workshop_3'}
            onPointerOver={(e) => {
              if (activeWorkshop === 'workshop_3') {
                e.stopPropagation()
                setSelectedFloor('floor_32')
              }
            }}
            onPointerOut={() => setSelectedFloor('none')}
            onClick={(e) => {
              if (activeWorkshop === 'workshop_3') {
                e.stopPropagation()
                setActiveFloor('floor_32_active')
              }
            }}
            animate={[selectedFloor, activeFloor]}
            variants={{
              floor_32_active: { y: 12 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                floor_32: { color: selectedColor },
                floor_32_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_33"
            geometry={nodes.Floor_33.geometry}
            position={[-42.01, -0.25, 64.78]}
            rotation={[Math.PI, 0, 0]}
            visible={activeWorkshop === 'workshop_3'}
            onPointerOver={(e) => {
              if (activeWorkshop === 'workshop_3') {
                e.stopPropagation()
                setSelectedFloor('floor_33')
              }
            }}
            onPointerOut={() => setSelectedFloor('none')}
            onClick={(e) => {
              if (activeWorkshop === 'workshop_3') {
                e.stopPropagation()
                setActiveFloor('floor_33_active')
              }
            }}
            animate={[selectedFloor, activeFloor]}
            variants={{
              floor_33_active: { y: 12 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                floor_33: { color: selectedColor },
                floor_33_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_41"
            geometry={nodes.Floor_41.geometry}
            position={[-21.34, -0.25, -24.12]}
            rotation={[Math.PI, 0, 0]}
            visible={activeWorkshop === 'workshop_4'}
            onPointerOver={(e) => {
              if (activeWorkshop === 'workshop_4') {
                e.stopPropagation()
                setSelectedFloor('floor_41')
              }
            }}
            onPointerOut={() => setSelectedFloor('none')}
            onClick={(e) => {
              if (activeWorkshop === 'workshop_4') {
                e.stopPropagation()
                setActiveFloor('floor_41_active')
              }
            }}
            animate={[selectedFloor, activeFloor]}
            variants={{
              floor_41_active: { y: 12 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                floor_41: { color: selectedColor },
                floor_41_active: { color: selectColor },
              }}
            />
          </motion.mesh>
        </MotionConfig>

        <motion.mesh
          name="Workshop_1"
          geometry={nodes.Workshop_1.geometry}
          position={[-9.58, 9.8, 37.79]}
          rotation={[-Math.PI, 0, 0]}
          visible={false}
          onPointerOver={(e) => {
            if (activeWorkshop === 'general') {
              e.stopPropagation()
              setSelectedWorkshop('workshop_1_selected')
            }
          }}
          onPointerOut={() => {
            setSelectedWorkshop('none')
          }}
          onClick={(e) => {
            if (activeWorkshop === 'general') {
              e.stopPropagation()
              setActiveWorkshop('workshop_1')
            }
          }}
          animate={[activeWorkshop]}
          variants={{
            workshop_1: { y: -15 },
          }}
        />
        <motion.mesh
          name="Workshop_2"
          geometry={nodes.Workshop_2.geometry}
          position={[8.47, 9.8, -106.61]}
          rotation={[-Math.PI, 0, 0]}
          visible={false}
          onPointerOver={(e) => {
            if (activeWorkshop === 'general') {
              e.stopPropagation()
              setSelectedWorkshop('workshop_2_selected')
            }
          }}
          onPointerOut={() => setSelectedWorkshop('none')}
          onClick={(e) => {
            if (activeWorkshop === 'general') {
              e.stopPropagation()
              setActiveWorkshop('workshop_2')
            }
          }}
          animate={[activeWorkshop]}
          variants={{
            workshop_2: { y: -15 },
          }}
        />
        <motion.mesh
          name="Workshop_3"
          geometry={nodes.Workshop_3.geometry}
          position={[-107.81, 8.5, 73.44]}
          rotation={[Math.PI, 0, 0]}
          visible={false}
          onPointerOver={(e) => {
            if (activeWorkshop === 'general') {
              e.stopPropagation()
              setSelectedWorkshop('workshop_3_selected')
            }
          }}
          onPointerOut={() => setSelectedWorkshop('none')}
          onClick={(e) => {
            if (activeWorkshop === 'general') {
              e.stopPropagation()
              setActiveWorkshop('workshop_3')
            }
          }}
          animate={[activeWorkshop]}
          variants={{
            workshop_3: { y: -15 },
          }}
        />
        <motion.mesh
          name="Workshop_4"
          geometry={nodes.Workshop_4.geometry}
          position={[-21.34, 9.8, -24.13]}
          rotation={[Math.PI, 0, 0]}
          visible={false}
          onPointerOver={(e) => {
            if (activeWorkshop === 'general') {
              e.stopPropagation()
              setSelectedWorkshop('workshop_4_selected')
            }
          }}
          onPointerOut={() => setSelectedWorkshop('none')}
          onClick={(e) => {
            if (activeWorkshop === 'general') {
              e.stopPropagation()
              setActiveWorkshop('workshop_4')
            }
          }}
          animate={[activeWorkshop]}
          variants={{
            workshop_4: { y: -15 },
          }}
        />
      </group>
    </>
  )
}

useGLTF.preload('/factory.glb')
