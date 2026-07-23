import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaWhatsapp
} from 'react-icons/fa6'

export const footerNavigation = [
  { end: true, id: 'home', path: '/' },
  { id: 'project', path: '/projects' },
  { id: 'team', path: '/studio' },
  { id: 'service', path: '/services' },
  { id: 'contact', path: '/contact' }
]

export const footerServices = [
  'architecturalDesign',
  'sustainableArchitecture',
  'interiorDesign',
  'masterPlanning',
  'renovations',
  'consulting'
]

export const footerSocials = [
  { href: null, icon: FaFacebookF, id: 'facebook' },
  { href: null, icon: FaInstagram, id: 'instagram' },
  { href: null, icon: FaWhatsapp, id: 'whatsapp' },
  { href: null, icon: FaEnvelope, id: 'email' }
]

export const footerContact = [
  { href: null, icon: FaEnvelope, id: 'email', value: null },
  { href: null, icon: FaPhone, id: 'phone', value: null },
  { href: null, icon: FaLocationDot, id: 'location', value: null }
]
