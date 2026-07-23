import {
  FaClipboardCheck,
  FaComments,
  FaCompassDrafting,
  FaCouch,
  FaEarListen,
  FaFileLines,
  FaHelmetSafety,
  FaHouseChimney,
  FaLeaf,
  FaMap,
  FaPenRuler
} from 'react-icons/fa6'
import { servicesMedia } from './media'

export const serviceProcessSteps = [
  {
    height: 220,
    icon: FaEarListen,
    id: 'understanding',
    image: servicesMedia.process.understanding,
    number: '01',
    width: 362
  },
  {
    height: 220,
    icon: FaCompassDrafting,
    id: 'design',
    image: servicesMedia.process.design,
    number: '02',
    width: 385
  },
  {
    height: 220,
    icon: FaFileLines,
    id: 'documentation',
    image: servicesMedia.process.documentation,
    number: '03',
    width: 352
  },
  {
    height: 220,
    icon: FaClipboardCheck,
    id: 'management',
    image: servicesMedia.process.management,
    number: '04',
    width: 394
  },
  {
    height: 262,
    icon: FaHelmetSafety,
    id: 'supervision',
    image: servicesMedia.process.supervision,
    number: '05',
    width: 616
  }
]

export const serviceAreas = [
  { icon: FaPenRuler, id: 'architecturalDesign' },
  { icon: FaLeaf, id: 'sustainableArchitecture' },
  { icon: FaCouch, id: 'interiorDesign' },
  { icon: FaMap, id: 'masterPlanning' },
  { icon: FaHouseChimney, id: 'renovations' },
  { icon: FaComments, id: 'consulting' }
]
