export const writeArticlesContent = () => {
	const app = document.querySelector('#app');
	const html = `

	<div class="articles animate__animated animate__fadeInLeft">
        <h3 class="articles_title effect">Articulos</h3>

        <h4 class="articles_list_title">
          <i class="las la-bolt"></i>
          Mas recientes
        </h4>
        <div class="articles_list">
          <!--  
          <div class="article">
            <div class="article_color"></div>
            <span class="article_title">
              El primer articulo de la pagina
            </span>
            <span class="article_resume">
              Yo creo que esta quedando facha, usted que dice loquita odiosa y cortante...
            </span>
          </div>
          -->
        </div>
      </div>

	`

	app.innerHTML += html

}