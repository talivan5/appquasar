// import Vue from 'vue'
import axios from 'axios'
const setCursos = ({ commit }) => {
  return axios.get(`http://127.0.0.1:8000/api/seminarios`)
    .then((res) => {
      commit('SET_CURSOS', res.data.response)
    })
    .catch((err) => {
      console.error(err)
    })
}
export {
  setCursos
}
