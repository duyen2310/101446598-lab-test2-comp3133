import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpacexService } from '../services/spacex.service';
@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent implements OnInit {
  missionId: number = 1;
  missionDetails: any = null;

  constructor(
    private route: ActivatedRoute,
    private spaceXService: SpacexService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.missionId = +id;
        this.fetchMissionDetails();
      }
    });
  }

  fetchMissionDetails(): void {
    this.spaceXService.getMissionDetails(this.missionId).subscribe((data) => {
      this.missionDetails = data;
    });
  }
}
