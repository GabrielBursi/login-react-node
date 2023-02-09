import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://myapi-node.cyclic.app'
}) 

export default Api