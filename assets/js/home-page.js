import { writeNav } from './helpers/write-nav'
import { writeHeaderHome } from './helpers/write-header.home.js'

const app = document.querySelector('#app');


/* Funcion principal para escribir el home */
export const writeHomePage = () => {
	/* pintamos la nav*/
	writeNav("home")
	/*pintamos el header*/
	writeHeaderHome()


}