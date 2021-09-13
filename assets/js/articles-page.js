import {writeArticlesContent} from './helpers/write-articles.content.js'
import {writeNav} from './helpers/write-nav'
export const writeArticlesPage = () => {

	writeNav("articles")
	writeArticlesContent()

	/* TODO: writeArticlesList() */


}