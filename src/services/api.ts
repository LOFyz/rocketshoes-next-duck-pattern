import axios from 'axios'

// Aqui é a conexão com a api
const api = axios.create({
  baseURL: 'http://localhost:3333'
})
export default api
