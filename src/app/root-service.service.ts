import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class RootServiceService {

  rootCounter = new BehaviorSubject<number>(0);
  constructor() { }

  get counter$(){
    return this.rootCounter.asObservable();
  }

  increment(){
    this.rootCounter.next(this.rootCounter.value + 1);
  }
}
