import React, { useRef } from 'react'

import { PointLightHelper } from 'three'
import PropTypes from 'prop-types'
import { useHelper } from '@react-three/drei'

function PointLightW3E({ props, helper = false }) {
  const lightRef = useRef()

  useHelper(helper ? lightRef : false, PointLightHelper, 2, 'black')

  return (
    <>
      <pointLight
        {...props}
        ref={lightRef}
        castShadow
        shadow-mapSize={[2048, 2048]}
        distance={600}
      />
    </>
  )
}

PointLightW3E.propTypes = {
  props: PropTypes.object,
  helper: PropTypes.bool,
}

export default PointLightW3E
