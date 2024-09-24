import axios from 'axios';

axios.defaults.validateStatus = function(){
  return true;
}

export const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export type Transaction = {
  id: string;
  nome: string;
  cpfCnpj: string;
  data: string;
  valor: number;
}