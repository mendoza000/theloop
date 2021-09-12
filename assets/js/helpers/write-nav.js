const app = document.querySelector('#app');
import { eventsNav } from './events-nav'

export const writeNav = () => {

	const navHtml = `
	<nav class="nav">
        <ul class="nav_list">
          <li class="list_item" id="btnHome">
            <a href="#">
              <i class="las la-home"></i>
              <!-- Inicio -->
            </a>
          </li>
          <li class="list_item">
            <a href="#" id="btnArticle">
              <i class="las la-book"></i>
              <!-- Articulos -->
            </a>
          </li>
          <li class="list_item">
            <a href="#" id="btnAbout">
              <i class="las la-user-tie"></i>
              <!-- Sobre mi -->
            </a>
          </li>
        </ul>
    </nav>
	`

	app.innerHTML += navHtml

  setTimeout(function() {
    eventsNav()
  }, 50);

}