import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../services/spacex.service';
import { CommonModule } from '@angular/common';  // Needed for `ngFor`

@Component({
  selector: 'app-missionlist',
  standalone: true,  // Declare this component as standalone
  imports: [CommonModule],  // Import CommonModule for ngFor to work
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.loadMissions();
  }

  loadMissions(year: string = ''): void {
    if (year) {
      this.spacexService.getLaunchesByYear(year).subscribe(
        data => {
          console.log('Launches filtered by year:', data);
          this.missions = data;
        },
        error => {
          console.error('Error fetching launches:', error);
        }
      );
    } else {
      this.spacexService.getLaunches().subscribe(
        data => {
          console.log('All launches:', data);
          this.missions = data;
        },
        error => {
          console.error('Error fetching launches:', error);
        }
      );
    }
  }
}
