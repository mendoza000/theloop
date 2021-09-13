export const writeAboutContent = () => {
	const app = document.querySelector('#app');
	const html = `
	<div class="aboutme animate__animated animate__fadeInLeft">
        <h3 class="aboutme_title effect">Sobre mi</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod saepe ducimus officia odit fugit explicabo temporibus eligendi exercitationem corrupti nostrum maiores et suscipit voluptatibus, quibusdam illo, doloremque, at rerum sequi!</p>

        <h4 class="skills_title">Skills</h4>
        <div class="skills">
          <i class="lab la-html5"></i>
          <i class="lab la-css3"></i>
          <i class="lab la-js-square"></i>
          <i class="lab la-node-js"></i>
          <i class="las la-terminal"></i>
          <i class="lab la-git-alt"></i>
        </div>
      </div>

	`

	app.innerHTML += html

}