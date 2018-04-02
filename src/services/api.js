import { create } from 'apisauce';


const api  = create({
    baseURL : 'http://10.0.3.110:8000/v1/api/'
})


export default api;