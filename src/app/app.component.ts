import { Component } from '@angular/core';
import { M1ServiceService } from './module1/m1-service.service';
import { RootServiceService } from './root-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-service-injectable';
  counter = 0;
  m1Counter = 0;
  constructor(private rootService: RootServiceService, ) { }

  ngOnInit(): void {
    this.rootService.counter$.subscribe((counter) => {
      this.counter = counter;
    });
  
    // this.m1Service.counter$.subscribe((counter) => {
    //   this.m1Counter = counter;
    // });
  }


}
