var footertemplate = `
	<footer class="option-footer">
		<div class="has-text-centered has-text-white">
			<div>
				<p>Background Photo by <a class="has-text-white" href="https://unsplash.com/photos/rru97vw7x7I">Fancy Crave</a> on Unsplash</p>
				<p>Muhammad Ganjar © 2019 </p>
			</div>
			<div>
				<a href="https://bulma.io" style="margin-right:5px">
					<img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="128" height="24">
				</a>
				<a href="https://vuejs.org" style="margin-left:5px">
					<img src="https://vuejs.org/images/logo.png" alt="Made with VueJS" width="24">
				</a>
			</div>
		</div>
	</footer>
`

Vue.component('herofooter',{
	template: footertemplate
})

new Vue({
	el: '#footer-site'
})