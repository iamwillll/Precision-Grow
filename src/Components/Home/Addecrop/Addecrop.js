import React from 'react'
import './Addecrop.css'

const Addecrop = () => {
  return (
    <div>
      <div className='container-fixed ecrop-outer'>
        <section>
            <div className='container-fluid'>
                <div className='text-center mb-5'>
                <h1>Your Own Agriculture Assistant</h1>
                <h5 style={{color:'#164e4c'}}>Get real-time data on your crops and make informed decisions.</h5>
                </div>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='machinee'>
                            <img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/ecrop-machine.png' alt="ecrop-device"/>
                        </div>
                    </div>
                    <div className='col-lg-4 text-center'>
                       <div>
                       <p className='t1'>Manufactured & Marketed by</p>
                        <h1 style={{color:'#164e4c',margin:'0px',marginTop:'20px'}}>Precision Grow</h1>
                        <h5 style={{color:'#164e4c',marginBottom:'50px'}}>(A Unit of Tech Visit IT Pvt Ltd)</h5>
                        <div>
                        <p className='t1' style={{background:'#366da9'}}>Developed & Patented by</p>
                        <h2 style={{color:'#386102',margin:'0px',marginTop:'20px'}}>ICAR-Central Tuber Crops Research Institute</h2>
                        <ul className='ecrop_ul mt-4'>
                                <li>Patent No. 523325 </li> |
                                <li> Toll Free No. 18002688989</li>
                            </ul>
                            <div class="logo-list">
                            <ul>
                                <li><img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/logo-1.webp' className="logo" alt="logo"/></li>
                                <li><img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/logo-2.webp' className="logo" alt="logo"/></li>
                                <li><img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/logo-3.webp' className="logo" alt="logo"/></li>
                                <li><img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/logo-4.webp' className="logo" alt="logo"/></li>
                            </ul>
                        </div>
                        </div>
                       </div>
                    </div>
                    <div className='col-lg-4'>
                    <div class="agri">
                        <ul>
                            <li><span>1</span>Real-time crop health monitoring</li>
                            <li><span>2</span>Weather forecasts and alerts</li>
                            <li><span>3</span>Soil moisture and nutrient levels</li>
                            <li><span>4</span>Pest and disease detection</li>
                            <li><span>5</span>Personalized farming tips</li>
                        </ul>
                    </div>
                   
                    </div>
                </div>
            </div>
        </section>
        <div class="ceritified-icon">
                <ul class="hr-lines">
                         <li><img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/cer-logo-1.png' alt="logo"/></li>
                        <li><img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/cer-logo-2.png' alt="logo"/></li>
                        <li><img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/cer-logo-3.png' alt="logo"/></li>
                        <li><img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/cer-logo-4.png' alt="logo"/></li>
                    </ul>
                  </div>
      </div>
    </div>
  )
}

export default Addecrop
