import Vue from 'vuex'

export default function ({ redirect, store, route }) {	
	const user = store.$fireAuth.currentUser	
	if (!user && route.path !== '/') redirect('/')
}