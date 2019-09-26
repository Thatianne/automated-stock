<template>
  <main class="d-flex flex-column align-items-start">
		<h2>Usuários</h2>
		<div 
		class="d-flex flex-row justify-content-between"
		style="margin-bottom: 30px; width: 100%">
			<b-form-input type="text"/>
			<b-button style="margin-left: 30px">Adicionar</b-button>
		</div>
		<b-table :items="tableUsers"/>
  </main>
</template>

<script>
export default {
	data () {
		return {
			users: [],
			tableUsers: []
		}
	},
	mounted() {
		this.$fireStore.collection('users').get()
			.then(res => {
				res.forEach(user => {
					const userData = user.data()
					this.users.push({
						id: user.id,
						...userData
					})
					this.tableUsers.push({
						'Nome': userData.name,
						'Permissão': userData.permission
					})			
				})				
			})			
	}
}
</script>

<style lang="scss" module>
main {
	margin: 20px 40px
}
</style>