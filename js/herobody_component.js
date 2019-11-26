var bodytemplate = `
	<div class="column is-mobile">
		<div class="column is-half is-offset-one-quarter"> 
			<div class="has-text-centered">
				<p class="title has-text-white">{{ msg }}</p>
				<div id="sosmed-section">
					<a 
						v-for="(sosmed,index) in sosmedList"
						v-bind:key=index
						v-bind:id="sosmed.id"
						v-bind:href="sosmed.link"
						target="_blank" 
						class="icon-sosmed"
						>
						<span class="icon">
			              <i v-bind:class="[iconClass, sosmed.icon]">
			              </i>
			            </span>
			        </a>
				</div>
			</div>
		</div>
	</div>
`

var dataSosmed = [
	{ id: "sosmed-github", link: "https://github.com/berpergian", icon: "mdi-github-circle"},
	{ id: "sosmed-linkedin", link: "https://www.linkedin.com/in/muhganjar/", icon: "mdi-linkedin"},
	{ id: "sosmed-twitter", link: "https://twitter.com/muh_ganjar", icon: "mdi-twitter"},
	{ id: "sosmed-email", link: "mailto:emailmganjar@gmail.com", icon: "mdi-email"}
];

Vue.component('herobody',{
	data: function() {
		return {
			iconClass: "mdi size-sosmed mdi-light",
			sosmedList: dataSosmed
		}
	},
	props: ['msg'],
	template: bodytemplate
})

new Vue({
	el: '#body-site'
})