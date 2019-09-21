<template>
  <main class="d-flex flex-column align-items-start">
		<h2>Usuários</h2>
		<div 
		class="d-flex flex-row justify-content-between"
		style="margin-bottom: 30px; width: 100%">
			<b-form-input type="text"/>
			<b-button style="margin-left: 30px">Adicionar</b-button>
		</div>
		<b-table :items="items"/>
  </main>
</template>

<script>
export default {
    data () {
			return {
				items: [
					{id: 1, name: "Thatianne", permissão: "Administrador"},
					{id: 2, name: "Kelvin", permissão: "Funcionário"}
				]
			}
		}
}
</script>

<style>
main {
	margin: 20px 40px
}
</style>