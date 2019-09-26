import Vue from 'vuex'
import { isEmpty } from 'lodash'

export default function ({ redirect, store, route }) {		
	const user = store.state.app.user
	if (isEmpty(user) && route.path !== '/') redirect('/')
}