import axios from "axios";

const url = 'http://localhost:8081/api/v1/';

export default {
  historico(login) {
    return axios
      .get(url + `movimentacao?login_origem=${login}`)
      .then(response => response.data);
  },
  criar(dados) {
    return axios
      .post(url + `movimentacao`, dados)
      .then(response => response.data);
  },
};