// Importações
import axios from 'axios'
import React from 'react'

// estabelecendo a conexação react como servidor express
export default axios.create({
    baseURL: 'http://localhost:8081'
})

