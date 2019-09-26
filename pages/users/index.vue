<template>
  <main class="d-flex flex-column align-items-start">		
		<div 
		class="d-flex flex-row justify-content-between"
		style="margin-bottom: 30px; width: 100%">
			<h2>Usuários</h2>
			<b-button 
				variant="info"
				v-b-modal.add-user
				style="margin-left: 30px">
				Adicionar
			</b-button>
		</div>
		<b-table :items="tableUsers"/>
		<b-modal id="add-user" title="Adicionar usuário" @ok="addUser">			
			<b-form @submit="addUser">
				<b-form-group
					id="input-group-1"
					label="E-mail"
					label-for="input-1">
					<b-form-input
						id="input-1"
						v-model="newUser.email"
						type="email"
						required
						placeholder="Informe seu e-mail"
					></b-form-input>
				</b-form-group>

				<b-form-group id="input-group-2" label="Nome" label-for="input-2">
					<b-form-input
						id="input-2"
						v-model="newUser.name"
						required
						placeholder="Informe seu nome"
					></b-form-input>
				</b-form-group>
				<b-form-group id="input-group-3" label="Permissão" label-for="input-3">
					<b-form-select
						id="input-3"
						v-model="newUser.permission"
						:options="permissions"
						required
					></b-form-select>
      	</b-form-group>
			</b-form>
		</b-modal>
  </main>
</template>

<script>
export default {
	data () {
		return {
			users: [],
			tableUsers: [],
			showAddUser: false,
			newUser: {
				name: '',
				email: '',				
				password: '123',
				permission: 'employeer'
			},
			permissions: [
				{text: 'Administrador', value: 'admin'},
				{text: 'Funcionário', value: 'employeer'},
			]
		}
	},
	mounted() {
		this.$fireStore.collection('users').get()
			.then(res => {				
				res.docs.forEach(user => {
					const userData = user.data()
					this.users.push({
						id: user.id,
						...userData
					})
					this.tableUsers.push({
						'Nome': userData.name,
						'E-mail': userData.email,
						'Permissão': userData.permission
					})			
				})				
			})			
	},
	methods: {
		addUser () {
			let userRef = this.$fireStore.collection('users').doc()
			userRef.set({
				...this.newUser
			})

			this.$fireAuth.createUserWithEmailAndPassword(
				this.newUser.email,
				'12345678'
			)

			this.tableUsers.unshift({
				'Nome': this.newUser.name,
				'E-mail': this.newUser.email,
				'Permissão': this.newUser.permission
			})
		}
	}
}
</script>

<style lang="scss" module>
main {
	margin: 20px 40px
}
</style>