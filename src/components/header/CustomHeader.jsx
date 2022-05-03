import axios from 'axios';
import React, {useEffect} from 'react'
import Fade from 'react-reveal/Fade';

export const CustomHeader = (props) => {
    useEffect(() => {
        var config = {
            method: 'get',
            url: 'local.prospera.com/wp-json/wp/v2/media/31',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }, [])
    
  return (
      <div className="headerBody">
          <div className="containerVideo">
            <video src='http://local.prospera.com/wp-content/uploads/2022/05/home.mp4' autoPlay loop muted/>
              <div class="overlay">
                <Fade left>
                  <h2>A powerful platform <br/>for prosperity. <br/>You’re welcome.</h2>
                  <p>Built by entrepreneurs for entrepreneurs, the Próspera Platform provides digital governance-as-a-service designed to stimulate growth, entrepreneurship, and innovation in Special Economic Zones — anywhere in the world. </p>
                </Fade>
              </div>
            <div class="index">
              <Fade right>
                <p>HOMEPAGE</p>
              </Fade>
            </div> 
          </div>
      </div>
    
  )
}
