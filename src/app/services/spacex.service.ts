import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  private url = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getLaunches(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getLaunchesByYear(year: string): Observable<mission[]> {
    return this.http.get<any[]>(`${this.url}?launch_year=${year}`);
  }

  getMissionDetails(id: number): Observable<mission
  > {
    return this.http.get<any>(`${this.url}/${id}`);
  }
}
