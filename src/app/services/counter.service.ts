import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private page1Count: number = 0;
  private page2Count: number = 0;
  private page3Count: number = 0;

  constructor() { }

  // Métodos para acessar e incrementar os contadores
  incrementPage1Count() {
    this.page1Count++;
  }

  incrementPage2Count() {
    this.page2Count++;
  }

  incrementPage3Count() {
    this.page3Count++;
  }

  // Métodos para pegar o valor atual dos contadores
  getPage1Count(): number {
    return this.page1Count;
  }

  getPage2Count(): number {
    return this.page2Count;
  }

  getPage3Count(): number {
    return this.page3Count;
  }
}
