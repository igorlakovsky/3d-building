import { Plane, useGLTF } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import {
  activatedColor,
  activeColor,
  defaultColor,
  inactiveColor,
  repairColor,
  selectedColor,
  serviceColor,
  textColor,
  textRepairColor,
  textSelectedColor,
} from './const/factoryColor'
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

function findStatus(data, name) {
  return data.find((value) => value.name === name)?.status
}

const RoofMaterial = () => {
  return (
    <motion.meshStandardMaterial
      transparent
      initial={{ color: defaultColor }}
      variants={{
        invisible: { opacity: 0 },
        inactive: { color: inactiveColor },
        // selected: {
        //   color: selectedColor,
        // },
        active: { color: activeColor },
        service: {
          color: serviceColor,
          // transition: {
          //   // delay: 1,
          //   repeat: Infinity,
          //   repeatType: 'reverse',
          //   duration: 0.8,
          // },
        },
        repair: {
          color: repairColor,
          transition: {
            // delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.8,
          },
        },
      }}
    />
  )
}

const TextMaterial = () => {
  return (
    <motion.meshStandardMaterial
      transparent
      initial={{ color: textColor }}
      variants={{
        invisible: { opacity: 0 },
        inactive: { opacity: 0 },
        selected: { color: textSelectedColor },
        activated: { color: textSelectedColor },
        repair: {
          color: textRepairColor,
          transition: {
            // delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.8,
          },
        },
      }}
    />
  )
}

const SectorMaterial = () => {
  return (
    <motion.meshStandardMaterial
      initial={{ color: defaultColor }}
      variants={{
        selected: { color: selectedColor },
        activated: { color: activatedColor },
        active: { color: activeColor },
        service: { color: serviceColor },
        repair: {
          color: repairColor,
          transition: {
            // delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.8,
          },
        },
      }}
    />
  )
}

