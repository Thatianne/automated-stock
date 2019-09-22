import Vue from 'vue'

export const doLogin = ({ email, password }) => Vue.$fireAuth.signInWithEmailAndPassword(email, password)