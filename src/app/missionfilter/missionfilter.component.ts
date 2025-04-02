import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule, 
    MatInputModule,
  ],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {
  @Output() filterChanged = new EventEmitter<string>();

  onFilterChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filterChanged.emit(target.value);
  }
}
