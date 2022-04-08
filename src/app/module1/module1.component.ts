import { Component, OnInit } from '@angular/core';
import { RootServiceService } from '../root-service.service';
import { M1ServiceService } from './m1-service.service';
@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.scss'],
})
export class Module1Component implements OnInit {
  counter = 0;
  m1Counter = 0;
  constructor(private rootService: RootServiceService, private m1Service: M1ServiceService) {}

  ngOnInit(): void {
    this.rootService.counter$.subscribe((counter) => {
      this.counter = counter;
    });
    this.m1Service.counter$.subscribe((counter) => {
      this.m1Counter = counter;
    });
  }

  onIncrement() {
    this.rootService.increment();
  }

  onIncrementM1() {
    this.m1Service.increment();
  }
}