export function Factory({
  props,
  activeDepartment,
  setActiveDepartment,
  setActiveSectorId,
}) {
  const { nodes } = useGLTF('/factory.glb')
  const font = useLoader(FontLoader, '/Inter_Bold.json')

  const [activeSector, setActiveSector] = useState('none')

  const [selectedDepartment, setSelectedDepartment] = useState('none')
  const [selectedSector, setSelectedSector] = useState('none')

  const [departmentsData, setDepartmentsData] = useState([])
  const [departmentsDataStatus, setDepartmentsDataStatus] = useState('idle')
  const [sectorsData, setSectorsData] = useState([])

  const [departmentsStatus, setDepartmentsStatus] = useState({
    department_1: 'auto',
    department_2: 'auto',
    department_3: 'auto',
    department_4: 'auto',
  })

  const [sectorsStatus, setSectorsStatus] = useState({
    sector_11: 'auto',
    sector_12: 'auto',
    sector_13: 'auto',
    sector_14: 'auto',
    sector_21: 'auto',
    sector_31: 'auto',
    sector_32: 'auto',
    sector_33: 'auto',
    sector_41: 'auto',
  })

  useEffect(() => {
    if (activeDepartment == 'general')
      getDepartments(setDepartmentsData, setDepartmentsDataStatus)

    if (departmentsDataStatus == 'success') {
      if (activeDepartment == 'department_1')
        getSectors(
          setSectorsData,
          findId(departmentsData.departments, 'цех №1')
        )
      if (activeDepartment == 'department_2')
        getSectors(
          setSectorsData,
          findId(departmentsData.departments, 'цех №2')
        )
      if (activeDepartment == 'department_3')
        getSectors(
          setSectorsData,
          findId(departmentsData.departments, 'цех №3')
        )
      if (activeDepartment == 'department_4')
        getSectors(
          setSectorsData,
          findId(departmentsData.departments, 'цех №4')
        )
    }
  }, [activeDepartment])

  useEffect(() => {
    if (activeSector == 'sector_11_active')
      setActiveSectorId(findId(sectorsData, 'Участок №1'))
    if (activeSector == 'sector_12_active')
      setActiveSectorId(findId(sectorsData, 'Участок №2'))
    if (activeSector == 'sector_13_active')
      setActiveSectorId(findId(sectorsData, 'Участок №3'))
    if (activeSector == 'sector_14_active')
      setActiveSectorId(findId(sectorsData, 'Участок №4'))
    if (activeSector == 'sector_21_active')
      setActiveSectorId(findId(sectorsData, 'Участок №1'))
    if (activeSector == 'sector_31_active')
      setActiveSectorId(findId(sectorsData, 'Участок №1'))
    if (activeSector == 'sector_32_active')
      setActiveSectorId(findId(sectorsData, 'Участок №2'))
    if (activeSector == 'sector_33_active')
      setActiveSectorId(findId(sectorsData, 'Участок №3'))
    if (activeSector == 'sector_41_active')
      setActiveSectorId(findId(sectorsData, 'Участок №1'))
  }, [activeSector])

  useEffect(() => {
    if (departmentsData?.departments) {
      if (departmentsStatus.department_1 == 'auto')
        setDepartmentsStatus((state) => ({
          ...state,
          department_1: findStatus(departmentsData.departments, 'цех №1'),
        }))
      if (departmentsStatus.department_2 == 'auto')
        setDepartmentsStatus((state) => ({
          ...state,
          department_2: findStatus(departmentsData.departments, 'цех №2'),
        }))
      if (departmentsStatus.department_3 == 'auto')
        setDepartmentsStatus((state) => ({
          ...state,
          department_3: findStatus(departmentsData.departments, 'цех №3'),
        }))
      if (departmentsStatus.department_4 == 'auto')
        setDepartmentsStatus((state) => ({
          ...state,
          department_4: findStatus(departmentsData.departments, 'цех №4'),
        }))
    }
  }, [departmentsStatus, departmentsData])

  useEffect(() => {
    if (sectorsData.length > 0) {
      if (
        sectorsStatus.sector_11 == 'auto' &&
        activeDepartment == 'department_1'
      )
        setSectorsStatus((state) => ({
          ...state,
          sector_11: findStatus(sectorsData, 'Участок №1'),
        }))
      if (
        sectorsStatus.sector_12 == 'auto' &&
        activeDepartment == 'department_1'
      )
        setSectorsStatus((state) => ({
          ...state,
          sector_12: findStatus(sectorsData, 'Участок №2'),
        }))
      if (
        sectorsStatus.sector_13 == 'auto' &&
        activeDepartment == 'department_1'
      )
        setSectorsStatus((state) => ({
          ...state,
          sector_13: findStatus(sectorsData, 'Участок №3'),
        }))
      if (
        sectorsStatus.sector_14 == 'auto' &&
        activeDepartment == 'department_1'
      )
        setSectorsStatus((state) => ({
          ...state,
          sector_14: findStatus(sectorsData, 'Участок №4'),
        }))
      if (
        sectorsStatus.sector_21 == 'auto' &&
        activeDepartment == 'department_2'
      )
        setSectorsStatus((state) => ({
          ...state,
          sector_21: findStatus(sectorsData, 'Участок №1'),
        }))
      if (
        sectorsStatus.sector_31 == 'auto' &&
        activeDepartment == 'department_3'
      )
        setSectorsStatus((state) => ({
          ...state,
          sector_31: findStatus(sectorsData, 'Участок №1'),
        }))
      if (
        sectorsStatus.sector_32 == 'auto' &&
        activeDepartment == 'department_3'
      )
        setSectorsStatus((state) => ({
          ...state,
          sector_32: findStatus(sectorsData, 'Участок №2'),
        }))
      if (
        sectorsStatus.sector_33 == 'auto' &&
        activeDepartment == 'department_3'
      )
        setSectorsStatus((state) => ({
          ...state,
          sector_33: findStatus(sectorsData, 'Участок №3'),
        }))
      if (
        sectorsStatus.sector_41 == 'auto' &&
        activeDepartment == 'department_4'
      )
        setSectorsStatus((state) => ({
          ...state,
          sector_41: findStatus(sectorsData, 'Участок №1'),
        }))
    }
  }, [sectorsStatus, sectorsData])

  return (
    <>
      <Plane
        args={[150, 150]}
        position={[0, -0.1, 0]}
        rotation={[-3.14 / 2, 0, 0]}
        visible={false}
        receiveShadow
        onClick={(e) => {
          setActiveDepartment('general')
          setActiveSector('none')
          setActiveSectorId(undefined)
          setSelectedDepartment('none')
          if (
            departmentsStatus.department_1 === 'invisible' ||
            departmentsStatus.department_1 === 'inactive'
          ) {
            setDepartmentsStatus({
              department_1: 'auto',
              department_2: 'auto',
              department_3: 'auto',
              department_4: 'auto',
            })
          }
          setSectorsStatus({
            sector_11: 'auto',
            sector_12: 'auto',
            sector_13: 'auto',
            sector_14: 'auto',
            sector_21: 'auto',
            sector_31: 'auto',
            sector_32: 'auto',
            sector_33: 'auto',
            sector_41: 'auto',
          })
          e.stopPropagation()
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
            animate={[departmentsStatus.department_1, selectedDepartment]}
            variants={{
              department_1_selected: { y: 20 },
            }}
          >
            <RoofMaterial />
          </motion.mesh>
          <motion.mesh
            name="Label_1"
            position={[4, 28, 81]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[departmentsStatus.department_1, selectedDepartment]}
            variants={{
              department_1_selected: { y: 36 },
            }}
          >
            <textGeometry args={['Цех №1', { font, size: 16, height: 0.1 }]} />
            <TextMaterial />
          </motion.mesh>

          <motion.mesh
            name="Roof_2"
            geometry={nodes.Roof_2.geometry}
            position={[8.47, 19.47, -106.61]}
            scale={[0.75, 0.7, 0.5]}
            animate={[departmentsStatus.department_2, selectedDepartment]}
            variants={{
              department_2_selected: { y: 25 },
            }}
          >
            <RoofMaterial />
          </motion.mesh>
          <motion.mesh
            name="Label_2"
            position={[20, 32, -62]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[departmentsStatus.department_2, selectedDepartment]}
            variants={{
              department_2_selected: { y: 39 },
            }}
          >
            <textGeometry args={['Цех №2', { font, size: 10, height: 0.1 }]} />
            <TextMaterial />
          </motion.mesh>

          <motion.mesh
            name="Roof_3"
            geometry={nodes.Roof_3.geometry}
            position={[-109.94, 15.8, 82.58]}
            scale={[0.75, 0.7, 0.5]}
            animate={[departmentsStatus.department_3, selectedDepartment]}
            variants={{
              department_3_selected: { y: 20 },
            }}
          >
            <RoofMaterial />
          </motion.mesh>
          <motion.mesh
            name="Label_3"
            position={[-138, 24, 116]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2 - 0.75]}
            animate={[departmentsStatus.department_3, selectedDepartment]}
            variants={{
              department_3_selected: { y: 30 },
            }}
          >
            <textGeometry args={['Цех №3', { font, size: 10, height: 0.1 }]} />
            <TextMaterial />
          </motion.mesh>

          <motion.mesh
            name="Roof_4"
            geometry={nodes.Roof_4.geometry}
            position={[-21.34, 17.2, -24.13]}
            scale={[0.75, 0.7, 0.5]}
            animate={[departmentsStatus.department_4, selectedDepartment]}
            variants={{
              department_4_selected: { y: 23 },
            }}
          >
            <RoofMaterial />
          </motion.mesh>
          <motion.mesh
            name="Label_4"
            position={[-16, 32, -62]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            animate={[departmentsStatus.department_4, selectedDepartment]}
            variants={{
              department_4_selected: { y: 40 },
            }}
          >
            <textGeometry args={['Цех №4', { font, size: 8, height: 0.1 }]} />
            <TextMaterial />
          </motion.mesh>
        </MotionConfig>

        <MotionConfig
          transition={{ type: 'tween', duration: 0.1, ease: 'easeOut' }}
        >
          <motion.mesh
            name="Sector_11"
            geometry={nodes.Floor_11.geometry}
            position={[-9.58, -0.25, 3.15]}
            rotation={[Math.PI, 0, 0]}
            visible={activeDepartment === 'department_1'}
            animate={[sectorsStatus.sector_11, activeSector, selectedSector]}
            variants={{
              sector_11_selected: { y: 5 },
              sector_11_active: { y: 19 },
            }}
            onPointerOver={(e) => {
              if (
                activeDepartment === 'department_1' &&
                activeSector !== 'sector_11_active'
              ) {
                e.stopPropagation()
                setSelectedSector('sector_11_selected')
              }
            }}
            onPointerOut={(e) => {
              if (
                activeDepartment === 'department_1' &&
                activeSector !== 'sector_11_active'
              ) {
                e.stopPropagation()
                setSelectedSector('none')
              }
            }}
            onClick={(e) => {
              if (activeDepartment === 'department_1') {
                e.stopPropagation()
                setActiveSector('sector_11_active')
                setSelectedSector('none')
              }
            }}
          >
            <SectorMaterial />
          </motion.mesh>
          <motion.mesh
            name="Label_11"
            position={[-25, 5, -9]}
            rotation={[-Math.PI / 2, 0, 0]}
            visible={activeDepartment === 'department_1'}
            animate={[sectorsStatus.sector_11, activeSector, selectedSector]}
            initial={{ y: 5 }}
            variants={{
              sector_11_selected: { y: 10 },
              sector_11_active: { y: 30, z: -6 },
            }}
          >
            <textGeometry
              args={['Участок №1', { font, size: 4, height: 0.1 }]}
            />
            <TextMaterial />
          </motion.mesh>

          <motion.mesh
            name="Sector_12"
            geometry={nodes.Floor_12.geometry}
            position={[-13.08, -0.25, 50.03]}
            rotation={[Math.PI, 0, 0]}
            visible={activeDepartment === 'department_1'}
            animate={[sectorsStatus.sector_12, activeSector, selectedSector]}
            variants={{
              sector_12_selected: { y: 5 },
              sector_12_active: { y: 19 },
            }}
            onPointerOver={(e) => {
              if (
                activeDepartment === 'department_1' &&
                activeSector !== 'sector_12_active'
              ) {
                e.stopPropagation()
                setSelectedSector('sector_12_selected')
              }
            }}
            onPointerOut={(e) => {
              if (
                activeDepartment === 'department_1' &&
                activeSector !== 'sector_12_active'
              ) {
                e.stopPropagation()
                setSelectedSector('none')
              }
            }}
            onClick={(e) => {
              if (activeDepartment === 'department_1') {
                e.stopPropagation()
                setActiveSector('sector_12_active')
                setSelectedSector('none')
              }
            }}
          >
            <SectorMaterial />
          </motion.mesh>
          <motion.mesh
            name="Label_12"
            position={[-10, 5, 66]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            visible={activeDepartment === 'department_1'}
            animate={[sectorsStatus.sector_12, activeSector, selectedSector]}
            initial={{ y: 5 }}
            variants={{
              sector_12_selected: { y: 10 },
              sector_12_active: { y: 30, z: 64 },
            }}
          >
            <textGeometry
              args={['Участок №2', { font, size: 4, height: 0.1 }]}
            />
            <TextMaterial />
          </motion.mesh>

          <motion.mesh
            name="Sector_13"
            geometry={nodes.Floor_13.geometry}
            position={[3.83, -0.25, 82.4]}
            rotation={[Math.PI, 0, 0]}
            visible={activeDepartment === 'department_1'}
            animate={[sectorsStatus.sector_13, activeSector, selectedSector]}
            variants={{
              sector_13_selected: { y: 5 },
              sector_13_active: { y: 12 },
            }}
            onPointerOver={(e) => {
              if (
                activeDepartment === 'department_1' &&
                activeSector !== 'sector_13_active'
              ) {
                e.stopPropagation()
                setSelectedSector('sector_13_selected')
              }
            }}
            onPointerOut={(e) => {
              if (
                activeDepartment === 'department_1' &&
                activeSector !== 'sector_13_active'
              ) {
                e.stopPropagation()
                setSelectedSector('none')
              }
            }}
            onClick={(e) => {
              if (activeDepartment === 'department_1') {
                e.stopPropagation()
                setActiveSector('sector_13_active')
                setSelectedSector('none')
              }
            }}
          >
            <SectorMaterial />
          </motion.mesh>
          <motion.mesh
            name="Label_13"
            position={[27, 5, 108]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            visible={activeDepartment === 'department_1'}
            animate={[sectorsStatus.sector_13, activeSector, selectedSector]}
            initial={{ y: 5 }}
            variants={{
              sector_13_selected: { y: 10 },
              sector_13_active: { x: 24, y: 30, z: 100 },
            }}
          >
            <textGeometry
              args={['Участок №3', { font, size: 6, height: 0.1 }]}
            />
            <TextMaterial />
          </motion.mesh>

          <motion.mesh
            name="Sector_14"
            geometry={nodes.Floor_14.geometry}
            position={[-1.76, -0.25, -17.96]}
            rotation={[Math.PI, 0, 0]}
            visible={activeDepartment === 'department_1'}
            animate={[sectorsStatus.sector_14, activeSector, selectedSector]}
            variants={{
              sector_14_selected: { y: 5 },
              sector_14_active: { y: 19 },
            }}
            onPointerOver={(e) => {
              if (
                activeDepartment === 'department_1' &&
                activeSector !== 'sector_14_active'
              ) {
                e.stopPropagation()
                setSelectedSector('sector_14_selected')
              }
            }}
            onPointerOut={(e) => {
              if (
                activeDepartment === 'department_1' &&
                activeSector !== 'sector_14_active'
              ) {
                e.stopPropagation()
                setSelectedSector('none')
              }
            }}
            onClick={(e) => {
              if (activeDepartment === 'department_1') {
                e.stopPropagation()
                setActiveSector('sector_14_active')
                setSelectedSector('none')
              }
            }}
          >
            <SectorMaterial />
          </motion.mesh>
          <motion.mesh
            name="Label_14_1"
            position={[-25, 5, 15]}
            rotation={[-Math.PI / 2, 0, 0]}
            visible={activeDepartment === 'department_1'}
            animate={[sectorsStatus.sector_14, activeSector, selectedSector]}
            initial={{ y: 5 }}
            variants={{
              sector_14_selected: { y: 10 },
              sector_14_active: { y: 30, z: 15 },
            }}
          >
            <textGeometry
              args={['Участок №4', { font, size: 5, height: 0.1 }]}
            />
            <TextMaterial />
          </motion.mesh>
          <motion.mesh
            name="Label_14_2"
            position={[24, 5, -29]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            visible={activeDepartment === 'department_1'}
            animate={[sectorsStatus.sector_14, activeSector, selectedSector]}
            initial={{ y: 5 }}
            variants={{
              sector_14_selected: { y: 10 },
              sector_14_active: { x: 21, y: 30, z: -24 },
            }}
          >
            <textGeometry
              args={['Участок №4', { font, size: 3, height: 0.1 }]}
            />
            <TextMaterial />
          </motion.mesh>

          <motion.mesh
            name="Sector_21"
            geometry={nodes.Floor_2.geometry}
            position={[8.47, -0.25, -106.61]}
            rotation={[Math.PI, 0, 0]}
            visible={activeDepartment === 'department_2'}
            animate={[sectorsStatus.sector_21, activeSector, selectedSector]}
            variants={{
              sector_21_selected: { y: 5 },
              sector_21_active: { y: 19 },
            }}
            onPointerOver={(e) => {
              if (
                activeDepartment === 'department_2' &&
                activeSector !== 'sector_21_active'
              ) {
                e.stopPropagation()
                setSelectedSector('sector_21_selected')
              }
            }}
            onPointerOut={(e) => {
              if (
                activeDepartment === 'department_2' &&
                activeSector !== 'sector_21_active'
              ) {
                e.stopPropagation()
                setSelectedSector('none')
              }
            }}
            onClick={(e) => {
              if (activeDepartment === 'department_2') {
                e.stopPropagation()
                setActiveSector('sector_21_active')
                setSelectedSector('none')
              }
            }}
          >
            <SectorMaterial />
          </motion.mesh>
          <motion.mesh
            name="Label_21"
            position={[12, 5, -82]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            visible={activeDepartment === 'department_2'}
            animate={[sectorsStatus.sector_21, activeSector, selectedSector]}
            initial={{ y: 5 }}
            variants={{
              sector_21_selected: { y: 10 },
              sector_21_active: { x: 12, y: 30, z: -82 },
            }}
          >
            <textGeometry
              args={['Участок №1', { font, size: 6, height: 0.1 }]}
            />
            <TextMaterial />
          </motion.mesh>

          <motion.mesh
            name="Sector_31"
            geometry={nodes.Floor_31.geometry}
            position={[-155.03, -0.25, 109.67]}
            rotation={[Math.PI, Math.PI / 4, 0]}
            visible={activeDepartment === 'department_3'}
            animate={[sectorsStatus.sector_31, activeSector, selectedSector]}
            variants={{
              sector_31_selected: { y: 5 },
              sector_31_active: { y: 12 },
            }}
            onPointerOver={(e) => {
              if (
                activeDepartment === 'department_3' &&
                activeSector !== 'sector_31_active'
              ) {
                e.stopPropagation()
                setSelectedSector('sector_31_selected')
              }
            }}
            onPointerOut={(e) => {
              if (
                activeDepartment === 'department_3' &&
                activeSector !== 'sector_31_active'
              ) {
                e.stopPropagation()
                setSelectedSector('none')
              }
            }}
            onClick={(e) => {
              if (activeDepartment === 'department_3') {
                e.stopPropagation()
                setActiveSector('sector_31_active')
                setSelectedSector('none')
              }
            }}
          >
            <SectorMaterial />
          </motion.mesh>
          <motion.mesh
            name="Label_31"
            position={[-166, 5, 124]}
            rotation={[-Math.PI / 2, 0, Math.PI / 4]}
            visible={activeDepartment === 'department_3'}
            animate={[sectorsStatus.sector_31, activeSector, selectedSector]}
            initial={{ y: 5 }}
            variants={{
              sector_31_selected: { y: 10 },
              sector_31_active: { x: -163, y: 30, z: 122 },
            }}
          >
            <textGeometry
              args={['Участок №1', { font, size: 4.5, height: 0.1 }]}
            />
            <TextMaterial />
          </motion.mesh>

          <motion.mesh
            name="Sector_32"
            geometry={nodes.Floor_32.geometry}
            position={[-97.98, -0.25, 51.74]}
            rotation={[Math.PI, Math.PI / 4, 0]}
            visible={activeDepartment === 'department_3'}
            animate={[sectorsStatus.sector_32, activeSector, selectedSector]}
            variants={{
              sector_32_selected: { y: 5 },
              sector_32_active: { y: 12 },
            }}
            onPointerOver={(e) => {
              if (
                activeDepartment === 'department_3' &&
                activeSector !== 'sector_32_active'
              ) {
                e.stopPropagation()
                setSelectedSector('sector_32_selected')
              }
            }}
            onPointerOut={(e) => {
              if (
                activeDepartment === 'department_3' &&
                activeSector !== 'sector_32_active'
              ) {
                e.stopPropagation()
                setSelectedSector('none')
              }
            }}
            onClick={(e) => {
              if (activeDepartment === 'department_3') {
                e.stopPropagation()
                setActiveSector('sector_32_active')
                setSelectedSector('none')
              }
            }}
          >
            <SectorMaterial />
          </motion.mesh>
          <motion.mesh
            name="Label_32"
            position={[-126, 5, 82]}
            rotation={[-Math.PI / 2, 0, Math.PI / 4]}
            visible={activeDepartment === 'department_3'}
            animate={[sectorsStatus.sector_32, activeSector, selectedSector]}
            initial={{ y: 5 }}
            variants={{
              sector_32_selected: { y: 10 },
              sector_32_active: { x: -126, y: 30, z: 82 },
            }}
          >
            <textGeometry
              args={['Участок №2', { font, size: 4.5, height: 0.1 }]}
            />
            <TextMaterial />
          </motion.mesh>

          <motion.mesh
            name="Sector_33"
            geometry={nodes.Floor_33.geometry}
            position={[-42.01, -0.25, 64.78]}
            rotation={[Math.PI, 0, 0]}
            visible={activeDepartment === 'department_3'}
            animate={[sectorsStatus.sector_33, activeSector, selectedSector]}
            variants={{
              sector_33_selected: { y: 5 },
              sector_33_active: { y: 12 },
            }}
            onPointerOver={(e) => {
              if (
                activeDepartment === 'department_3' &&
                activeSector !== 'sector_33_active'
              ) {
                e.stopPropagation()
                setSelectedSector('sector_33_selected')
              }
            }}
            onPointerOut={(e) => {
              if (
                activeDepartment === 'department_3' &&
                activeSector !== 'sector_33_active'
              ) {
                e.stopPropagation()
                setSelectedSector('none')
              }
            }}
            onClick={(e) => {
              if (activeDepartment === 'department_3') {
                e.stopPropagation()
                setActiveSector('sector_33_active')
                setSelectedSector('none')
              }
            }}
          >
            <SectorMaterial />
          </motion.mesh>
          <motion.mesh
            name="Label_33"
            position={[-40, 5, 70]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            visible={activeDepartment === 'department_3'}
            animate={[sectorsStatus.sector_33, activeSector, selectedSector]}
            initial={{ y: 5 }}
            variants={{
              sector_33_selected: { y: 10 },
              sector_33_active: { x: -45, y: 30, z: 70 },
            }}
          >
            <textGeometry
              args={['Участок №3', { font, size: 4, height: 0.1 }]}
            />
            <TextMaterial />
          </motion.mesh>

          <motion.mesh
            name="Sector_41"
            geometry={nodes.Floor_41.geometry}
            position={[-21.34, -0.25, -24.12]}
            rotation={[Math.PI, 0, 0]}
            visible={activeDepartment === 'department_4'}
            animate={[sectorsStatus.sector_41, activeSector, selectedSector]}
            variants={{
              sector_41_selected: { y: 5 },
              sector_41_active: { y: 12 },
            }}
            onPointerOver={(e) => {
              if (
                activeDepartment === 'department_4' &&
                activeSector !== 'sector_41_active'
              ) {
                e.stopPropagation()
                setSelectedSector('sector_41_selected')
              }
            }}
            onPointerOut={(e) => {
              if (
                activeDepartment === 'department_4' &&
                activeSector !== 'sector_41_active'
              ) {
                e.stopPropagation()
                setSelectedSector('none')
              }
            }}
            onClick={(e) => {
              if (activeDepartment === 'department_4') {
                e.stopPropagation()
                setActiveSector('sector_41_active')
                setSelectedSector('none')
              }
            }}
          >
            <SectorMaterial />
          </motion.mesh>
          <motion.mesh
            name="Label_41_1"
            position={[-29, 5, -84]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            visible={activeDepartment === 'department_4'}
            animate={[sectorsStatus.sector_41, activeSector, selectedSector]}
            initial={{ y: 5 }}
            variants={{
              sector_41_selected: { y: 10 },
              sector_41_active: { x: -28, y: 30, z: -78 },
            }}
          >
            <textGeometry
              args={['Участок №1', { font, size: 5, height: 0.1 }]}
            />
            <TextMaterial />
          </motion.mesh>
          <motion.mesh
            name="Label_41_2"
            position={[-25, 5, 90]}
            rotation={[-Math.PI / 2, 0, 0]}
            visible={activeDepartment === 'department_4'}
            animate={[sectorsStatus.sector_41, activeSector, selectedSector]}
            initial={{ y: 5 }}
            variants={{
              sector_41_selected: { y: 10 },
              sector_41_active: { x: -25, y: 30, z: 78 },
            }}
          >
            <textGeometry
              args={['Участок №1', { font, size: 2.8, height: 0.1 }]}
            />
            <TextMaterial />
          </motion.mesh>
        </MotionConfig>

        <motion.mesh
          name="Workshop_1"
          geometry={nodes.Workshop_1.geometry}
          position={[-9.58, 9.8, 37.79]}
          rotation={[-Math.PI, 0, 0]}
          visible={false}
          animate={[activeDepartment]}
          variants={{
            department_1: { y: -15 },
          }}
          onPointerOver={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              e.stopPropagation()
              setSelectedDepartment('department_1_selected')
            }
          }}
          onPointerOut={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              e.stopPropagation()
              setSelectedDepartment('none')
            }
          }}
          onClick={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              setActiveDepartment('department_1')
              setDepartmentsStatus({
                department_1: 'invisible',
                department_2: 'inactive',
                department_3: 'inactive',
                department_4: 'inactive',
              })
              e.stopPropagation()
            }
          }}
        />

        <motion.mesh
          name="Workshop_2"
          geometry={nodes.Workshop_2.geometry}
          position={[8.47, 9.8, -106.61]}
          rotation={[-Math.PI, 0, 0]}
          visible={false}
          animate={[activeDepartment]}
          variants={{
            department_2: { y: -15 },
          }}
          onPointerOver={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              e.stopPropagation()
              setSelectedDepartment('department_2_selected')
            }
          }}
          onPointerOut={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              e.stopPropagation()
              setSelectedDepartment('none')
            }
          }}
          onClick={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              setActiveDepartment('department_2')
              setDepartmentsStatus({
                department_1: 'inactive',
                department_2: 'invisible',
                department_3: 'inactive',
                department_4: 'inactive',
              })
              e.stopPropagation()
            }
          }}
        />

        <motion.mesh
          name="Workshop_3"
          geometry={nodes.Workshop_3.geometry}
          position={[-107.81, 8.5, 73.44]}
          rotation={[Math.PI, 0, 0]}
          visible={false}
          animate={[activeDepartment]}
          variants={{
            department_3: { y: -15 },
          }}
          onPointerOver={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              e.stopPropagation()
              setSelectedDepartment('department_3_selected')
            }
          }}
          onPointerOut={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              e.stopPropagation()
              setSelectedDepartment('none')
            }
          }}
          onClick={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              setActiveDepartment('department_3')
              setDepartmentsStatus({
                department_1: 'inactive',
                department_2: 'inactive',
                department_3: 'invisible',
                department_4: 'inactive',
              })
              e.stopPropagation()
            }
          }}
        />

        <motion.mesh
          name="Workshop_4"
          geometry={nodes.Workshop_4.geometry}
          position={[-21.34, 9.8, -24.13]}
          rotation={[Math.PI, 0, 0]}
          visible={false}
          animate={[activeDepartment]}
          variants={{
            department_4: { y: -15 },
          }}
          onPointerOver={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              e.stopPropagation()
              setSelectedDepartment('department_4_selected')
            }
          }}
          onPointerOut={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              e.stopPropagation()
              setSelectedDepartment('none')
            }
          }}
          onClick={(e) => {
            if (
              activeDepartment === 'general' &&
              departmentsDataStatus == 'success'
            ) {
              setActiveDepartment('department_4')
              setDepartmentsStatus({
                department_1: 'inactive',
                department_2: 'inactive',
                department_3: 'inactive',
                department_4: 'invisible',
              })
              e.stopPropagation()
            }
          }}
        />
      </group>
    </>
  )
}
