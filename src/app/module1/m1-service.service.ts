import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Module1ServiceModule } from './module1-service.module';
@Injectable({
  providedIn: Module1ServiceModule,
})
export class M1ServiceService {
  counter = new BehaviorSubject<number>(0);
  constructor() {}

  get counter$() {
    return this.counter.asObservable();
  }

  increment() {
    this.counter.next(this.counter.value + 1);
  }
}
