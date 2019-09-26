<template>
	<b-navbar toggleable="lg" type="dark" variant="warning">
		<b-navbar-brand>NowControl</b-navbar-brand>
		
		<b-navbar-toggle target="collapse"></b-navbar-toggle>

		<b-collapse id="collapse" is-nav>
			<b-navbar-nav>
				<b-nav-item
					:href="`${baseUrl}/users`"
					right>
					Usuários
				</b-nav-item>
				<b-nav-item 
					:href="`${baseUrl}/products`"
					right>
					Produtos
				</b-nav-item>
			</b-navbar-nav>

			<b-navbar-nav class="ml-auto">
				<b-nav-form>
          <b-button
						variant="outline-light"
						size="sm" 
						class="my-2 my-sm-0"
						@click="logout" >Sair</b-button>
        </b-nav-form>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>  
</template>

<script>
export default {
	computed: {
		baseUrl () {
			return '/automated-stock' // temporário
			return process.env.DEPLOY_ENV === 'GH_PAGES' ? '/automated-stock' : ''
		}
	},
	methods: {
		logout () {			
			this.$store.commit('app/setUser', null)
			this.$router.push('/')
		}
	}
}
</script>

<style lang="scss" module>
.topBar {
  height: 64px;
	background-color: rgb(224, 230, 228);
}
</style>