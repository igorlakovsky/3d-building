import axios from 'axios'
import { notification } from 'antd'

// eslint-disable-next-line no-undef
const host = process.env.REACT_APP_HOST

const openNotification = (message) => {
  notification.open({
    type: 'error',
    message: 'Ошибка получения данных  с сервера',
    description: message,
    duration: 0,
  })
}

axios.defaults.headers.common['Z-Token'] = window.localStorage.getItem('_token')
axios.defaults.headers.common['id'] = window.localStorage.getItem('_id')
axios.defaults.headers.common['Content-Type'] = 'application/json'

// Можно что то сделать перед отправкой запроса
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

const hrefLogin = '//lk.zmi59.ru/login'

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    location.href = hrefLogin
    return Promise.reject(error)
  }
)

export function getDepartments(setDepartments, setStatus) {
  setStatus('loading')
  axios
    .get(host + '/departments/statuses', {
      params: {},
    })
    .then(function (response) {
      setStatus('success')
      setDepartments(response.data)
    })
    .catch(function (error) {
      setStatus('error')
      openNotification(error.message)
    })
}

export function getSectors(setSectors, departmentId) {
  axios
    .get(host + '/departments/sectors/' + departmentId, {
      params: {},
    })
    .then(function (response) {
      setSectors(response.data)
    })
    .catch(function (error) {
      openNotification(error.message)
    })
}

export function getMachines(setMachines, sectorId) {
  axios
    .get(host + '/departments/sectors/machines/' + sectorId, {
      params: {},
    })
    .then(function (response) {
      setMachines(response.data)
    })
    .catch(function (error) {
      openNotification(error.message)
    })
}
