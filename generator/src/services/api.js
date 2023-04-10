// Importações
import axios from 'axios'
import React from 'react'

// Criando uma estancia da nossa API
const Api = axios.create({
    baseURL:window.location.href.includes("localhost:8081")
    
})


export default Api;