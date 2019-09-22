<template>
	<b-navbar toggleable="lg" type="dark" variant="primary">
		<b-navbar-brand href="/">Início</b-navbar-brand>
		
		<b-navbar-toggle target="collapse"></b-navbar-toggle>

		<b-collapse id="collapse" is-nav>
			<b-navbar-nav right>
				<b-navbar-item href="/users">Usuários</b-navbar-item>
				<b-navbar-item href="/environments">Ambientes</b-navbar-item>
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