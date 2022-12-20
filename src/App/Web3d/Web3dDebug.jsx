import { GizmoHelper, GizmoViewport, Stats } from '@react-three/drei'

import PropTypes from 'prop-types'
import React from 'react'

function Web3dDebug({ gizmo, grid, stats }) {
  return (
    <>
      {gizmo ? (
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport
            axisColors={['red', 'green', 'blue']}
            labelColor="black"
            axisHeadScale={0.7}
          />
        </GizmoHelper>
      ) : null}

      {grid ? (
        <>
          <gridHelper args={[80, 40]} />
          <axesHelper args={[5]} />
        </>
      ) : null}

      {stats ? <Stats className="three_stats" /> : null}
    </>
  )
}

Web3dDebug.propTypes = {
  gizmo: PropTypes.bool,
  grid: PropTypes.bool,
  stats: PropTypes.bool,
}

export default Web3dDebug
