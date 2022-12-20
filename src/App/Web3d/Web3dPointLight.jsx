import React, { useRef } from 'react'

import { PointLightHelper } from 'three'
import PropTypes from 'prop-types'
import { useHelper } from '@react-three/drei'

function Web3dPointLight({ props, helper = false }) {
  const lightRef = useRef()

  useHelper(helper ? lightRef : false, PointLightHelper, 2, 'black')

  return (
    <pointLight
      {...props}
      ref={lightRef}
      castShadow
      shadow-mapSize={[2048, 2048]}
      distance={600}
    />
  )
}

Web3dPointLight.propTypes = {
  props: PropTypes.object,
  helper: PropTypes.bool,
}

export default Web3dPointLight
