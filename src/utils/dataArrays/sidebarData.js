import {
  faEnvelopeCircleCheck,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const sidebarData = [
  {
    title: 'Dashboard',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faHome} />,
    link: '/',
  },
  {
    title: 'Vet Claims',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faEnvelopeCircleCheck} />,
    link: '/vetclaims',
  },
]
