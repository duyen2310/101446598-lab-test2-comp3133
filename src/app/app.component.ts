import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MissionlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101446598-lab-test2-comp3133';
}
