import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private client: HttpClient) { }

  url = 'http://localhost:4777/api/v1/customers';

  findAll(): Observable<Customer[]> {
    return this.client.get<Customer[]>(this.url);
  }

  // findById(entity: Customer): Observable<Customer[]> {
  //   return this.client.get<Customer[]>(this.url + '/' + entity.customerId);
  // }

  update(entity: Customer): Observable<Customer> {
    return this.client.put<Customer>(this.url, entity);
  }

  add(entity: Customer): Observable<Customer> {
    return this.client.post<Customer>(this.url, entity);
  }

  remove(entity: Customer): Observable<Customer> {
    return this.client.delete<Customer>(this.url + '/' + entity.customerId);
  }
}
