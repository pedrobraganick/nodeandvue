
<template>
  <div>
    <h1>Olá {{ username }}</h1>
    <div>
      <table style="display: inline-table">
        <tr>
          <th>Id</th>
          <th>Origem</th>
          <th>Destino</th>
          <th>Valor transferido</th>
        </tr>
      <tr v-for="row in rows" :key="row.id_transacao">
        <td>{{ row.id_transacao }}</td>
        <td>{{ row.login_origem }}</td>
        <td>{{ row.login_destino }}</td> 
        <td>{{ row.valor_transferido }}</td> 
      </tr>
      </table>
      </div>
    <input type="button" value="Voltar" @click="voltar" />
    <br>
    <br>
    <input type="button" value="Logout" @click="logout" />
  </div>
</template>
<script>
import movimentacaoService from '../services/movimentacaoService.js';
export default {
  data() {
    
    return {
      rows:[{login_origem:1,id_transacao:1}],
      username: ''
    };
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login');
    }

    this.username = this.$store.getters.getNome
    var rep = await movimentacaoService.historico(this.$store.getters.getUser)
    if(rep)
      this.rows = rep
      console.log(this.rows)

  },
  
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
    voltar() {
      this.$router.push('/');
    }
  }
};
</script>