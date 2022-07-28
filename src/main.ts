import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { RestClient } from 'typed-rest-client'

createApp(App).mount('#app')

const client = new RestClient('vue-application', '')

const response = await client.get('https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration');
console.log(response);


