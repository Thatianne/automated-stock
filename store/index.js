import Vue from 'vue'

export const state = () => ({
		user: {},
		isAutheticated: false
})

export const mutations = {
	setUser (state, user) {
		// this.$fireStore.collection('users').get
		state.user = user		
	},

	setIsAuthenticated (state, isAutheticated) {
		state.isAutheticated = isAutheticated
	}
}

export const actions = {
}