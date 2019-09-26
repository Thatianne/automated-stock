<template>
  <section :class="$style.container">
    <div class="d-flex flex-row">
      <div 
      class="d-flex flex-column flex-wrap justify-content-center"
      :class="$style.imageBox">             
        <logo />
      </div>    
      <div class="d-flex flex-column align-items-start justify-content-center">
        <label for="">Usuário</label>
        <b-form-input 
          type="text"
          @keyup.enter.native="doLogin"
          v-model="user" />
        <label for="">Senha</label>
        <b-form-input 
          type="password"
          @keyup.enter.native="doLogin"
          v-model="psw"/>
        <b-button 
        variant="warning"        
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
      .then(data => {
        const user = data.user.providerData[0]
        this.$router.push('users')       
        this.$store.commit('app/setUser', user)        
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
    border-right: 1px solid #D5AD56;
  }  
}
@media(max-width: 500px) {
  .container {
    .imageBox {
      margin: 0 0 16px 0;
      padding: 0;
    }
  }
}
</style>
