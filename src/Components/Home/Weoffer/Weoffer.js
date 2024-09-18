import React from 'react'
import './Weoffer.css'
import Titletag from '../../Titletag/Titletag'
import WeofferCard from './WeofferCard'

const Weoffer = () => {
  return (
    <div>
      <div className='Weoff-outer'>
        <section>
            <div className='container'>
            <Titletag
      title="What We Offer"
      bgImage='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/28.webp' // Path to your image
    />
     <div className='row'>
     <WeofferCard
        image='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/offer-1.webp'
        title="Crop Health Monitoring"
        description="Smart Insights for Healthy Crops and Informed Farming Decisions."
        number="01"
      />
       <WeofferCard
        image='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/offer-2.webp'
        title="Crop Irrigation Monitoring"
        description="Precision crop irrigation monitoring enhances water efficiency."
        number="02"
      />
         <WeofferCard
        image='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/offer-3.webp'
        title="Radar Data"
        description="Radar data ensures continuous monitoring during adverse weather"
        number="03"
      />
       <WeofferCard
        image='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/offer-4.webp'
        title="Soil Organic Carbon"
        description="Soil organic carbon tracking for sustainable and fertile agriculture"
        number="04"
      />
       <WeofferCard
        image='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/offer-5.webp'
        title="Digital Elevation Model"
        description="Digital elevation models optimize land use and drainage planning"
        number="05"
      />
       <WeofferCard
        image='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/offer-6.webp'
        title="Crop Area & Yield Estimation"
        description="Accurate crop area and yield estimation for informed decisions"
        number="06"
      />
       <WeofferCard
        image='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/offer-7.webp'
        title="Current & Forecast Weather"
        description="Real-time and forecast weather updates guide agricultural planning"
        number="07"
      />
       <WeofferCard
        image='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/offer-8.webp'
        title="Plantation Management"
        description="Tree Age, Tree Count, Tree Uprooting Analysis with high accuracy"
        number="08"
      />
       <WeofferCard
        image='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/offer-9.webp'
        title="Product Traceability"
        description="Seamless product traceability, unveiling the journey from farm to table"
        number="09"
      />




     </div>
            </div>
        </section>
      </div>
      
    </div>
  )
}

export default Weoffer
