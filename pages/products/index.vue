<template>
  <main class="d-flex flex-column align-items-start">		
		<div 
		class="d-flex flex-row justify-content-between"
		style="margin-bottom: 30px; width: 100%">
			<h2>Produtos</h2>
			<div>
				<b-button 
					variant="warning"
					v-b-modal.add-product
					style="margin-left: 12px">
					Adicionar produto
				</b-button>
				<b-button 
					variant="warning"
					v-b-modal.add-environment
					v-b-tooltip.hover title="Adicionar ambiente"
					style="margin-left: 12px">
					+			
				</b-button>				
			</div>
		</div>
		<b-table :items="tableProducts" :fields="fields">
      <template slot="Remover" slot-scope="row">
        <b-button 
				size="sm"
				variant="outline-danger"
				v-b-tooltip.hover title="Remover produto"
				@click.stop="removeProduct(row.item)" class="mr-1">
          <font-awesome-icon :icon="['fa', 'trash']"/>
        </b-button>
    	</template>
			<template slot="Diminuir" slot-scope="row">
        <b-button 
				size="sm"
				variant="outline-primary"
				v-b-tooltip.hover title="Retirar um produto"
				@click.stop="subtractProduct(row.item)" class="mr-1">
          <font-awesome-icon :icon="['fa', 'minus']"/>
        </b-button>
    	</template>
			<template slot="Mover" slot-scope="row">
        <b-button
				size="sm"
				variant="outline-secondary"
				v-b-tooltip.hover title="Mover um produto"
				v-b-modal.move-product
				@click.stop="productMove = row.item" class="mr-1">
          <font-awesome-icon :icon="['fas', 'arrow-alt-circle-right']"/>
        </b-button>
    	</template>
		</b-table>
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
						maxlength="20"
						required
						placeholder="Informe o nome do ambiente"
					></b-form-input>
				</b-form-group>
			</b-form>
		</b-modal>
		<b-modal id="add-product" title="Adicionar produto" @ok="addProduct" @cancel="clearProductForm">			
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
						maxlength="20"
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
				<b-form-group
					id="input-group-1"
					label="Validade"
					label-for="input-1">
					<b-form-input
						id="input-1"
						v-model="product.validity"
						format="dd/mm/yyyy"
						type="date"
						required
						placeholder="Informe a validade"
					></b-form-input>
				</b-form-group>
			</b-form>
		</b-modal>

		<b-modal id="move-product" title="Mover produto" @ok="moveProduct">
			<b-form-group id="input-group-3" label="Ambiente" label-for="input-3">
				<b-form-select
					id="input-3"
					v-model="environmentMove"
					:options="environmentsOptions"
					required
				></b-form-select>					
			</b-form-group>			
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
				counter: 1,
				validity: '',
				environment: '',
				description: '',				
			},
			productMove: {},
			environment: {
				name: ''
			},
			environmentMove: '',
			environmentsOptions: [],
			fields: [          
				'Nome',
				'Preço',
				'Quantidade',
				'Validade',
				'Ambiente',				
				'Remover',
				'Diminuir',
				'Mover'
			],
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

				this.product.environment = this.environmentsOptions.length > 0 ? this.environmentsOptions[0].key : ''
			})
		
		this.$fireStore.collection('products').get()
			.then(res => {
				res.docs.forEach(product => {
					let productData = product.data()
					this.tableProducts.push({
						"Nome": productData.name,
						"Preço": productData.price,
						"Validade": productData.validity,
						"Descrição": productData.description,
						"Quantidade": productData.counter,
						"Ambiente": productData.environment,
						"Uid": product.id
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
			this.tableProducts.push({
				"Uid": productRef.id,
				"Nome": this.product.name,
				"Preço": this.product.price,
				"Validade": this.product.validity,
				"Descrição": this.product.description,
				"Quantidade": this.product.counter,				
				"Ambiente": this.product.environment
			})

			this.clearProductForm()
		},
		addEnvironment () {
			let environmentRef = this.$fireStore.collection('environments').doc()
			environmentRef.set({
				...this.environment
			})
			this.environmentsOptions.push({
				text: this.environment.name,
				key: this.environment.name
			})
		},
		removeProduct (product) {			
			let productRef = this.$fireStore.collection('products').doc(product['Uid'])
			productRef.delete()
			const index = this.tableProducts.indexOf(product)
			if(index != -1) this.tableProducts.splice(index, 1)
		},
		subtractProduct (product) {
			let qtd = parseInt(product['Quantidade'])
			if(qtd > 1) {
				product['Quantidade'] = --qtd
				let productRef = this.$fireStore.collection('products').doc(product['Uid'])
				productRef.set({
					name: product['Nome'],
					price: product['Preço'],
					environment: product['Ambiente'],
					description: product['Descrição'],
					counter: qtd
				})
			} else {
				this.removeProduct(product)				
			}
		},
		moveProduct() {
			const product = this.productMove
			let productRef = this.$fireStore.collection('products').doc(product['Uid'])			
			product['Ambiente'] = this.environmentMove
			productRef.set({
				name: product['Nome'],
				price: product['Preço'],
				environment: this.environmentMove,
				description: product['Descrição'],
				counter: product['Preço']
			})
		},
		clearProductForm () {
			this.product = {
				name: '',
				price: '',
				counter: 1,
				validity: '',
				environment: this.environmentsOptions.length > 0 ? this.environmentsOptions[0].key : '',
				description: '',
			}
		}
	}
}
</script>

<style lang="scss" module>
main {
	margin: 20px 40px
}
</style>