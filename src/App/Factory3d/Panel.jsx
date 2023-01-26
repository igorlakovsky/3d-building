import React, { useEffect, useState } from 'react'

import { Spin } from 'antd'
import { getMachines } from './api'
import moment from 'moment'

// eslint-disable-next-line no-undef
const lk = process.env.REACT_APP_LK

function MachineInfo({ name, status, id, data }) {
  return (
    <div
      className="view3d__panel__machine__container"
      onClick={() => {
        window.top.location.href = lk + '/rmu/machine/' + id
      }}
    >
      <div className="view3d__panel__machine__header">
        <div className="view3d__panel__machine__header__left">
          {status == 'active' ? (
            <div className="view3d__panel__machine__header__status machine__status__active">
              Работает
            </div>
          ) : null}
          {status == 'service' ? (
            <div className="view3d__panel__machine__header__status machine__status__service">
              ТО
            </div>
          ) : null}
          {status == 'repair' ? (
            <div className="view3d__panel__machine__header__status machine__status__repaire">
              Поломка
            </div>
          ) : null}
          <div className="view3d__panel__machine__header__data">
            {moment(data).format('DD.MM.YYYY hh:mm')}
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

const getMachinesNumber = (data, status) => {
  let count = 0
  data?.machines.forEach((machine) => {
    if (machine.status == status) count++
  })
  return count
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
          </div>
          <div className="view3d__panel__indicators">
            <div className="view3d__panel__red_indicator">
              <img src="img/red_indicator.png" />
              {getMachinesNumber(machinesData, 'repair')}
            </div>
            <div className="view3d__panel__yellow_indicator">
              <img src="img/yellow_indicator.png" />
              {getMachinesNumber(machinesData, 'service')}
            </div>
            <div className="view3d__panel__green_indicator">
              <img src="img/green_indicator.png" />
              {getMachinesNumber(machinesData, 'active')}
            </div>
          </div>
        </div>
        <div className="view3d__panel__machines">
          {machinesData?.machines?.map((value, index) => {
            return (
              <MachineInfo
                name={value.name}
                status={value.status}
                id={value._id}
                key={index}
                data={value.updatedAt}
              />
            )
          })}
        </div>
      </Spin>
    </div>
  )
}
