import './style.css'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faFile, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(
  faArrowUpRightFromSquare, faFile, faEnvelope, faGithub, faLinkedin
)
dom.watch() // used to convert <i> tags to SVG
