const app = document.querySelector('#app');
export const writeHeaderHome = () => {

	const headerHtml = `
	<header class="header animate__animated animate__fadeInLeft">
        <div class="header_circle">
        </div>
        <h1 class="header_title effect">The loop</h1>
        <p class="header_by">by: Omar Mendoza</p>

        <div class="redes_container">
          <div class="redes">
            <a 
              href="https://twitter.com/mendoza000x" 
              class="redes_red"
              target="_blank">
              <i class="lab la-twitter"></i>
            </a>
            <a 
              href="https://t.me/mendoza000" 
              class="redes_red"
              target="_blank">
              <i class="lab la-telegram"></i>
            </a>
          </div>

          <div class="redes_frase">
            <p>Alguna frase mas o menos asi de larga voy a poner pero aun no se cual xd</p>
          </div>

          <div class="redes">
            <a 
              href="https://github.com/mendoza000" 
              class="redes_red"
              target="_blank">
              <i class="lab la-github"></i>
            </a>
            <a 
              href="https://mendoza000.github.io/portafolio" 
              class="redes_red"
              target="_blank">
              <i class="las la-globe-americas"></i>
            </a>
          </div>
        </div>


      </header>

	`

	app.innerHTML += headerHtml
}