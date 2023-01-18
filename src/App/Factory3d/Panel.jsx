import React, { useEffect, useState } from 'react'

import { Spin } from 'antd'
import { getMachines } from './api'

function MachineInfo({ name, status }) {
  return (
    <div className="view3d__panel__machine__container">
      <div className="view3d__panel__machine__header">
        <div className="view3d__panel__machine__header__left">
          <div className="view3d__panel__machine__header__status">{status}</div>
          <div className="view3d__panel__machine__header__data">
            14.12.2022 11:47
          </div>
        </div>

        <div className="view3d__panel__machine__header__info">
          <img src="img/info.svg" />
        </div>
      </div>
      <div className="view3d__panel__machine__text">{name}</div>
    </div>
  )
}

export default function Panel({ activeSectorId }) {
  const [machinesData, setMachinesData] = useState(null)

  useEffect(() => {
    if (activeSectorId != undefined) {
      setMachinesData(null)
      getMachines(setMachinesData, activeSectorId)
    }
  }, [activeSectorId])

  return (
    <div className="view3d__panel__container">
      <Spin
        tip="Загрузка"
        size="large"
        spinning={machinesData == null}
        wrapperClassName="view3d__panel__spin"
      >
        <div className="view3d__panel__header">
          <div className="view3d__panel__title">
            <div className="view3d__panel__title__name">
              {machinesData?.sector}
            </div>
            <div className="view3d__panel__title__info">
              <img src="img/info.svg" />
            </div>
          </div>
          <div className="view3d__panel__indicators">
            <div className="view3d__panel__green_indicator">
              <img src="img/green_indicator.png" />
              {29}
            </div>
            <div className="view3d__panel__red_indicator">
              <img src="img/red_indicator.png" />
              {5}
            </div>
          </div>
        </div>
        <div className="view3d__panel__machines">
          {machinesData?.machines?.map((value, index) => {
            return (
              <MachineInfo
                name={value.name}
                status={value.status}
                key={index}
              />
            )
          })}
        </div>
      </Spin>
    </div>
  )
}
