import axios from 'axios'

export function getDepartments(setDepartments) {
  axios
    .get('http://192.168.1.8:4011/departments/statuses', {
      params: {},
    })
    .then(function (response) {
      setDepartments(response.data)
    })
    .catch(function (error) {
      console.log(error)
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
      console.log(error)
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
      console.log(error)
    })
}
