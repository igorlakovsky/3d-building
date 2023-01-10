import React from 'react'

const machinesData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function MachineInfo() {
  return (
    <div className="view3d__panel__machine__container">
      <div className="view3d__panel__machine__header">
        <div className="view3d__panel__machine__header__left">
          <div className="view3d__panel__machine__header__status">ТО</div>
          <div className="view3d__panel__machine__header__data">
            14.12.2022 11:47
          </div>
        </div>

        <div className="view3d__panel__machine__header__info">
          <img src="img/info.svg" />
        </div>
      </div>
      <div className="view3d__panel__machine__text">
        Станок полуавтоматический сварки &quot;Карусель-2&quot;
      </div>
    </div>
  )
}

export default function Panel({ activeWorkshop }) {
  return (
    <div className="view3d__panel__container">
      <div className="view3d__panel__header">
        <div className="view3d__panel__title">
          <div className="view3d__panel__title__name">Радуга</div>
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
        {machinesData.map((value, index) => {
          return <MachineInfo key={index} />
        })}
      </div>
    </div>
  )
}
