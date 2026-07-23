import { projectMedia } from './media'

export const projectCategoryOrder = [
  'all',
  'residential',
  'commercial',
  'institutional',
  'cultural',
  'industrial',
  'infrastructure'
]

export const projects = [
  { id: 'residential-single-family', category: 'residential', copyKey: 'residentialSingleFamily', image: projectMedia.residential.singleFamily },
  { id: 'commercial-office', category: 'commercial', copyKey: 'commercialOffice', image: projectMedia.commercial.office },
  { id: 'cultural-museum', category: 'cultural', copyKey: 'culturalMuseum', image: projectMedia.cultural.museum },
  { id: 'residential-multifamily', category: 'residential', copyKey: 'residentialMultifamily', image: projectMedia.residential.multifamily },
  { id: 'commercial-retail-hospitality', category: 'commercial', copyKey: 'commercialRetailHospitality', image: projectMedia.commercial.retailHospitality },
  { id: 'institutional-education', category: 'institutional', copyKey: 'institutionalEducation', image: projectMedia.institutional.education },
  { id: 'institutional-healthcare-civic', category: 'institutional', copyKey: 'institutionalHealthcareCivic', image: projectMedia.institutional.healthcareCivic },
  { id: 'cultural-performance', category: 'cultural', copyKey: 'culturalPerformance', image: projectMedia.cultural.performance },
  { id: 'industrial-manufacturing', category: 'industrial', copyKey: 'industrialManufacturing', image: projectMedia.industrial.manufacturing },
  { id: 'industrial-warehouse', category: 'industrial', copyKey: 'industrialWarehouse', image: projectMedia.industrial.warehouse },
  { id: 'infrastructure-bridge', category: 'infrastructure', copyKey: 'infrastructureBridge', image: projectMedia.infrastructure.bridge },
  { id: 'infrastructure-transit-hub', category: 'infrastructure', copyKey: 'infrastructureTransitHub', image: projectMedia.infrastructure.transitHub }
]

export const projectsById = Object.fromEntries(projects.map((project) => [project.id, project]))
