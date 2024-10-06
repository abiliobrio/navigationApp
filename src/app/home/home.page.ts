import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  page1Count: number = 0;
  page2Count: number = 0;
  page3Count: number = 0;

  constructor(private counterService: CounterService) { }

  ngOnInit() {}

  ionViewWillEnter() {
    // Atualiza os contadores na página inicial
    this.page1Count = this.counterService.getPage1Count();
    this.page2Count = this.counterService.getPage2Count();
    this.page3Count = this.counterService.getPage3Count();
  }
}