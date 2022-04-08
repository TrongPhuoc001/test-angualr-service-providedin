import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module1.component';
import { Module1RoutingModule } from './module1-routing.module';
import { Module1ServiceModule } from './module1-service.module';


@NgModule({
  declarations: [Module1Component],
  imports: [CommonModule, Module1RoutingModule, Module1ServiceModule],
  exports: [Module1Component],
})
export class Module1Module {}
