import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { Computer, computerMetadata } from 'src/app/models/computer.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent  {
  computerMetadata = computerMetadata;
  apiUrl = `${environment.apiBaseUrl}/computers`

  dataSource = new CustomStore({
    key: "_id",
    load: () => this.http.get<Computer[]>(this.apiUrl).toPromise(),
    insert: (values) => this.http.post<Computer[]>(this.apiUrl, this.toApiModel(values)).toPromise(),
    update: (key, values) => this.http.put<Computer[]>(
      this.apiUrl,
      this.toApiModel(values),
      { params: new HttpParams().set("_id", key) }
    ).toPromise(),
    remove: (key) => this.http.delete<void>(this.apiUrl, { params: new HttpParams().set("_id", key) }).toPromise()
  });

  constructor(private http: HttpClient) { }

  //TODO: find a better solution to store date
  private toApiModel(computer: Computer) {
    const result: Computer = computer;
    result.introduced = computer.introduced ? new Date(computer.introduced).getTime() as any : null;
    result.discontinued = computer.discontinued ? new Date(computer.discontinued).getTime() as any : null;
    result.company = computer.company ?? null;
    result.name = computer.name ?? null;
    return result
  }
}
