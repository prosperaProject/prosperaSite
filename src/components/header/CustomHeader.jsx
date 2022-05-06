// You can edit styles in styles/header
import React from 'react';

export const CustomHeader = () => { 
  return (
      <div className="headerBody">
          <div className="containerVideo">
            <video src='http://local.prospera.com/wp-content/uploads/2022/05/home.mp4' autoPlay loop muted/>
              <div className="overlay">
                
                  <h2>A powerful platform <br/>for prosperity. <br/>You’re welcome.</h2>
                  <p>Built by entrepreneurs for entrepreneurs, the Próspera Platform provides digital governance-as-a-service designed to stimulate growth, entrepreneurship, and innovation in Special Economic Zones — anywhere in the world. </p>
              </div>
            <div className="index">
                <p>HOMEPAGE</p>
            </div> 
          </div>
      </div>
    
  )
}
