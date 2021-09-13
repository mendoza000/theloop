import {writeNav} from './helpers/write-nav'
import { writeAboutContent } from './helpers/write-about-content'

export const writeAboutPage = () => {

	writeNav("about")
	writeAboutContent()
}