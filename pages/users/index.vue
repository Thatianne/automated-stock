<template>
  <main class="d-flex flex-column align-items-start">
		<h2>Usuários</h2>
		<div 
		class="d-flex flex-row justify-content-between"
		style="margin-bottom: 30px; width: 100%">
			<b-form-input type="text"/>
			<b-button style="margin-left: 30px">Adicionar</b-button>
		</div>
		<b-table :items="users"/>
  </main>
</template>

<script>
export default {
	data () {
		return {
			users: []
		}
	},
	mounted() {
		this.$fireStore.collection('users').get()
			.then(res => {				
				res.forEach(user => {
					this.users.push({
						id: user.id,
						...user.data()
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