import { Plane, useGLTF } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import { getDepartments, getSectors } from './api'

import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { MotionConfig } from 'framer-motion'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { extend } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { useLoader } from '@react-three/fiber'

extend({ TextGeometry })

function findId(data, name) {
  return data.find((value) => value.name === name)?._id
}

export function Factory({
  props,
  activeDepartment,
  setActiveDepartment,
  setActiveSectorId,
}) {
  const [selectedDepartment, setSelectedDepartment] = useState('none')
  const [selectedSector, setSelectedSector] = useState('none')
  const [activeSector, setActiveSector] = useState('none')

  const [departmentsData, setDepartmentsData] = useState([])
  const [departmentsDataStatus, setDepartmentsDataStatus] = useState('idle')
  const [sectorData, setSectorData] = useState([])

  const font = useLoader(FontLoader, '/Inter_Bold.json')
  const { nodes } = useGLTF('/factory.glb')

  const selectColor = '#ffa500'
  const selectedColor = '#ffa500'
  const activeColor = '#ffffff'
  const inactiveColor = '#b9b9b9'
  const textColor = '#4d4d4d'
  const textSelectedColor = '#000000'

  useEffect(() => {
    if (activeDepartment == 'general')
      getDepartments(setDepartmentsData, setDepartmentsDataStatus)

    if (departmentsDataStatus == 'success') {
      if (activeDepartment == 'department_1')
        getSectors(setSectorData, findId(departmentsData.departments, 'цех №1'))
      if (activeDepartment == 'department_2')
        getSectors(setSectorData, findId(departmentsData.departments, 'цех №2'))
      if (activeDepartment == 'department_3')
        getSectors(setSectorData, findId(departmentsData.departments, 'цех №3'))
      if (activeDepartment == 'department_4')
        getSectors(setSectorData, findId(departmentsData.departments, 'цех №4'))
    }
  }, [activeDepartment])

  useEffect(() => {
    if (activeSector == 'sector_11_active')
      setActiveSectorId(findId(sectorData, 'Участок №1'))
    if (activeSector == 'sector_12_active')
      setActiveSectorId(findId(sectorData, 'Участок №2'))
    if (activeSector == 'sector_13_active')
      setActiveSectorId(findId(sectorData, 'Участок №3'))
    if (activeSector == 'sector_14_active')
      setActiveSectorId(findId(sectorData, 'Участок №4'))
    if (activeSector == 'sector_21_active')
      setActiveSectorId(findId(sectorData, 'Участок №1'))
    if (activeSector == 'sector_31_active')
      setActiveSectorId(findId(sectorData, 'Участок №1'))
    if (activeSector == 'sector_32_active')
      setActiveSectorId(findId(sectorData, 'Участок №2'))
    if (activeSector == 'sector_33_active')
      setActiveSectorId(findId(sectorData, 'Участок №3'))
    if (activeSector == 'sector_41_active')
      setActiveSectorId(findId(sectorData, 'Участок №1'))
  }, [activeSector])

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
          setActiveDepartment('general')
          setActiveSector('none')
          setActiveSectorId(undefined)
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
            animate={[selectedDepartment, activeDepartment]}
            variants={{
              department_1_selected: { y: 20 },
              department_1: { y: 20 },
            }}
          >
            <motion.meshStandardMaterial
              transparent
              initial={{ color: activeColor }}
              variants={{
                department_1_selected: { color: selectedColor },
                department_1: { opacity: 0 },
                department_2: { color: inactiveColor },
                department_3: { color: inactiveColor },
                department_4: { color: inactiveColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Roof_2"
            geometry={nodes.Roof_2.geometry}
            position={[8.47, 19.47, -106.61]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectedDepartment, activeDepartment]}
            variants={{
              department_2_selected: { y: 25 },
              department_2: { y: 25 },
            }}
          >
            <motion.meshStandardMaterial
              transparent
              initial={{ color: activeColor }}
              variants={{
                department_2_selected: { color: selectedColor },
                department_1: { color: inactiveColor },
                department_2: { opacity: 0 },
                department_3: { color: inactiveColor },
                department_4: { color: inactiveColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Roof_3"
            geometry={nodes.Roof_3.geometry}
            position={[-109.94, 15.8, 82.58]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectedDepartment, activeDepartment]}
            variants={{
              department_3_selected: { y: 20 },
              department_3: { y: 20 },
            }}
          >
            <motion.meshStandardMaterial
              transparent
              initial={{ color: activeColor }}
              variants={{
                department_3_selected: { color: selectedColor },
                department_1: { color: inactiveColor },
                department_2: { color: inactiveColor },
                department_3: { opacity: 0 },
                department_4: { color: inactiveColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Roof_4"
            geometry={nodes.Roof_4.geometry}
            position={[-21.34, 17.2, -24.13]}
            scale={[0.75, 0.7, 0.5]}
            animate={[selectedDepartment, activeDepartment]}
            variants={{
              department_4_selected: { y: 23 },
              department_4: { y: 23 },
            }}
          >
            <motion.meshStandardMaterial
              transparent
              initial={{ color: activeColor }}
              variants={{
                department_4_selected: { color: selectedColor },
                department_1: { color: inactiveColor },
                department_2: { color: inactiveColor },
                department_3: { color: inactiveColor },
                department_4: { opacity: 0 },
              }}
            />
          </motion.mesh>

          <motion.mesh
            name="Label_1"
            position={[6, 28, 81]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectedDepartment, activeDepartment]}
            variants={{
              department_1_selected: { y: 36 },
              department_1: { y: 36 },
            }}
          >
            <textGeometry args={['Цех №1', { font, size: 16, height: 0.1 }]} />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: textColor }}
              variants={{
                department_1_selected: { color: textSelectedColor },
                department_1: { opacity: 0 },
                department_2: { opacity: 0 },
                department_3: { opacity: 0 },
                department_4: { opacity: 0 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_2"
            position={[20, 32, -62]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectedDepartment, activeDepartment]}
            variants={{
              department_2_selected: { y: 39 },
              department_2: { y: 39 },
            }}
          >
            <textGeometry args={['Цех №2', { font, size: 10, height: 0.1 }]} />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: textColor }}
              variants={{
                department_2_selected: { color: textSelectedColor },
                department_1: { opacity: 0 },
                department_2: { opacity: 0 },
                department_3: { opacity: 0 },
                department_4: { opacity: 0 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_3"
            position={[-138, 24, 116]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2 - 0.75]}
            animate={[selectedDepartment, activeDepartment]}
            variants={{
              department_3_selected: { y: 30 },
              department_3: { y: 30 },
            }}
          >
            <textGeometry args={['Цех №3', { font, size: 10, height: 0.1 }]} />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: textColor }}
              variants={{
                department_3_selected: { color: textSelectedColor },
                department_1: { opacity: 0 },
                department_2: { opacity: 0 },
                department_3: { opacity: 0 },
                department_4: { opacity: 0 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_4"
            position={[-16, 32, -62]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectedDepartment, activeDepartment]}
            variants={{
              department_4_selected: { y: 40 },
              department_4: { y: 40 },
            }}
          >
            <textGeometry args={['Цех №4', { font, size: 8, height: 0.1 }]} />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: textColor }}
              variants={{
                department_4_selected: { color: textSelectedColor },
                department_1: { opacity: 0 },
                department_2: { opacity: 0 },
                department_3: { opacity: 0 },
                department_4: { opacity: 0 },
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
            visible={activeDepartment === 'department_1'}
            onPointerOver={(e) => {
              if (activeDepartment === 'department_1') {
                e.stopPropagation()
                setSelectedSector('sector_11')
              }
            }}
            onPointerOut={() => setSelectedSector('none')}
            onClick={(e) => {
              if (activeDepartment === 'department_1') {
                e.stopPropagation()
                setActiveSector('sector_11_active')
              }
            }}
            animate={[selectedSector, activeSector]}
            variants={{
              sector_11_active: { y: 19 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                sector_11: { color: selectedColor },
                sector_11_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_12"
            geometry={nodes.Floor_12.geometry}
            position={[-13.08, -0.25, 50.03]}
            rotation={[Math.PI, 0, 0]}
            visible={activeDepartment === 'department_1'}
            onPointerOver={(e) => {
              if (activeDepartment === 'department_1') {
                e.stopPropagation()
                setSelectedSector('sector_12')
              }
            }}
            onPointerOut={() => setSelectedSector('none')}
            onClick={(e) => {
              if (activeDepartment === 'department_1') {
                e.stopPropagation()
                setActiveSector('sector_12_active')
              }
            }}
            animate={[selectedSector, activeSector]}
            variants={{
              sector_12_active: { y: 12 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                sector_12: { color: selectedColor },
                sector_12_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_13"
            geometry={nodes.Floor_13.geometry}
            position={[3.83, -0.25, 82.4]}
            rotation={[Math.PI, 0, 0]}
            visible={activeDepartment === 'department_1'}
            onPointerOver={(e) => {
              if (activeDepartment === 'department_1') {
                e.stopPropagation()
                setSelectedSector('sector_13')
              }
            }}
            onPointerOut={() => setSelectedSector('none')}
            onClick={(e) => {
              if (activeDepartment === 'department_1') {
                e.stopPropagation()
                setActiveSector('sector_13_active')
              }
            }}
            animate={[selectedSector, activeSector]}
            variants={{
              sector_13_active: { y: 12 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                sector_13: { color: selectedColor },
                sector_13_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_14"
            geometry={nodes.Floor_14.geometry}
            position={[-1.76, -0.25, -17.96]}
            rotation={[Math.PI, 0, 0]}
            visible={activeDepartment === 'department_1'}
            onPointerOver={(e) => {
              if (activeDepartment === 'department_1') {
                e.stopPropagation()
                setSelectedSector('sector_14')
              }
            }}
            onPointerOut={() => setSelectedSector('none')}
            onClick={(e) => {
              if (activeDepartment === 'department_1') {
                e.stopPropagation()
                setActiveSector('sector_14_active')
              }
            }}
            animate={[selectedSector, activeSector]}
            variants={{
              sector_14_active: { y: 19 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                sector_14: { color: selectedColor },
                sector_14_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_2"
            geometry={nodes.Floor_2.geometry}
            position={[8.47, -0.25, -106.61]}
            rotation={[Math.PI, 0, 0]}
            visible={activeDepartment === 'department_2'}
            onPointerOver={(e) => {
              if (activeDepartment === 'department_2') {
                e.stopPropagation()
                setSelectedSector('sector_21')
              }
            }}
            onPointerOut={() => setSelectedSector('none')}
            onClick={(e) => {
              if (activeDepartment === 'department_2') {
                e.stopPropagation()
                setActiveSector('sector_21_active')
              }
            }}
            animate={[selectedSector, activeSector]}
            variants={{
              sector_21_active: { y: 19 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                sector_21: { color: selectedColor },
                sector_21_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_31"
            geometry={nodes.Floor_31.geometry}
            position={[-155.03, -0.25, 109.67]}
            rotation={[Math.PI, Math.PI / 4, 0]}
            visible={activeDepartment === 'department_3'}
            onPointerOver={(e) => {
              if (activeDepartment === 'department_3') {
                e.stopPropagation()
                setSelectedSector('sector_31')
              }
            }}
            onPointerOut={() => setSelectedSector('none')}
            onClick={(e) => {
              if (activeDepartment === 'department_3') {
                e.stopPropagation()
                setActiveSector('sector_31_active')
              }
            }}
            animate={[selectedSector, activeSector]}
            variants={{
              sector_31_active: { y: 12 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                sector_31: { color: selectedColor },
                sector_31_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_32"
            geometry={nodes.Floor_32.geometry}
            position={[-97.98, -0.25, 51.74]}
            rotation={[Math.PI, Math.PI / 4, 0]}
            visible={activeDepartment === 'department_3'}
            onPointerOver={(e) => {
              if (activeDepartment === 'department_3') {
                e.stopPropagation()
                setSelectedSector('sector_32')
              }
            }}
            onPointerOut={() => setSelectedSector('none')}
            onClick={(e) => {
              if (activeDepartment === 'department_3') {
                e.stopPropagation()
                setActiveSector('sector_32_active')
              }
            }}
            animate={[selectedSector, activeSector]}
            variants={{
              sector_32_active: { y: 12 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                sector_32: { color: selectedColor },
                sector_32_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_33"
            geometry={nodes.Floor_33.geometry}
            position={[-42.01, -0.25, 64.78]}
            rotation={[Math.PI, 0, 0]}
            visible={activeDepartment === 'department_3'}
            onPointerOver={(e) => {
              if (activeDepartment === 'department_3') {
                e.stopPropagation()
                setSelectedSector('sector_33')
              }
            }}
            onPointerOut={() => setSelectedSector('none')}
            onClick={(e) => {
              if (activeDepartment === 'department_3') {
                e.stopPropagation()
                setActiveSector('sector_33_active')
              }
            }}
            animate={[selectedSector, activeSector]}
            variants={{
              sector_33_active: { y: 12 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                sector_33: { color: selectedColor },
                sector_33_active: { color: selectColor },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Floor_41"
            geometry={nodes.Floor_41.geometry}
            position={[-21.34, -0.25, -24.12]}
            rotation={[Math.PI, 0, 0]}
            visible={activeDepartment === 'department_4'}
            onPointerOver={(e) => {
              if (activeDepartment === 'department_4') {
                e.stopPropagation()
                setSelectedSector('sector_41')
              }
            }}
            onPointerOut={() => setSelectedSector('none')}
            onClick={(e) => {
              if (activeDepartment === 'department_4') {
                e.stopPropagation()
                setActiveSector('sector_41_active')
              }
            }}
            animate={[selectedSector, activeSector]}
            variants={{
              sector_41_active: { y: 12 },
            }}
          >
            <motion.meshStandardMaterial
              initial={{ color: activeColor }}
              variants={{
                sector_41: { color: selectedColor },
                sector_41_active: { color: selectColor },
              }}
            />
          </motion.mesh>

          <motion.mesh
            name="Label_11"
            position={[-25, 5, -9]}
            rotation={[-Math.PI / 2, 0, 0]}
            animate={[selectedSector, activeSector, activeDepartment]}
            variants={{
              sector_11: { y: 5 },
              sector_11_active: { y: 30, z: -6 },
            }}
          >
            <textGeometry
              args={['Участок №1', { font, size: 4, height: 0.1 }]}
            />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: textColor, opacity: 0 }}
              variants={{
                sector_11: { color: textSelectedColor },
                sector_11_active: { color: textSelectedColor },
                department_1: { opacity: 1 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_12"
            position={[-10, 5, 66]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectedSector, activeSector, activeDepartment]}
            variants={{
              sector_12: { y: 5 },
              sector_12_active: { y: 30, z: 64 },
            }}
          >
            <textGeometry
              args={['Участок №2', { font, size: 4, height: 0.1 }]}
            />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: textColor, opacity: 0 }}
              variants={{
                sector_12: { color: textSelectedColor },
                sector_12_active: { color: textSelectedColor },
                department_1: { opacity: 1 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_13"
            position={[27, 5, 108]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectedSector, activeSector, activeDepartment]}
            variants={{
              sector_13: { y: 5 },
              sector_13_active: { x: 24, y: 30, z: 100 },
            }}
          >
            <textGeometry
              args={['Участок №3', { font, size: 6, height: 0.1 }]}
            />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: textColor, opacity: 0 }}
              variants={{
                sector_13: { color: textSelectedColor },
                sector_13_active: { color: textSelectedColor },
                department_1: { opacity: 1 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_14_1"
            position={[-25, 5, 15]}
            rotation={[-Math.PI / 2, 0, 0]}
            animate={[selectedSector, activeSector, activeDepartment]}
            variants={{
              sector_14: { y: 5 },
              sector_14_active: { y: 30, z: 15 },
            }}
          >
            <textGeometry
              args={['Участок №4', { font, size: 5, height: 0.1 }]}
            />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: textColor, opacity: 0 }}
              variants={{
                sector_14: { color: textSelectedColor },
                sector_14_active: { color: textSelectedColor },
                department_1: { opacity: 1 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_14_2"
            position={[24, 5, -29]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectedSector, activeSector, activeDepartment]}
            variants={{
              sector_14: { y: 5 },
              sector_14_active: { x: 21, y: 30, z: -24 },
            }}
          >
            <textGeometry
              args={['Участок №4', { font, size: 3, height: 0.1 }]}
            />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: textColor, opacity: 0 }}
              variants={{
                sector_14: { color: textSelectedColor },
                sector_14_active: { color: textSelectedColor },
                department_1: { opacity: 1 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_21"
            position={[12, 5, -82]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectedSector, activeSector, activeDepartment]}
            variants={{
              sector_21: { y: 5 },
              sector_21_active: { x: 12, y: 30, z: -82 },
            }}
          >
            <textGeometry
              args={['Участок №1', { font, size: 6, height: 0.1 }]}
            />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: textColor, opacity: 0 }}
              variants={{
                sector_21: { color: textSelectedColor },
                sector_21_active: { color: textSelectedColor },
                department_2: { opacity: 1 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_31"
            position={[-166, 5, 124]}
            rotation={[-Math.PI / 2, 0, Math.PI / 4]}
            animate={[selectedSector, activeSector, activeDepartment]}
            variants={{
              sector_31: { y: 5 },
              sector_31_active: { x: -163, y: 30, z: 122 },
            }}
          >
            <textGeometry
              args={['Участок №1', { font, size: 4.5, height: 0.1 }]}
            />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: textColor, opacity: 0 }}
              variants={{
                sector_31: { color: textSelectedColor },
                sector_31_active: { color: textSelectedColor },
                department_3: { opacity: 1 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_32"
            position={[-126, 5, 82]}
            rotation={[-Math.PI / 2, 0, Math.PI / 4]}
            animate={[selectedSector, activeSector, activeDepartment]}
            variants={{
              sector_32: { y: 5 },
              sector_32_active: { x: -126, y: 30, z: 82 },
            }}
          >
            <textGeometry
              args={['Участок №2', { font, size: 4.5, height: 0.1 }]}
            />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: textColor, opacity: 0 }}
              variants={{
                sector_32: { color: textSelectedColor },
                sector_32_active: { color: textSelectedColor },
                department_3: { opacity: 1 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_33"
            position={[-40, 5, 70]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectedSector, activeSector, activeDepartment]}
            variants={{
              sector_33: { y: 5 },
              sector_33_active: { x: -45, y: 30, z: 70 },
            }}
          >
            <textGeometry
              args={['Участок №3', { font, size: 4, height: 0.1 }]}
            />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: textColor, opacity: 0 }}
              variants={{
                sector_33: { color: textSelectedColor },
                sector_33_active: { color: textSelectedColor },
                department_3: { opacity: 1 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_41_1"
            position={[-29, 5, -84]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[selectedSector, activeSector, activeDepartment]}
            variants={{
              sector_41: { y: 5 },
              sector_41_active: { x: -28, y: 30, z: -78 },
            }}
          >
            <textGeometry
              args={['Участок №1', { font, size: 5, height: 0.1 }]}
            />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: textColor, opacity: 0 }}
              variants={{
                sector_41: { color: textSelectedColor },
                sector_41_active: { color: textSelectedColor },
                department_4: { opacity: 1 },
              }}
            />
          </motion.mesh>
          <motion.mesh
            name="Label_41_2"
            position={[-25, 5, 90]}
            rotation={[-Math.PI / 2, 0, 0]}
            animate={[selectedSector, activeSector, activeDepartment]}
            variants={{
              sector_41: { y: 5 },
              sector_41_active: { x: -25, y: 30, z: 78 },
            }}
          >
            <textGeometry
              args={['Участок №1', { font, size: 2.8, height: 0.1 }]}
            />
            <motion.meshStandardMaterial
              transparent
              initial={{ color: textColor, opacity: 0 }}
              variants={{
                sector_41: { color: textSelectedColor },
                sector_41_active: { color: textSelectedColor },
                department_4: { opacity: 1 },
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
            if (activeDepartment === 'general') {
              e.stopPropagation()
              setSelectedDepartment('department_1_selected')
            }
          }}
          onPointerOut={() => {
            setSelectedDepartment('none')
          }}
          onClick={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              e.stopPropagation()
              setActiveDepartment('department_1')
            }
          }}
          animate={[activeDepartment]}
          variants={{
            department_1: { y: -15 },
          }}
        />
        <motion.mesh
          name="Workshop_2"
          geometry={nodes.Workshop_2.geometry}
          position={[8.47, 9.8, -106.61]}
          rotation={[-Math.PI, 0, 0]}
          visible={false}
          onPointerOver={(e) => {
            if (activeDepartment === 'general') {
              e.stopPropagation()
              setSelectedDepartment('department_2_selected')
            }
          }}
          onPointerOut={() => setSelectedDepartment('none')}
          onClick={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              e.stopPropagation()
              setActiveDepartment('department_2')
            }
          }}
          animate={[activeDepartment]}
          variants={{
            department_2: { y: -15 },
          }}
        />
        <motion.mesh
          name="Workshop_3"
          geometry={nodes.Workshop_3.geometry}
          position={[-107.81, 8.5, 73.44]}
          rotation={[Math.PI, 0, 0]}
          visible={false}
          onPointerOver={(e) => {
            if (activeDepartment === 'general') {
              e.stopPropagation()
              setSelectedDepartment('department_3_selected')
            }
          }}
          onPointerOut={() => setSelectedDepartment('none')}
          onClick={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              e.stopPropagation()
              setActiveDepartment('department_3')
            }
          }}
          animate={[activeDepartment]}
          variants={{
            department_3: { y: -15 },
          }}
        />
        <motion.mesh
          name="Workshop_4"
          geometry={nodes.Workshop_4.geometry}
          position={[-21.34, 9.8, -24.13]}
          rotation={[Math.PI, 0, 0]}
          visible={false}
          onPointerOver={(e) => {
            if (activeDepartment === 'general') {
              e.stopPropagation()
              setSelectedDepartment('department_4_selected')
            }
          }}
          onPointerOut={() => setSelectedDepartment('none')}
          onClick={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              e.stopPropagation()
              setActiveDepartment('department_4')
            }
          }}
          animate={[activeDepartment]}
          variants={{
            department_4: { y: -15 },
          }}
        />
      </group>
    </>
  )
}
