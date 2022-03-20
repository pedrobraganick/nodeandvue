import axios from "axios";

const url = 'http://localhost:8081/api/v1/';

export default {
  login(credentials) {
    return axios
      .post(url + 'login/', credentials)
      .then(response => response.data);
  },
  signUp(credentials) {
    return axios
      .post(url + 'usuario/', credentials)
      .then(response => response.data);
  },
  existeUser(login) {
    return axios
      .get(url + `usuario?login=${login}`)
      .then(response => response.data);
  },
  getSecretContent() {
    return axios.get(url + 'secret-route/').then(response => response.data);
  }
};