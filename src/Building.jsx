import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Building(props) {
  const { nodes } = useGLTF('/building.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.WallsBig.geometry}>
        <meshStandardMaterial color={'white'} />
      </mesh>
      <mesh geometry={nodes.RoofSmall.geometry} position={[18, 9.85, -7.38]}>
        <meshStandardMaterial color={'white'} />
      </mesh>
      <mesh geometry={nodes.RoofBig.geometry} position={[12, 9.35, 0.5]}>
        <meshStandardMaterial color={'white'} />
      </mesh>
      <mesh geometry={nodes.FloorSmall.geometry} position={[18, 0.39, -7.38]}>
        <meshStandardMaterial color={'white'} />
      </mesh>
      <mesh geometry={nodes.FloorBig.geometry} position={[12, -0.11, 0.5]}>
        <meshStandardMaterial color={'white'} />
      </mesh>
      <mesh geometry={nodes.WallsSmall.geometry}>
        <meshStandardMaterial color={'white'} />
      </mesh>
    </group>
  )
}
