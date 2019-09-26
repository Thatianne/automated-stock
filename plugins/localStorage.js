import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
		key: 'automated.stock',
		paths: [
			'app.user'
		]
	})(store)
}