import { Component } from '@angular/core';
import { AppServiceTsService } from './app.service';
import { Employee } from './models/employee';
import { State } from './models/states';
import { DxPieChartModule } from 'devextreme-angular';
import { PercentPipe } from '@angular/common';
import { PopulationByRegion } from './models/popluationByRegion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  floridaCount: any;
  californiaCount: any;

  stateCount: any

  countStates: any



  dataSource: Employee[];
  states: State[];
  startEditAction = 'click';
  selectTextOnEditStart = true;

  constructor(service: AppServiceTsService) {

    this.dataSource = service.getEmployees();
    this.states = service.getStates();
    console.log(this.states)

    this.populationByRegions = service.getPopulationByRegions();
    console.log(this.populationByRegions)


    //const states = ['Florida', 'Texas', 'California', 'Florida', 'Texas', 'Florida'];

    //this.floridaCount = service.countState('Florida', this.states.Name); //-> not working. Why? Since states is an array of State objects, you need to iterate over it and access the Name property of each object to compare it with the desired state name. Here's an example of how you can do it:
    this.floridaCount = service.countState('Florida', this.states.map(s => s.Name)); //right solution
    this.californiaCount = service.countState('California', this.states.map(s => s.Name)); //right solution
    console.log(this.floridaCount)
    console.log(this.californiaCount)




    //this.countStates = service.countState('Florida', this.states.map(s => s.Name)); //right solution
    console.log(this.countStates = this.dataSource.map(s => s.StateID)) //az idkat kiirja a kulonbozo stateknek

  }

  /*-*/

  pipe: any = new PercentPipe('en-US');
  populationByRegions: PopulationByRegion[];

  customizeTooltip = (arg: any) => ({
    text: `${arg.valueText} - ${this.pipe.transform(arg.percent, '1.2-2')}`,
  });

}