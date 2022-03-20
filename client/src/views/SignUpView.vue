/* eslint-disable */

<template>
  <div>
    <h1>Cadastro</h1>
    <input type="text" placeholder="Username" v-model="login" />
    <input type="text" placeholder="Password" v-model="senha" />
    <input type="text" placeholder="Nome" v-model="nome" />
    <input type="button" @click="signUp" value="Cadastrar" />
    <p v-if="msg">{{ msg }}</p>
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
    async signUp() {
      try {
        const credentials = {
          login: this.login,
          senha: this.senha,
          nome: this.nome
        };
        var rep = await AuthService.existeUser(this.login);
        if(!rep.login){
          const response = await AuthService.signUp(credentials);
          if(response){
              alert("Usuário criado")
              this.$router.push('/login');
          }
        }
      } catch (error) {
          this.msg = error
      }
    },
  }
};
</script>