import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit() {}  

  ionViewWillEnter() {
    // Incrementa o contador quando a página é carregada
    this.counterService.incrementPage1Count();
  }
}
