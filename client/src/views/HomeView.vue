// src/views/Home.vue

<template>
  <div>
    <h1>Olá {{ username }}</h1>
    <p>Saldo conta: {{ saldo }}</p>
    <input type="button" value="Histórico de movimentações" @click="historico" />
    <br>
    <br>
    <input type="button" value="Transferir" @click="transferir" />
    <br>
    <br>
    <input type="button" value="Logout" @click="logout" />
  </div>
</template>

<script>
import saldoService from '../services/saldoService.js';
export default {
  data() {
    return {
      saldo: '',
    };
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login');
    }

    this.username = this.$store.getters.getNome
    var rep = await saldoService.saldo(this.$store.getters.getUser)
    this.saldo = 'R$ ' +  rep.saldo

  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
    historico() {
      this.$router.push('/historico');
    },
    transferir(){
      this.$router.push('/transferir');
    }

  }
};
</script>