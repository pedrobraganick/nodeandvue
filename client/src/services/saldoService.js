import axios from "axios";

const url = 'http://localhost:8081/api/v1/';

export default {
  saldo(login) {
    return axios
      .get(url + `saldo?login=${login}`)
      .then(response => response.data);
  },
};