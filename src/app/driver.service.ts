import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private client: HttpClient) { }

  url = 'http://localhost:4777/api/v1/drivers';

  findAll(): Observable<Driver[]> {
    return this.client.get<Driver[]>(this.url);
  }

  // findById(entity: Driver): Observable<Driver[]> {
  //   return this.client.get<Driver[]>(this.url + '/' + entity.DriverId);
  // }

  update(entity: Driver): Observable<Driver> {
    return this.client.put<Driver>(this.url, entity);
  }

  add(entity: Driver): Observable<Driver> {
    return this.client.post<Driver>(this.url, entity);
  }

  remove(entity: Driver): Observable<Driver> {
    return this.client.delete<Driver>(this.url + '/' + entity.driverId);
  }
}
