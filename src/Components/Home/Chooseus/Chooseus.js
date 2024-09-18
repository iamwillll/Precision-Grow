import React from 'react';
import Titletag from '../../Titletag/Titletag';
import Choosecard from './Choosecard';
import './Chooseus.css';
const Chooseus = () => {
  return (
    <div className='chooseouter'>
      <section>
        <div className='container'>
          <div className='row justify-content-center'>
          <Titletag
      title="Why Choose Us"
      bgImage='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/hero_4.webp' // Path to your image
    />
            <div className='col-xl-3 col-lg-12'>
              <Choosecard
                imageSrc='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/resource.png'
                title="Resource Efficiency"
                text="Precision Grow maximizes resource efficiency with satellite data and analytics, reducing waste and enhancing operational efficiency in agriculture."
                cardStyle={{ border: 'transparent',textAlign: 'start'}}
              />
              <Choosecard
                imageSrc='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/Bespoke.png'
                title="Environmental Stewardship"
                text="Precision practices minimize environmental impact, ensuring compliance with regulations and reducing the ecological footprint of agricultural activities."
                cardStyle={{ border: '#9aad46', color: '#ffffff', textAlign: 'start'}}
              />
            </div>
            <div className='col-xl-6 col-lg-12'>
              <div className='earth-img' data-aos="zoom-in-down" data-aos-duration="3000">
                <img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/earth.png' className='w-100' alt="earth"/>
              </div>
            </div>
            <div className='col-xl-3 col-lg-12'>
              <Choosecard
                imageSrc='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/data.png'
                title="Data-Driven Yields"
                text="Real-time insights enable informed decisions, leading to improved crop yields and productivity through precise adjustments in planting and irrigation."
                cardStyle={{ border: 'transparent', textAlign: 'end'}}
              />
              <Choosecard
                imageSrc='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/Automation.png'
                title="Operational Streamlining with Automation"
                text="Revolutionize operations with Satellite Automation. Utilizing satellite technology, we streamline processes, optimize workflows and enhance efficiency. Experience the future of operational excellence through automated solutions, powered by satellite data."
                cardStyle={{ border: '#9aad46', textAlign: 'end'}}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chooseus;
