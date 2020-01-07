import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import { Form, Input, FormItem, Menu, MenuItem, Row, Col, Tabs, TabPane, Button, Select, Option,
  Table, TableColumn, Checkbox, Pagination, Badge, Radio, Switch,
  DatePicker} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.qs = qs
axios.defaults.baseURL = 'http://127.0.0.1:7300/mock/5e0abca686d07b2ec0cb3d02/mft/'
Vue.prototype.$ajax = axios

Vue.config.productionTip = false
Vue.use(Form).use(Input).use(FormItem).use(axios).use(Checkbox)
Vue.use(Button).use(Select).use(Option).use(Badge)
Vue.use(Menu).use(MenuItem).use(Row).use(Col).use(Switch)
Vue.use(Tabs).use(TabPane).use(Pagination).use(Radio)
Vue.use(Table).use(TableColumn).use(DatePicker)
/* eslint-disable no-new */
let vm = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

Vue.use({
  vm
})
