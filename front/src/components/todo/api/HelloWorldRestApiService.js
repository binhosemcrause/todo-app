import { apiClient } from './ApiClient'

export const retriveHelloWorldBean = () => apiClient.get('/hello-world-bean')

export const retriveHelloWorldPathVariable 
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`)


