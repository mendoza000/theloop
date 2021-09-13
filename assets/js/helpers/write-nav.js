const app = document.querySelector('#app');
import { eventsNav } from './events-nav'

export const writeNav = (param) => {

	const navHtml = `
	<nav class="nav">
        <ul class="nav_list">
          <li class="list_item ${
            (param === "home")
            ? "btn_nav_active"
            : ""
          }" id="btnHome">
            <a href="#">
              <i class="las la-home"></i>
              <!-- Inicio -->
            </a>
          </li>
          <li class="list_item ${
            (param === "articles")
            ? "btn_nav_active"
            : ""
          }" id="btnArticle">
            <a href="#">
              <i class="las la-book"></i>
              <!-- Articulos -->
            </a>
          </li>
          <li class="list_item ${
            (param === "about")
            ? "btn_nav_active"
            : ""
          }" id="btnAbout">
            <a href="#">
              <i class="las la-user-tie"></i>
              <!-- Sobre mi -->
            </a>
          </li>
        </ul>
    </nav>
	`

	app.innerHTML = navHtml

  setTimeout(function() {
    eventsNav()
  }, 50);

}