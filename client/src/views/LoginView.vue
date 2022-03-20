/* eslint-disable */
<template>
  <div>
    <h1>Login</h1>
    <input type="text" placeholder="Usuário" v-model="user" />
    <input type="text" placeholder="Senha" v-model="senha" />
    <p v-if="msg">{{ msg }}</p>
  </div>
  <div>
    <input type="button" @click="logar()" value="Login" />
    <input type="button" @click="signUp" value="Cadastro" />
  </div>
</template>
<script>
import AuthService from '../services/authService.js';

export default {
  data() {
    return {
      login: '',
      senha: '',
      msg: '',
      nome:''
    };
  },
  methods: {
    async logar() {
      try {
        const credentials = {
          login: this.user,
          senha: this.senha
        };
        const response = await AuthService.login(credentials);
        if(response.auth){
            console.log(response.auth)
            const token = response.token;
            const user = this.user;
            const nome = response.user
            this.$store.dispatch('login', { token, user, nome });
            this.msg = "logado com sucesso"
            this.$router.push('/');
        }
        else{
            alert('Usuário não existe')
            this.$router.push('/sign-up');
        }

        
      } catch (error) {
        this.msg = error
      }
    },

    signUp(){
        this.$router.push('/sign-up');
    }
  }
};
</script>