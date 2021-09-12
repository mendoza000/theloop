import {writeHomePage} from '../home-page'
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
		
		app.innerHTML = '<h1>Articulos</h1>'
		writeNav()

	});

	btnAbout.addEventListener('click', () => {
		app.innerHTML = '<h1>About me</h1>'
		writeNav()
	})
}