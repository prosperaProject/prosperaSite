import React from 'react'

export const CustomMenu = () => {
  return (
    <div className='menuContainer'>
        <div className="logoContainer">
            <h2>prospera</h2>
        </div>
        <div className="linksContainer">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>GOVERNANCE SERVICES</li>
                <li>BUSSINESS SERVICES</li>
                <li>PROJECTS</li>
                <li>RESOURCES</li>
                <li>START MY BUSSINESS</li>
                <li>CONTACT</li>
            </ul>
        </div>
        <div className="buttonsContainer">
            <button className="login">
                LOG IN
            </button>
            <select name="language" id="language">
                <option value="EN">EN</option>
                <option value="ES">ES</option>
            </select>
        </div>
    </div>
  )
}
