<template>
	<b-navbar toggleable="lg" type="dark" variant="info">
		<b-navbar-brand href="/">Início</b-navbar-brand>
		
		<b-navbar-toggle target="collapse"></b-navbar-toggle>

		<b-collapse id="collapse" is-nav>
			<b-navbar-nav>
				<b-nav-item
					href="users"
					right>
					Usuários
				</b-nav-item>
				<b-nav-item 
					href="products"
					right>
					Produtos
				</b-nav-item>
			</b-navbar-nav>		
		</b-collapse>
	</b-navbar>  
</template>

<script>
export default {

}
</script>

<style lang="scss" module>
.topBar {
  height: 64px;
	background-color: rgb(224, 230, 228);
}
</style>