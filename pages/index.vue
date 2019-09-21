<template>
  <section class="container">
    <div class="d-flex flex-row">
      <div class="d-flex flex-column image-box">
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
      if(this.user === 'admin' && this.psw === 'admin')
        this.$router.push('users')
    }
  }
}
</script>

<style lang="scss">
.container input {
  margin-bottom: 12px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .image-box {
    margin-right: 42px;
    padding-right: 42px;
    border-right: 1px solid #0069d9;
  }
}
</style>
