import homeHero from '../assets/home/home-hero.png'
import homeOverview from '../assets/home/home-overview.png'
import homeRecommendation from '../assets/home/home-recommendation.png'
import homeThumb01 from '../assets/home/home-thumb-01.png'
import homeThumb02 from '../assets/home/home-thumb-02.png'
import homeThumb03 from '../assets/home/home-thumb-03.png'
import servicesApproach from '../assets/services/services-approach.png'
import servicesHero from '../assets/services/services-hero.png'
import servicesProcessDesign from '../assets/services/services-process-design.png'
import servicesProcessDocumentation from '../assets/services/services-process-documentation.png'
import servicesProcessManagement from '../assets/services/services-process-management.png'
import servicesProcessSupervision from '../assets/services/services-process-supervision.png'
import servicesProcessUnderstanding from '../assets/services/services-process-understanding.png'
import servicesStatement from '../assets/services/services-statement.png'
import commercialOffice from '../assets/projects/commercial/project-commercial-office.png'
import commercialRetailHospitality from '../assets/projects/commercial/project-commercial-retail-hospitality.png'
import culturalMuseum from '../assets/projects/cultural/project-cultural-museum.png'
import culturalPerformance from '../assets/projects/cultural/project-cultural-performance.png'
import industrialManufacturing from '../assets/projects/industrial/project-industrial-manufacturing.png'
import industrialWarehouse from '../assets/projects/industrial/project-industrial-warehouse.png'
import infrastructureBridge from '../assets/projects/infrastructure/project-infrastructure-bridge.png'
import infrastructureTransitHub from '../assets/projects/infrastructure/project-infrastructure-transit-hub.png'
import institutionalEducation from '../assets/projects/institutional/project-institutional-education.png'
import institutionalHealthcareCivic from '../assets/projects/institutional/project-institutional-healthcare-civic.png'
import residentialMultifamily from '../assets/projects/residential/project-residential-multifamily.png'
import residentialSingleFamily from '../assets/projects/residential/project-residential-single-family.png'

export const homeMedia = {
  hero: homeHero,
  thumbnails: [homeThumb01, homeThumb02, homeThumb03],
  overview: homeOverview,
  recommendation: homeRecommendation
}

export const projectMedia = {
  residential: {
    singleFamily: residentialSingleFamily,
    multifamily: residentialMultifamily
  },
  commercial: {
    office: commercialOffice,
    retailHospitality: commercialRetailHospitality
  },
  institutional: {
    education: institutionalEducation,
    healthcareCivic: institutionalHealthcareCivic
  },
  cultural: {
    museum: culturalMuseum,
    performance: culturalPerformance
  },
  industrial: {
    manufacturing: industrialManufacturing,
    warehouse: industrialWarehouse
  },
  infrastructure: {
    bridge: infrastructureBridge,
    transitHub: infrastructureTransitHub
  }
}


export const servicesMedia = {
  hero: servicesHero,
  approach: servicesApproach,
  process: {
    understanding: servicesProcessUnderstanding,
    design: servicesProcessDesign,
    documentation: servicesProcessDocumentation,
    management: servicesProcessManagement,
    supervision: servicesProcessSupervision
  },
  statement: servicesStatement
}
