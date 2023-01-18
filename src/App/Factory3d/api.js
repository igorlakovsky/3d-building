import axios from 'axios'
import { notification } from 'antd'

const openNotification = (message) => {
  notification.open({
    type: 'error',
    message: 'Ошибка получения данных  с сервера',
    description: message,
    duration: 0,
  })
}

export function getDepartments(setDepartments, setStatus) {
  setStatus('loading')
  axios
    .get('http://192.168.1.8:4011/departments/statuses', {
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
    .get('http://192.168.1.8:4011/departments/sectors/' + departmentId, {
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
    .get('http://192.168.1.8:4011/departments/sectors/machines/' + sectorId, {
      params: {},
    })
    .then(function (response) {
      setMachines(response.data)
    })
    .catch(function (error) {
      openNotification(error.message)
    })
}
