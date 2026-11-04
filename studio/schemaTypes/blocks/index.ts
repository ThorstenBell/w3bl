import {hero} from './hero'
import {proofStrip} from './proofStrip'
import {teaserGrid} from './teaserGrid'
import {caseHighlightStrip} from './caseHighlightStrip'
import {aboutSummary} from './aboutSummary'
import {ctaBanner} from './ctaBanner'
import {problemStatement} from './problemStatement'
import {buildingInPublicList} from './buildingInPublicList'
import {featureHighlight} from './featureHighlight'
import {caseStudyHeader} from './caseStudyHeader'
import {caseStudyBody} from './caseStudyBody'
import {caseStudyResults} from './caseStudyResults'
import {caseStudyGallery} from './caseStudyGallery'
import {nextCaseNav} from './nextCaseNav'
import {contactForm} from './contactForm'

// Adding a new block type: create its schema file above, then add it to this array.
export const blockTypes = [
  hero,
  proofStrip,
  teaserGrid,
  caseHighlightStrip,
  aboutSummary,
  ctaBanner,
  problemStatement,
  buildingInPublicList,
  featureHighlight,
  caseStudyHeader,
  caseStudyBody,
  caseStudyResults,
  caseStudyGallery,
  nextCaseNav,
  contactForm,
]
