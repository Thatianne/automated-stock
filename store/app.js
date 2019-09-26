import Vue from 'vue'

export const state = () => ({
	user: {},
	isAutheticated: false
})

export const mutations = {
	setUser (state, user) {		
		state.user = user		
	}
}

export const actions = {
}

export const getters = {
	isAutheticated (state) {		
		return state.user && state.user != {} 
	}
}