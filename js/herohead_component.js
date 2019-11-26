var headtemplate = `
	<nav class="navbar">
		<div class="container">
			<div class="navbar-brand">
				<a class="navbar-item">
					<img src="./assets/Logo.png" alt="Logo">
				</a>
			</div>
			<div id="navbarHero" class="navbar-menu">
				<div class="navbar-end">
					<span id="repository-button" class="navbar-item">
						<a id="repo-btn" v-on:click="isShowModal = true" class="button is-inverted is-black is-outlined">
							Repository
						</a>
					</span>
					<!-- https://siongui.github.io/2018/09/27/vuejs-bulma-modal/ -->
					<div id="modal-repo" class="modal" v-bind:class="{ 'is-active': isShowModal }">
						<div class="modal-background" v-on:click="isShowModal = false"></div>
						<div class="modal-content">
							<div class="has-text-centered">
								<p class="title is-2 has-text-white">Coming Soon!</p>
								<p class="subtitle is-6 has-text-white">You can visit my Github Repository for a while</p>
							</div>
						</div>
						<button class="modal-close is-large" v-on:click="isShowModal = false" aria-label="close"></button>
					</div>
					<span
						v-for="(button,index) in linkButton"
						v-bind:key=index
						v-bind:id="button.id"
						class="navbar-item"
					>
						<a v-bind:href="button.link" target="_blank" class="button is-inverted is-black is-outlined">
							{{ button.text }}
						</a>
					</span>
				</div>
			</div>
		</div>
	</nav>
`

var dataButton = [
	{ id: "profile-button", text: "Profile", link: "https://berpergian.now.sh/" },
	{ id: "email-button", text: "Hire Me!", link: "mailto:emailmganjar@gmail.com" }
]

Vue.component('herohead',{
	data: function() {
		return {
			linkButton: dataButton,
			isShowModal: false
		}
	},
	template: headtemplate
})


new Vue({
	el: '#header-site'
})