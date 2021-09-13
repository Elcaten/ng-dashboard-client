import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { Computer } from 'src/app/models/computer.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-computer-details',
  templateUrl: './computer-details.component.html',
  styleUrls: ['./computer-details.component.scss']
})
export class ComputerDetailsComponent  {
  computer$ = this.route.paramMap.pipe(
    map(params => params.get('computerId')),
    filter((x) => x != null),
    switchMap(computerId => this.http.get<Computer>(this.apiUrl, {params: new HttpParams().set('_id', computerId)})),
    shareReplay({bufferSize:1 ,refCount: true})
  )
  private apiUrl = `${environment.apiBaseUrl}/computers`

  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    
  }


}
