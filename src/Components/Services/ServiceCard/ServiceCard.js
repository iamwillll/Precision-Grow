import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceApi = [
    {
        id: 1,
        title: 'Satellite-Based Crop Health Monitoring',
        image: 'https://webpagecdnstorage.blob.core.windows.net/precisiongrow/offer-1.webp',
        detail: "Satellite-based crop health monitoring has transformed precision agriculture in the past year. By utilizing satellite data, farmers gain real-time insights into vital crop parameters, allowing for early detection of issues and informed decision-making.",
        link: "/crop_monitoring"
    },
    {
        id: 2,
        title: 'Precision Grow AI',
        image: 'https://webpagecdnstorage.blob.core.windows.net/precisiongrow/offer-2.webp',
        detail: "Precision AI is reshaping agriculture with its user-friendly interface, offering vital details on nutrient application rates and precise Soil pH measurements. Beyond nutrients, it analyzes pests and diseases, providing effective remedies. In irrigation, it stands out by determining optimal water quantities using diverse data sources like satellites and weather data. This cutting-edge AI ensures a holistic approach to informed farm management.",
        link: "/precision_grow_ai"
    },
    {
        id: 3,
        title: 'Product Traceability',
        image: 'https://webpagecdnstorage.blob.core.windows.net/precisiongrow/offer-3.webp',
        detail: "Precision Grow Agriculture technology ensures product traceability through advanced tracking methods like RFID, barcodes, or QR codes. By integrating data from satellites, weather, and soil metrics, it enables a seamless overview of the entire agricultural product lifecycle. This enhances transparency, allows for swift issue identification, and instills consumer confidence in product safety and authenticity.",
        link: "/product_traceability"
    },
    {
        id: 4,
        title: 'Agri Insurance',
        image: 'https://webpagecdnstorage.blob.core.windows.net/precisiongrow/offer-4.webp',
        detail: "Agri insurance, short for agricultural insurance, protects farmers and agricultural businesses from financial losses due to various risks like natural disasters, pests, diseases, or crop failure. It covers crops and livestock, providing a safety net to mitigate the impact of unpredictable events. Agri insurance aims to stabilize farmers' income, ensure food security, and promote sustainable agricultural practices by offering a buffer against potential losses.",
        link: "/agri_insurance"
    },
    {
        id: 5,
        title: 'Agri Loan',
        image: 'https://webpagecdnstorage.blob.core.windows.net/precisiongrow/offer-5.webp',
        detail: "An agri loan, or agricultural loan, is a specialized financial tool for farmers, addressing diverse needs like acquiring seeds, equipment, and covering operational expenses. It aids cash flow management, promotes modern farming practices, and contributes to overall productivity. Tailored terms, often aligned with seasonal agriculture, support the sector's development and sustainability by providing essential financial resources for farmers.",
        link: "/agri_loan"
    },
    {
        id: 6,
        title: 'Agri Drone',
        image: 'https://webpagecdnstorage.blob.core.windows.net/precisiongrow/offer-6.webp',
        detail: "An agri drone, or agricultural drone, is an unmanned aerial vehicle used in farming. Equipped with sensors, it monitors crops, soil conditions, and field health, aiding precision agriculture. These drones provide real-time data for efficient crop management, pest control, and yield optimization, promoting sustainable and technology-driven farming practices.",
        link: "/agri_drone"
    },
];

const ServiceCard = () => {
  return (
    <div>
      <div className='container-fixed'>
        <div className='row'>
          {ServiceApi.map((card) => (
            <div className='col-lg-4' key={card.id}>
              <div className='service_card_outer'>
                <div className='card'>
                  <div className='Sthumb'>
                    <img decoding="async" src={card.image} alt={card.title}/>
                  </div>
                  <div className='card-body' style={{ position: 'relative', paddingBottom: '50px' }}>
                    <h3 className='card-title my-4'>{card.title}</h3>
                    <p className='card-text'>{card.detail}</p>
                    <Link to={card.link} className='btn btnSer' style={{ position: 'absolute', bottom: '10px', left: '0', right: '0', margin: 'auto', width: 'fit-content' }}>View More</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceCard;
