<template>
  <main class="d-flex flex-column align-items-start">
		<h2>Produtos</h2>
		<div 
		class="d-flex flex-row justify-content-between"
		style="margin-bottom: 30px; width: 100%">
			<b-form-input type="text"/>			
			<b-button 
				variant="info"
				v-b-modal.add-product
				style="margin-left: 30px">
				Adicionar
			</b-button>
			<b-button 
				variant="info"
				v-b-modal.add-environment
				v-b-tooltip.hover title="Adicionar ambiente"
				style="margin-left: 30px">
				+			
			</b-button>
		</div>
		<b-table :items="tableProducts"/>
		<b-modal id="add-environment" title="Adicionar ambiente" @ok="addEnvironment">			
			<b-form @submit="addEnvironment">
				<b-form-group
					id="input-group-1"
					label="Nome"
					label-for="input-1">
					<b-form-input
						id="input-1"
						v-model="environment.name"
						type="text"
						required
						placeholder="Informe o nome do ambiente"
					></b-form-input>
				</b-form-group>
			</b-form>
		</b-modal>
		<b-modal id="add-product" title="Adicionar produto" @ok="addProduct">			
			<b-form @submit="addProduct">
				<b-form-group
					id="input-group-1"
					label="Nome"
					label-for="input-1">
					<b-form-input
						id="input-1"
						v-model="product.name"
						type="text"
						required
						placeholder="Informe o nome"
					></b-form-input>
				</b-form-group>
				<b-form-group
					id="input-group-1"
					label="Descrição"
					label-for="input-1">
					<b-form-input
						id="input-1"
						v-model="product.description"
						type="text"
						required
						placeholder="Informe uma descrição"
					></b-form-input>
				</b-form-group>
				<b-form-group
					id="input-group-1"
					label="Preço"
					label-for="input-1">
					<b-form-input
						id="input-1"
						v-model="product.price"
						type="text"
						required
						placeholder="Informe o preço"
					></b-form-input>
				</b-form-group>
				<b-form-group id="input-group-3" label="Ambiente" label-for="input-3">
					<b-form-select
						id="input-3"
						v-model="product.environment"
						:options="environmentsOptions"
						required
					></b-form-select>					
      	</b-form-group>
				<b-form-group
					id="input-group-1"
					label="Quantidade"
					label-for="input-1">
					<b-form-input
						id="input-1"
						v-model="product.counter"
						type="number"
						required
						placeholder="Informe a quantidade"
					></b-form-input>
				</b-form-group>
			</b-form>
		</b-modal>
  </main>
</template>

<script>
export default {
	data () {
		return {
			environments: [],
			tableProducts: [],			
			product: {
				name: '',
				price: '',
				environment: '',
				description: '',
				counter: 1
			},
			environment: {
				name: ''
			},
			environmentsOptions: []
		}
	},
	mounted() {
		this.$fireStore.collection('environments').get()
			.then(res => {				
				res.docs.forEach(environment => {
					let environmentData = environment.data()
					this.environments.push({
						...environmentData
					})
					this.environmentsOptions.push({
						text: environmentData.name,
						key: environmentData.name
					})
				})								
			})
		
		this.$fireStore.collection('products').get()
			.then(res => {				
				res.docs.forEach(product => {
					let productData = product.data()
					this.tableProducts.push({
						"Nome": productData.name,
						"Preço": productData.price,
						"Descrição": productData.description,
						"Ambiente": productData.environment
					})
				})
			})
	},
	methods: {
		addProduct () {
			let productRef = this.$fireStore.collection('products').doc()
			productRef.set({
				...this.product
			})
		},
		addEnvironment () {
			let environmentRef = this.$fireStore.collection('environments').doc()
			environmentRef.set({
				...this.environment
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