import {
  FaChartLine,
  FaCircleCheck,
  FaCouch,
  FaCube,
  FaCubesStacked,
  FaDiagramProject,
  FaFileCircleCheck,
  FaFileLines,
  FaFlagCheckered,
  FaHelmetSafety,
  FaLink,
  FaListCheck,
  FaLocationDot,
  FaMagnifyingGlass,
  FaPenRuler,
  FaPeopleGroup,
  FaStamp,
  FaTriangleExclamation
} from 'react-icons/fa6'

export const studioProcessPhases = [
  { icon: FaMagnifyingGlass, id: 'strategy', number: '01' },
  { icon: FaPenRuler, id: 'design', number: '02' },
  { icon: FaCubesStacked, id: 'development', number: '03' },
  { icon: FaHelmetSafety, id: 'delivery', number: '04' }
]

export const studioPrinciples = [
  { icon: FaListCheck, id: 'clarity' },
  { icon: FaLocationDot, id: 'context' },
  { icon: FaPeopleGroup, id: 'coordination' },
  { icon: FaLink, id: 'continuity' }
]

export const studioCapabilities = [
  { icon: FaPenRuler, id: 'architecturalDesign' },
  { icon: FaCouch, id: 'interiorDesign' },
  { icon: FaFileLines, id: 'technicalDocumentation' },
  { icon: FaDiagramProject, id: 'projectCoordination' },
  { icon: FaStamp, id: 'permitManagement' },
  { icon: FaHelmetSafety, id: 'constructionSupervision' }
]

export const studioTools = [
  { icon: FaCube, id: 'digitalModeling' },
  { icon: FaFileCircleCheck, id: 'coordinatedDocumentation' },
  { icon: FaFlagCheckered, id: 'milestoneReviews' },
  { icon: FaTriangleExclamation, id: 'riskTracking' },
  { icon: FaCircleCheck, id: 'clientApprovals' },
  { icon: FaChartLine, id: 'constructionControl' }
]
