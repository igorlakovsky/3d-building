import React, { useRef } from 'react'

import { PointLightHelper } from 'three'
import { useHelper } from '@react-three/drei'

export default function PointLightX({ props, helper = false }) {
  const lightRef = useRef()

  useHelper(helper ? lightRef : false, PointLightHelper, 2, 'black')

  return (
    <>
      <pointLight ref={lightRef} {...props} />
    </>
  )
}
