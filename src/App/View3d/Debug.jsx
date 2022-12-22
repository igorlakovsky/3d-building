import { Grid, OrbitControls, Stats } from '@react-three/drei'

import { DirectionalLightHelper } from 'three'
import PropTypes from 'prop-types'
import React from 'react'
import { useHelper } from '@react-three/drei'

function Debug({ grid, light, lightRef, stats, camera_control }) {
  useHelper(light ? lightRef : false, DirectionalLightHelper, 2, 'black')

  return (
    <>
      {grid ? (
        <Grid
          args={[80, 80]}
          cellSize={3}
          sectionSize={6}
          sectionColor={'#ff6000'}
          infiniteGrid
        />
      ) : null}
      {camera_control ? <OrbitControls /> : null}
      {stats ? <Stats className="three_stats" /> : null}
    </>
  )
}

Debug.propTypes = {
  grid: PropTypes.bool,
  stats: PropTypes.bool,
  light: PropTypes.bool,
}

export default Debug
