import React from 'react'

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__block">
          <div className="header__menu">
            <img src="img/menu.png" />
          </div>
          <div className="header__logo">
            <img src="img/logo.png" />
          </div>
        </div>
        <div className="header__block">
          <div className="header__calendar">
            <div className="header__calendar__data">07.12.2022</div>
            <img src="img/calendar.png" />
          </div>
          <div className="header__notification">
            <img src="img/notification.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
