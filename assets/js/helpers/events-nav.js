import {writeHomePage} from '../home-page'
import {writeAboutPage} from '../about-page'
import { writeNav } from './write-nav'

export const eventsNav = () =>{

	const btnHome    = document.querySelector('#btnHome');
	const btnArticle = document.querySelector('#btnArticle');
	const btnAbout   = document.querySelector('#btnAbout');
	const app = document.querySelector('#app');

	btnHome.addEventListener('click', (e) => {
		writeHomePage()
	});

	btnArticle.addEventListener('click', (e) => {
		
		app.innerHTML = '<h1 class="animate__animated animate__fadeInRight">About me</h1>'
		writeNav()

	});

	btnAbout.addEventListener('click', () => {
		writeAboutPage()		
	})
}