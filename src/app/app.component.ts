import { Component } from '@angular/core';
import { AppServiceTsService } from './app.service';
import { Employee } from './models/employee';
import { State } from './models/states';
import { DxPieChartModule } from 'devextreme-angular';
import { PercentPipe } from '@angular/common';
import { PopulationByRegion } from './models/popluationByRegion';
import { MyDataItem } from './models/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  floridaCount: any;
  californiaCount: any;
  stateCount: any
  countStates: any

  states: State[];
  startEditAction = 'click';
  selectTextOnEditStart = true;

  items: MyDataItem[];

  constructor(service: AppServiceTsService) {

    //this.dataSource = service.getEmployees();
    this.states = service.getStates();
    console.log(this.states)

    this.items = service.getItems();
    console.log(this.items)

    //const states = ['Florida', 'Texas', 'California', 'Florida', 'Texas', 'Florida'];
    //this.floridaCount = service.countState('Florida', this.states.Name); //-> not working. Why? Since states is an array of State objects, you need to iterate over it and access the Name property of each object to compare it with the desired state name. Here's an example of how you can do it:
    this.floridaCount = service.countState('Florida', this.states.map(s => s.Name)); //right solution
    this.californiaCount = service.countState('California', this.states.map(s => s.Name)); //right solution
    console.log(this.floridaCount)
    console.log(this.californiaCount)

    //this.countStates = service.countState('Florida', this.states.map(s => s.Name)); //right solution
    //console.log(this.countStates = this.dataSource.map(s => s.StateID)) //az idkat kiirja a kulonbozo stateknek
  }

  addNewItem() {
    const newItemId = this.items.length + 1; // generate unique id
    const newItemValue = Math.floor(Math.random() * 100); // generate random value
    const newItem: MyDataItem = { id: newItemId, name: `Item ${newItemId}`, value: newItemValue };
    this.items.push(newItem);
  }

  /*-*/
}