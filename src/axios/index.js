import axios from 'axios';

export default axios.create({
             
    baseURL: 'http://10.22.1.33:3000',
    timeout: 30000,
  })