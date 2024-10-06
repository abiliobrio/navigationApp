import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit() {}  

  ionViewWillEnter() {
    this.counterService.incrementPage2Count();
  }
}
