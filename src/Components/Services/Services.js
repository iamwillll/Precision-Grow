import React from 'react'
import Banner from '../Banner/Banner'
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.css'
const Services = () => {
  const breadcrumbItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' }
  ];
  return (
    <div>
     <Banner 
        title="Services"
        backgroundImage='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/aerial-drone.webp'
        breadcrumbItems={breadcrumbItems} // Pass the breadcrumbItems here
      />
      <div className='service_outer'>
        <section>
          <div className='service_inner'>
            <ServiceCard/>
          </div>
        </section>
      </div>
  
    </div>
  )
}

export default Services
