import axios from 'axios';

export class ApiManager {
  static adminDomain = 'http://68.183.225.112:1337';
  static adminBaseUrl = `${this.adminDomain}/api`;
  static subDomainEn = 'http://sybel.en:3000';
  static subDomainFr = 'http://sybel.com:3000';

  static appointmentDomain = 'http://192.168.1.9:3002';
  static appointmentBaseUrl = `${this.appointmentDomain}/api/v1`;
}

export const AxiosAdminInstance = axios.create({
  baseURL: `${ApiManager.adminBaseUrl}/`,
  timeout: 20000,
});

AxiosAdminInstance.interceptors.response.use(function (response) {
  return response.data.data;
}, function (error) {
  return Promise.reject(error);
});

export const AxiosAppointmentInstance = axios.create({
  baseURL: `${ApiManager.appointmentBaseUrl}/`,
  timeout: 20000,
});

AxiosAppointmentInstance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});