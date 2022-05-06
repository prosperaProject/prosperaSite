import React from 'react'

export const CustomGraphic = () => {
  return (
    <div className='customGraphic'>
        <div className="title">
            <h2>
                A game changing ecosystem <br/> built for prosperity
            </h2>
        </div>
        <div className="infoContainer">
            <div className="services">
                <div className="bussiness">
                    <h4>
                        BUSINESS SUPPORT <br/> SERVICES
                    </h4>
                    <ul>
                        <li>Talent Acquisition</li>
                        <li>Payroll Compilance</li>
                        <li>Labor Benefit Fund</li>
                        <li>Labor Law Compilance</li>
                        <li>Capital Access</li>
                        <li>Legal Support</li>
                        <li>Market Support</li>
                        <li>Real Estate Support</li>
                    </ul>
                </div>
                <div className="governance">
                    <h4>
                        GOVERNANCE <br/> SERVICES
                    </h4>
                    <ul>
                        <li>Arbitration</li>
                        <li>Rules And Regulations</li>
                        <li>Compliance</li>
                        <li>Registries</li>
                        <li>Security</li>
                    </ul>
                </div>
            </div>
            <div className="imageSrc">
                <img src="http://local.prospera.com/wp-content/uploads/2022/05/graficas-prospera.png" alt="graphic" />
            </div>
        </div>
        <button>LEARN MORE</button>
    </div>
  )
}
