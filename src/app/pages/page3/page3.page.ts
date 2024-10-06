import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.counterService.incrementPage3Count();
  }
}
