import { projectMedia } from './media'

export const projects = [
  {
    id: 'residential-single-family',
    category: 'residential',
    image: projectMedia.residential.singleFamily
  },
  {
    id: 'residential-multifamily',
    category: 'residential',
    image: projectMedia.residential.multifamily
  },
  {
    id: 'commercial-office',
    category: 'commercial',
    image: projectMedia.commercial.office
  },
  {
    id: 'commercial-retail',
    category: 'commercial',
    image: projectMedia.commercial.retailHospitality
  },
  {
    id: 'institutional-education',
    category: 'institutional-public',
    image: projectMedia.institutional.education
  },
  {
    id: 'institutional-healthcare',
    category: 'institutional-public',
    image: projectMedia.institutional.healthcareCivic
  },
  {
    id: 'cultural-museum',
    category: 'cultural',
    image: projectMedia.cultural.museum
  },
  {
    id: 'cultural-performance',
    category: 'cultural',
    image: projectMedia.cultural.performance
  },
  {
    id: 'industrial-factory',
    category: 'industrial',
    image: projectMedia.industrial.manufacturing
  },
  {
    id: 'industrial-warehouse',
    category: 'industrial',
    image: projectMedia.industrial.warehouse
  },
  {
    id: 'infrastructure-bridge',
    category: 'infrastructure',
    image: projectMedia.infrastructure.bridge
  },
  {
    id: 'infrastructure-hub',
    category: 'infrastructure',
    image: projectMedia.infrastructure.transitHub
  }
]

export const projectsById = Object.fromEntries(projects.map((project) => [project.id, project]))
