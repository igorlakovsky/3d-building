import { Grid, OrbitControls, Stats } from '@react-three/drei'

import { DirectionalLightHelper } from 'three'
import PropTypes from 'prop-types'
import React from 'react'
import { useHelper } from '@react-three/drei'

function Debug({ grid, light, stats, cameraControl, lightRef, view3dRef }) {
  useHelper(light ? lightRef : false, DirectionalLightHelper, 2, 'black')

  return (
    <>
      {grid ? (
        <Grid
          args={[80, 80]}
          cellSize={3}
          sectionSize={6}
          sectionColor={'#ff6000'}
          fadeDistance={150}
          infiniteGrid
        />
      ) : null}
      {cameraControl ? <OrbitControls /> : null}
      {stats ? <Stats className="three_stats" parent={view3dRef} /> : null}
    </>
  )
}

Debug.propTypes = {
  grid: PropTypes.bool,
  stats: PropTypes.bool,
  light: PropTypes.bool,
  cameraControl: PropTypes.bool,
  lightRef: PropTypes.shape({ current: PropTypes.object }),
  view3dRef: PropTypes.shape({ current: PropTypes.object }),
}

export default Debug
