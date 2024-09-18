import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Components/Home/Home';
import 'font-awesome/css/font-awesome.min.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from '../src/Components/Headfoot/Footer/Footer'
import RefundPolicy from './Components/Policy/RefundPolicy';
import Subnavbar from './Components/Headfoot/Header/Subnavbar/Subnavbar';
import Services from './Components/Services/Services';
import PrecisionGrowAi from './Components/Services/PrecisionGrowAi/PrecisionGrowAi';
import RegenerativeAgri from './Components/Services/RegenerativeAgri/RegenerativeAgri';
import ProductTraceability from './Components/Services/ProductTraceability/ProductTraceability';
import WildfireSolution from './Components/Services/WildfireSolution/WildfireSolution';
import AgriInsurance from './Components/Services/AgriInsurance/AgriInsurance';
import AgricLoan from './Components/Services/AgricLoan/AgricLoan';
import AgriDrone from './Components/Services/AgriDrone/AgriDrone';
import CropMonitoring from './Components/Services/SatelliteMonitoring/CropMonitoring/CropMonitoring';
import ServiceFishMonitoring from './Components/Services/SatelliteMonitoring/ServiceFishMonitoring/ServiceFishMonitoring';
import TermPolicy from './Components/Policy/TermPolicy';
import PrivacyPolicy from './Components/Policy/PrivacyPolicy';
import AutomaticIdentificationSystem from './Components/Services/SatelliteMonitoring/ServiceFishMonitoring/AutomaticIdentificationSystem';
import VesselMonitoringSystem from './Components/Services/SatelliteMonitoring/ServiceFishMonitoring/VesselMonitoringSystem';
import SatelliteImageryIntegration from './Components/Services/SatelliteMonitoring/ServiceFishMonitoring/SatelliteImageryIntegration';
import Ecrop from './Components/Product/Ecrop/Ecrop';
import Overview from './Components/Sustainability/Overview';
import Glossary from './Components/Sustainability/Glossary';
import Ecoloo from './Components/Product/Ecoloo/Ecoloo';
import FaqPage from './Components/FAQ/FaqPage/FaqPage';
import Scrolltotop from './Components/Scroll/Scrolltotop'
import FeedbackForm from './Components/Feedback/Feedback';

function App() {
  return (
   <>
   <BrowserRouter>
   <Subnavbar/>
   <div id="FlypopButton" class="flypop-button">
            <Link to="feedback" target="blank"><button style={{fontFamily:'Helvetica Neue,Helvetica,Arial,sans-serif'}}>
                <span>Give Feedback</span>
            </button></Link>           
        </div>
        <Scrolltotop/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/precision_grow_ai" element={<PrecisionGrowAi/>}/>
    <Route path="/regenerative_agriculture" element={<RegenerativeAgri/>}/>
    <Route path="/product_traceability" element={<ProductTraceability/>}/>
    <Route path="/wildfire_solution" element={<WildfireSolution/>}/>
    <Route path="/agri_insurance" element={<AgriInsurance/>}/>
    <Route path="/agri_loan" element={<AgricLoan/>}/>
    <Route path="/agri_drone" element={<AgriDrone/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/crop_monitoring" element={<CropMonitoring/>}/>
    <Route path="/fish_monitoring" element={<ServiceFishMonitoring/>}/>
    <Route path="/automatic_Identification_System" element={<AutomaticIdentificationSystem/>}/>
    <Route path="/vessel_monitoring_system" element={<VesselMonitoringSystem/>}/>
    <Route path="/satellite_imagery_integration" element={<SatelliteImageryIntegration/>}/>
    <Route path="/refund_policy" element={<RefundPolicy/>}/>
    <Route path="/terms_conditions" element={<TermPolicy/>}/>
    <Route path="/privacy_policy" element={<PrivacyPolicy/>}/>
    <Route path="/ecrop" element={<Ecrop/>}/>
    <Route path="/overview" element={<Overview/>}/>
    <Route path="/glossary" element={<Glossary/>}/>
    <Route path="/ecoloo" element={<Ecoloo/>}/>
    <Route path="/faqpage" element={<FaqPage/>}/>
    <Route path="/feedback" element={<FeedbackForm/>}/>
  </Routes>
  <Footer/>
   </BrowserRouter>
  
   </>
  );
}

export default App;
