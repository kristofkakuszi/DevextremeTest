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

  helloWorld() {
    alert('Hello world!');
  }

  dataSource: Employee[];

  states: State[];

  startEditAction = 'click';

  selectTextOnEditStart = true;

  constructor(service: AppServiceTsService) {
    this.dataSource = service.getEmployees();
    this.states = service.getStates();

    this.populationByRegions = service.getPopulationByRegions();
    console.log(this.populationByRegions)
    this.statesInsteadOfpopulationByRegions = service.getStatesInsteadOfPopulationByRegions();
    console.log(this.statesInsteadOfpopulationByRegions)
  }

  /*-*/

  pipe: any = new PercentPipe('en-US');

  populationByRegions: PopulationByRegion[];
  statesInsteadOfpopulationByRegions: State[];

  customizeTooltip = (arg: any) => ({
    text: `${arg.valueText} - ${this.pipe.transform(arg.percent, '1.2-2')}`,
  });

}