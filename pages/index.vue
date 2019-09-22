<template>
  <section :class="$style.container">
    <div class="d-flex flex-row">
      <div 
      class="d-flex flex-column"
      :class="$style.imageBox">
        <h1 class="title">
          Estoque
        </h1>      
        <logo />
      </div>    
      <div class="d-flex flex-column align-items-start justify-content-center">
        <label for="">Usuário</label>
        <b-form-input 
          type="text"
          v-model="user" />
        <label for="">Senha</label>
        <b-form-input 
          type="password"
          v-model="psw"/>
        <b-button 
        variant="primary"
        @click="doLogin">
        Entrar
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>
import { doLogin } from '~/api/users'

import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      user: '',
      psw: ''
    }
  },
  methods: {
    doLogin () {
      this.$fireAuth.signInWithEmailAndPassword(this.user, this.psw)
      .then(user => {
        this.$router.push('users')
        this.$store.dispatch('setUser', user)
        this.$store.dispatch('isAuthenticated', true)
      })
    }
  }
}
</script>

<style lang="scss" module>
.container input {
  margin-bottom: 12px;
}
.container {
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .imageBox {
    margin-right: 42px;
    padding-right: 42px;
    border-right: 1px solid #0069d9;
  }
}
</style>
