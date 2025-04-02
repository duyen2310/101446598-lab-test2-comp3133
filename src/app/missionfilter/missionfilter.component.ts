import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  imports: [],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {
  @Output() filterYear = new EventEmitter<string>();

  applyFilter(year: string) {
    this.filterYear.emit(year);
  }
}
