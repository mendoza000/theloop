export const writeArticlesContent = () => {
	const app = document.querySelector('#app');
	const html = `
  <div class="articleOpen">
    <button id="closeArticle"><i class="las la-times"></i></button>
    <div class="articleOpen_header">
      <h3 class="articleOpen_title effect">{{titulo}}</h3>
      <p>by: Omar Mendoza</p>

      <div class="articleOpen_redes">
        <a class="articleOpen_red" target="_blank" href="https://twitter.com/mendoza000x">
          <i class="lab la-twitter"></i>
        </a>
        <a class="articleOpen_red" target="_blank" href="https://github.com/mendoza000">
          <i class="lab la-github"></i>
        </a>
        <a class="articleOpen_red" target="_blank" href="https://mendoza000.github.io/portafolio">
          <i class="las la-globe-americas"></i>
        </a>
      </div>

    </div>

    <p class="articleOpen_text">{{text}}</p>

  </div>
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

  writeArticlesCards()

  articleEvent()

}

const writeArticlesCards = async () => {

  let html = ''
  const url = "https://theloopback.herokuapp.com"

  const resp = await fetch(`${url}/api/article`, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json'
    }
  })

  const {articles} = await resp.json()
  const articlesContainer = document.querySelector('.articles_list');

  const firstRecentArticle = articles.reverse()

  firstRecentArticle.forEach(elem => {

    const card = `

      <div class="article" id=${elem._id}>
        <div class="article_color"></div>
        <span class="article_title">
          ${elem.title}
        </span>
        <span class="article_resume">
          ${elem.resume}
        </span>
      </div>

    `

    html += card

  })

  articlesContainer.innerHTML = html

}

const articleEvent = async () => {

  const articlesContainer = document.querySelector('.articles_list');

  articlesContainer.addEventListener('click', async (e) => {

    let id = e.target.parentElement.id

    if (!id) return;


    console.log(id);

    const url = "https://theloopback.herokuapp.com"

    const resp = await fetch(`${url}/api/article/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const {article} = await resp.json()
    console.log(article);

    const title = document.querySelector('.articleOpen_title');
    const text  = document.querySelector('.articleOpen_text');
    const card = document.querySelector('.articleOpen');
    const scroll  = document.querySelector('.articles_list');

    title.innerText = article.title 
    text.innerText  = article.text 
    card.style.left = "0"
    scroll.style.display = "none"

    const closeCard = document.querySelector('#closeArticle');
    closeCard.addEventListener('click', (e) => {
      
      card.style.left = '-100vw'
      scroll.style.display = ""

    });
    
  });


}