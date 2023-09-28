import {Waiter} from "../type";

const URL = 'http://localhost:4000/waiters/';

export class WaiterApi {
  static getWaiters(): Promise<Waiter[]> {
    return fetch(URL).then(result => result.json());
  }

  static postWaiter(waiter: Waiter): Promise<Waiter> {
    return fetch(URL, {
      method: 'POST',
      body: JSON.stringify(waiter),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
  }
}