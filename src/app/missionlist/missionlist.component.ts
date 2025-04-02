import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpacexService } from '../services/spacex.service';
import { CommonModule } from '@angular/common'; 
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-missionlist',
  standalone: true,  
  imports: [CommonModule, MissionfilterComponent], 
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any[] = [];
  filteredMissions: any[] = [];

  constructor(
    private spacexService: SpacexService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.loadMissions();
  }

  loadMissions(year: string = ''): void {
    if (year) {
      this.spacexService.getLaunchesByYear(year).subscribe(
        data => {
          this.filteredMissions = data;
        },
        error => {
          console.error('Error fetching launches:', error);
        }
      );
    } else {
      this.spacexService.getLaunches().subscribe(
        data => {
          this.filteredMissions = data;
        },
        error => {
          console.error('Error fetching launches:', error);
        }
      );
    }
  }

  applyFilter(year: string): void {
    this.loadMissions(year);
  }

  viewDetails(missionId: number) {
    this.router.navigate(['/details', missionId]).then(() => {
      this.cdr.detectChanges();
    });
  }
}
