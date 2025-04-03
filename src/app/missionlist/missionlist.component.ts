import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpacexService } from '../services/spacex.service';
import { CommonModule } from '@angular/common'; 
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-missionlist',
  standalone: true,  
  imports: [
    CommonModule,
    MissionfilterComponent,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ], 
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
    this.router.navigate(['/details'], { queryParams: { id: missionId } }).then(() => {
      this.cdr.detectChanges();
    });
  }
}
