import { Injectable } from '@nestjs/common';
const dataPerson = require('../../data/dataPerson.json');
const dataTransaction = require('../../data/dataTc.json');


@Injectable()
export class DummyDataService {


  private users = dataPerson.users;
  private transactions = dataTransaction.transactions;

  getUserDataByTc(numero_tarjeta: string) {
    return this.users.find(usuario => usuario.numero_tarjeta === numero_tarjeta);
  }

  getTransactionByCardNumber(numeroTarjeta: string) {
    return this.transactions.find(transaccion => transaccion.numero_tarjeta === numeroTarjeta);
  }
}
