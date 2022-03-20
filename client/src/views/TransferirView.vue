
<template>
  <div>
    <h1>Olá {{ username }}</h1>
    <input type="text" placeholder="Usuário destino" v-model="user" />
    <input type="text" placeholder="Valor" v-model="valor" />
    <br>
    <br>
    <input type="button" value="Transferir" @click="transferir" />
    <br>
    <br>
    <input type="button" value="Voltar" @click="voltar" />
    <br>
    <br>
    <input type="button" value="Logout" @click="logout" />
  </div>
</template>

<script>
import movimentacaoService from '../services/movimentacaoService.js';
import authService from '../services/authService.js'
export default {
  data() {
    return {
      valor: '',
      user:''
    };
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login');
    }

    this.username = this.$store.getters.getNome


  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
    voltar() {
      this.$router.push('/');
    },
    async transferir(){
      const dados = {
      login_origem: this.$store.getters.getUser,
      login_destino: this.user,
      valor: this.valor
    }
    var rep = await authService.existeUser(this.user)
    if(rep.login){
      
      rep = await movimentacaoService.criar(dados)
      if(rep){
        alert('transferencia realizada');
      }
    }
    }

  }
};
</script>